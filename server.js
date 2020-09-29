const express = require('express')
const tsp_db = require('./tsp_db.js')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});


let db = tsp_db.connectDb();
//tsp_db.initializeDb(db);
//tsp_db.dummyData(db);
tsp_db.getUsers(db);
tsp_db.closeDb(db);



app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});