




exports.connectDb = function() {
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./db/TSPdb.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
    });
	return db;
}

exports.closeDb = function(db) {
    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

exports.getUsers = function(db) {
    let sql = `SELECT name, height, weight FROM User`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row.name + " " + row.height + " " + row.weight);
        });
    });
}

exports.initializeDb = function(db) {
    db.run('CREATE TABLE User(user_id INTEGER PRIMARY KEY, name TEXT NOT NULL, height INTEGER NOT NULL, weight INTEGER NOT NULL)');
}

exports.dummyData = function(db) {

    var data=[
        ['김기태', 170, 72],
        ['ABC', 180, 80]
        ]
        
        for (var i=0;i<data.length; i++){
             db.run("INSERT INTO User(name,height, weight) values(?,?,?)",data[i][0],data[i][1], data[i][2],(err,rows)=>{
             if(err){
                throw err;
             }
              console.log('Insert Success');
         })
        }
} 