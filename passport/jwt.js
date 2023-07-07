const passport = require("passport");
const passportJWT = require("passport-jwt");
const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname + "/../data/users.json");

passport.use(new passportJWT.Strategy(
    {
    secretOrKey:"TOKEN",
    jwtFromRequest:passportJWT.ExtractJwt.fromHeader("authorization"),
}, 
({id, username,passwprd},done)=>{
    const users= JSON.parse(fs.readFileSync(filepath,{
        encoding:"utf-8",
    })
    );
    const foundUser = users.findIndex((user)=>{
    return user.username == username;
    });
    
    if(foundUser == -1){
        done({message:'invalid jwt token or user not found'}, false)
    }else{
        done(null, users[foundUser]);
    } 
}
)
);

module.exports = passport;
