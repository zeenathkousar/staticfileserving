const express=require('express');

const app=express();
const path=require('path')

app.set('view engine','ejs');
console.log(path.join(__dirname,'public'))
const staticpath=path.join(__dirname,'public');
app.use(express.static(staticpath));


app.get('/',(req,res)=>{
    res.render('index',{ name : "zeenath"})
    // res.sendFile('index.html')
})

app.listen(3000,()=>{
    console.log('server started at 3000')
})