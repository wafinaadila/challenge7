const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname + "/../data/users.json");
const jwt = require("jsonwebtoken");

module.exports= async (req,res)=>{ 

const {username, password}=req.body;
const users= JSON.parse(fs.readFileSync(filepath,{
    encoding:"utf-8",
})
);
const foundUser = users.findIndex((user)=>{
return user.username ==username && user.password ==password;
});

if(foundUser == -1){
    return res.status(400).json({
        message: "username or password invalid!",
    });
}
const token = jwt.sign(users[foundUser], 'TOKEN');
return res.json({
    message: "Login succesfully",
    token: token,
});
}