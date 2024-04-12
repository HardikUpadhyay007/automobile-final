// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const path = require('path');
// const mongoose = require('mongoose');


// // async ()=>{await mongoose.connect('mongodb+srv://admin:admin@cluster0.tsgqtix.mongodb.net/')}
// // const User = mongoose.model("Users", { name: String, email: String, password: String, phone: String});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(express.static(__dirname));

// app.get('/', async (req, res)=>{
//     // const user = new User({
//     //     name: name,
//     //     email: email,
//     //     password: password,
//     //     phone: phone
//     // })

//     // user.save();
//     // res.json(){
//     //     "msg": "user created";
//     // }

// })


// app.post("/signup", (req, res)=>{
//     const {name, phone, email, password} = req.body();
    
// })

// app.listen(3000, ()=>{
//     console.log("app listening on port 3000");
// })




const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.static('src'));

const UserSchema = new mongoose.Schema({

  username: String,
  contact: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log('Raw request body:', req.body);
    next();
  });

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/signup.html'));
  });
  

app.post('/signup', async (req, res) => {
  console.log(req.body); // log the request body
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

const uri = 'mongodb+srv://admin:admin@cluster0.tsgqtix.mongodb.net/tester123';
mongoose.connect(uri)
  .then(() => {
    app.listen(3000, () => console.log('Server is running on port 3000'));
  })
  .catch(err => console.error(err));