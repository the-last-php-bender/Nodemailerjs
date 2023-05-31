const mailer=require('nodemailer');
const transport =mailer.createTransport({
    host:'smtp.gmail.com',
    auth:{
        user:'nwinyinyadavid123@gmail.com',
        pass:'shptzbeewflfjkjw'
    }
})
const mailOptions={
from :'nwinyinyadavid123@gmail.com',
to:'dayveed070@gmail.com',
subject:'nodemailer',
text:'Yes it is working'
}
transport.sendMail(mailOptions,function(err,info){
if(err){
    console.log(err);
}else{
    console.log(info.response);
}
})