const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res)=>{
    
})

app.listen(3000, ()=>{
    console.log("app listening on port 3000");
})