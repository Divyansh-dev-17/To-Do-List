const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname+"/date.js")
const app = express()


var items=[];
var Workitems=[];

app.set('view engine', "ejs")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
 
app.get("/",function(req,res){
    var day = date.getDate();
    res.render("list",{listTitle:day, nextListItems:items})
})

app.post("/",function(req,res){
    var item = req.body.newitem;
    if(req.body.list==="Work List"){
        Workitems.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item)
        //res.render("list",{nextListItem:nextItem}) this will not work
        // console.log(nextItem);
        res.redirect("/")
    } 
})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",nextListItems:Workitems});
})

// app.post("/work",function(req,res){
//     let item = req.body.newitem;
//     Workitems.push(item);
//     res.redirect("/work");
// })

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(req,res){
    console.log("Server started at port 3000.")
}) 