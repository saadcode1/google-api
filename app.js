if(process.env.NODE_ENV != "production"){
  require('dotenv').config()
}
const express =require("express");

const app=express();
const port=8888;

const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth20").Strategy;

require("./auth.js");

const path = require("path");

const engine=require("ejs-mate");
app.engine('ejs', engine);
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/",(req,res)=>{
     res.render("googleApi.ejs");
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] }
  
  ));

app.get('/auth/google/callback',
  passport.authenticate('google', { 
    successRedirect:'/auth/home',
    failureRedirect: '/fail' }),
)

app.get("/auth/home",(req,res)=>{
  res.render("home.ejs");
})

app.get("/fail",(req,res)=>{
  res.send("req failes");
})
app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`);
})