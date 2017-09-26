const express = require('express');
const router = new express.Router();
const path = require('path');
const app = express();


app.use(express.static('./server/html'));

app.use(express.static('./client/dist/'));




app.get('*', (req,res)=>{
  console.log('hello')
  res.sendFile(path.join(__dirname, './server/html', 'index.html'));
})


app.listen(3000 /*process.env.PORT || 3000  ,*/ ,'192.168.1.76', () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});