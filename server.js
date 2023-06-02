require("dotenv").config();
const express=require("express");
const app=express();
const nodemailer= require("nodemailer");
const PORT=process.env.PORT||5000;
app.use(express.static('public'));
app.use(express.json());
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html');
})
app.post('/',(req,res)=>{
    console.group(req.body)
    const transporter= nodemailer.createTransport({
       host:"smtp.gmail.com",
        auth:{
            user:process.env.GMAIL_NAME,
            pass:process.env.APP_KEY
        }
    })
    const mailOptions = {
        from:process.env.GMAIL_NAME,
        to:req.body.email,
        subject:`Message for ${req.body.email}:  ${req.body.subject}`,
        text:req.body.message
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent:'+info.response)
            res.send('success')
        }
    })
})
app.listen(PORT, ()=>{
    console.log(`Running on port: ${PORT}`)
})