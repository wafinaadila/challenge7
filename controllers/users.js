const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname + "/../data/users.json");

module.exports= async (req,res)=>{ 
    const users= JSON.parse(fs.readFileSync(filepath,{
        encoding:"utf-8",
    })
    );
return  res.json({
    data: users,
});
};