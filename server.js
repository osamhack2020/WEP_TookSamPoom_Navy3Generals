const express = require('express')
const tsp_db = require('./tsp_db.js')
const ms_function = require('./ms_function.js')
const app = express();
const path = require('path');

app.get('/data', (req, res) => {
  res.send('Hello World!')
});


const db = tsp_db.connectDb();
//tsp_db.initializeDbWithDummy(db);
tsp_db.getUsers(db);
tsp_db.getRecord(db, 1);
tsp_db.closeDb(db);



app.use('/', function(req,res){
  res.sendFile(path.join(__dirname + '/express/index.html'));
});



app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});