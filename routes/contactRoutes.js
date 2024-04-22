import { Router } from "express";
import Contact from "../models/Contact.js";
import path from "path";

const router = Router();

router.get("/contactus", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/contact.html"));
});

router.post("/contactus", async (req, res) => {
    console.log(req.body);
    const { name, email, phone, feedback } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            feedback,
        });

        await newContact.save();

        res.status(201).send({
            message: "Contact form data saved successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            error: "Error saving contact form data",
            message: error.message,
        });
    }
});

export default router;
