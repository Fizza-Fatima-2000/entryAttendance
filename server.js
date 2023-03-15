const express = require('express');
const app = express();
const PORT = 3030;
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
const ejs = require('ejs')
var path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
const att_router = require('./routes/attendance');
app.use(att_router); 


app.listen(PORT, () => {
  console.log("server is connected", PORT);
});
