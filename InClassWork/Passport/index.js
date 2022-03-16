const express = require('express');
const app = express();
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local')

const logger = require('morgan');
app.use(logger('dev'));

const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)
.then(() => console.log(`Connected to ${keys.db} database.`))
.catch(err => console.log(`Issues connecting to ${keys.db} database.`))

const User = require('./models/User')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(require('express-session')({
    secret: "Blah blah blah",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', function(req,res){
    res.render('home.ejs')
})

const isLoggedIn = (req,res,next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

app.get('/newsfeed', isLoggedIn, (req,res) => {
    res.render('newsfeed.ejs')
})

app.get('/signup', (req,res) =>{
    res.render('signup.ejs')
})

app.post("/signup", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signup.ejs")
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/newsfeed");
            });
        }
    })
 });
 
app.get('/login', (req,res) =>{
    res.render('login.ejs')
})

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login'
    }), function(req, res){
        // We dont need anything in our callback function   
});

app.get('/logout', (req,res) => {
    req.logOut();
    res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, console.log('App is running!'));