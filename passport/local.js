const passport = require('passport');
const LocalStrategy= require('passport-local').Strategy;
const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname + "/../data/users.json");

passport.use(
    new LocalStrategy(
        {
            usernameField:"username",
            passwordField:"password",
        },
        (username, password, done)=>{
            //const {username, password}=req.body;
            const users= JSON.parse(fs.readFileSync(filepath,{
                encoding:"utf-8",
            })
            );
            const foundUser = users.findIndex((user)=>{
            return user.username ==username && user.password ==password;
            });
            
            if(foundUser == -1){
               return done(null, false, {message:"invalid credential"});
            }
return done(null, users[foundUser]);
        }
    
    )
);
passport.serializeUser((user,done)=>{
    done(null, user.id);
});

passport.deserializeUser((user,done)=>{
    done(null,user);
});