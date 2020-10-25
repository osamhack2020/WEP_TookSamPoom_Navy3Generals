const express = require('express')
const tsp_db = require('./tsp_db.js')
const ms_function = require('./ms_function.js')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/express/')))
app.get('/data', (req, res) => {
  res.send('Hello World!')
});


const db = tsp_db.connectDb();
//tsp_db.initializeDb(db);
tsp_db.getUsers(db);
tsp_db.getRecord(db, 1);
tsp_db.closeDb(db);



app.use('/', function(req,res){
  res.sendFile(path.join(__dirname + '/express/radar2/index.html'));
});



app.listen(8080, () => {
  console.log('TSPWeb listening on port 8000!')
});