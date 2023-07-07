const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname + "/../data/users.json");


module.exports= async (req,res)=>{ 
const {username, password} = req.body;

    const users= JSON.parse(fs.readFileSync(filepath,{
    encoding:"utf-8",
})
);
const foundUser = users.findIndex((user)=>{
return user.username ==username;
});

if(foundUser != -1){
    return res.status(400).json({
        message: "user already registered, please login!",
    });
}
const newUser ={
    id: users.length+1,
    username: username,
    password: password,
};
 
console.log(newUser);
users.push(newUser);
fs.writeFileSync(filepath, JSON.stringify(users, null, 2),{
    encoding:"utf-8",
});
return res.json({
    message: "register successfuly!",
});
};