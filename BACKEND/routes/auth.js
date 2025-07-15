const router = require("express").Router();
const { User } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        // Validate user input (email and password)
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" });

        // Check if entered password matches hashed password in DB
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" });

        //update Last Login
        user.lastLogin = new Date();
        await user.save();

        const token = user.generateAuthToken();
        
        // Corrected Response
        res.status(200).send({
            data: {
                token: token,
                userId: user._id,
                name: user.name,
                email: user.email,
                expectedRole: user.expectedRole
            },
            message: "Logged in Successfully"
        });        

    // Catch any server-side error
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});


const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data);
};

module.exports = router;