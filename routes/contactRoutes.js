import { Router } from 'express';
import Contact from '../models/Contact.js'; // Import the Contact model
import path from 'path';

const router = Router();

router.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/contact.html'));
});

router.post('/contactus', async (req, res) => {
  // your contact form logic here
  console.log(req.body); // log the request body
  const { name, email, phone, feedback } = req.body;  

  try{
    const newContact = new Contact({
      name,
      email,
      phone,
      feedback
    });

    await newContact.save(); // Save the contact form data to your database

    res.status(201).send({ message: 'Contact form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error saving contact form data', message: error.message });
  }
});

export default router;