import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  feedback: String
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact