// Truc Vo
// Matrikelnummer: 2575005

const express = require("express");
const web = express();

web.use(express.static(__dirname + "/images"));

web.listen(3000, function(){
    console.log("listen on 3000");
});

web.get("/startseite", function(req, res){
    res.sendFile(__dirname +"/startseite.html");
});

web.get("/login", function(req, res){
    res.sendFile(__dirname +"/login.html");
});

