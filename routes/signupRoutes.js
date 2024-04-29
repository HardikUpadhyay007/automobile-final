import { Router } from "express";
import User from "../models/User.js";
import path from "path";

const router = Router();

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/signup.html"));
});

router.post("/signup", async (req, res) => {
    // console.log(req.body);

    // const existingUser = await User.findOne({ email: req.body.email });
    // if (existingUser) {
    //     return res.redirect("/?message=User already exists");
    // }

    try {
        const user = new User({
            username: req.body.username,
            contact: req.body.contact,
            email: req.body.email,
            password: req.body.password,
        });
        await user.save();

        return res.redirect("/?message=User created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send({
            error: "Error creating user",
            message: error.message,
        });
    }
});

export default router;
