const express = require("express");
const mongoose = require("mongoose");
const User = require("./users");
const bodyParser = require("body-parser")
const app = express();

mongoose.connect("mongodb+srv://prayag_SIHH:pp1234@cluster0.tuna9.mongodb.net/tutorial?retryWrites=true&w=majority", 
{ useNewUrlParser: true,
 useUnifiedTopology: true });


User.find({"reg_name": "kothrud"},function(err,users) {
    if (err) console.warn(err);
    console.warn(users);
});

app.use(bodyParser.urlencoded ({extended: true}));

app.get("/", function (req, res){
    // res.send("hello world")
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res){
//  res.send("jfffkmek");
  
await var n112  = String(req.body.n11);
// var n222 = String(req.body.n22);

res.send("the sum is"+`<br/><br />email:${n112}<br />password:${n222}<br />`);
});


app.listen(3000, function (req, res) {
   console.log("3000 port running........ ");
});

 