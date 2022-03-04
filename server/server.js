 const express = require('express');
 const app = express();
const {chats} = require ('./data/data')

app.get('/api/chat',(req,res)=>{
    console.log('called');
res.send(chats)

})


app.get('/api/chat/:id',(req,res)=>{

    console.log(req.params.id);

   const singlechat =  chats.find((c)=>c._id === req.params.id);
   res.send(singlechat)

})

 app.listen(5000,console.log('running in port 5000'));
