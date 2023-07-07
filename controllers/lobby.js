const fs= require("fs");
const pasth =require("path");
const roomPath = path.join(__dirname+"../data/room.json");

module.exports=(req,res)=>{
const rooms = fs.readFileSync(roomPath,{
encoding:"utf-8",
});
res.render('lobby',{
    data: rooms,

});
}