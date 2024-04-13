import { Router } from 'express';
import User from '../models/User.js';
import path from 'path';

const router = Router();

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/signup.html'));
});

router.post('/signup', async (req, res) => {
  // your signup logic here
  console.log(req.body); // log the request body
  
  const existngUser = await User.findOne({ email: String });
  if (existngUser) {
    return res.status(400).send("User already exists");
  }

  try {
    const user = new User({
      username: req.body.username, // access username from req.body
      contact: req.body.contact, // access contact from req.body
      email: req.body.email, // access email from req.body
      password: req.body.password, // access password from req.body
    });
    await user.save();
    
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error creating user', message: error.message });
  }
});

export default router;