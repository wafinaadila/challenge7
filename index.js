const express = require("express");
const app = express();
//const passport = require("./passport/jwt");
const passport = require("./passport/local");
const session = require("express-session");

app.use(express.static("public") );

app.use(session({
    secret:"123456",
}));

app.set("view engine","ejs");
app.use(express.json());

app.use(express.json());
app.use(
    express.urlencoded({
        extended:false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.post("/register", require("./controllers/register"));
app.get("/login", ((req,res)=>{
    return res.render('login')
}));

app.post(
    "/login", 
    passport.authenticate("local",{
        successRedirect:"/lobby",
        failureRedirect:"/login",
        failureFlash: true,}));  
app.get("/game", require("./controllers/game"));

//hanya bisa diakses menggunakan token jwt
app.get("/users",
    passport.authenticate("jwt", {
        session: false,
    }),
    require("./controllers/users")
);

app.listen(3030, () => console.log("running at: 3030"));
