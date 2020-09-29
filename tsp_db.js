




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

exports.getRecord = function(db, id) {
    let sql = `SELECT push_up, sit_up, running, date FROM Record where id = ` + id + ` order by date`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row.date + " " + row.push_up + " " + row.sit_up + " " + row.running);
        });
    });
}



exports.initializeDb = function(db) {
    db.run('CREATE TABLE User(user_id INTEGER PRIMARY KEY, name TEXT NOT NULL, height INTEGER NOT NULL, weight INTEGER NOT NULL, age INTEGER NOT NULL, sex TEXT NOT NULL)');
    db.run('CREATE TABLE Record(id INTEGER, push_up INTEGER NOT NULL, sit_up INTEGER NOT NULL, running INTEGER NOT NULL, date DATETIME DEFAULT CURRENT_TIMESTAMP)');

}

exports.dummyData = function(db) {

    var data=[
        ['김기태', 170, 72, 30, 'male'],
        ['ABC', 180, 80, 20, 'female']
        ]
        
    for (var i=0;i<data.length; i++){
        db.run("INSERT INTO User(name,height, weight, age, sex) values(?,?,?,?,?)",data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], (err,rows)=>{
            if(err){
                throw err;
            }
            console.log('Insert Success');
        })
    }

    var data=[
        [1, 70, 72, 900],
        [2, 80, 80, 850]
        ]
        
    for (var i=0;i<data.length; i++){
        db.run("INSERT INTO Record(id, push_up, sit_up, running) values(?,?,?,?)",data[i][0],data[i][1], data[i][2], data[i][3],(err,rows)=>{
            if(err){
                throw err;
            }
            console.log('Insert Success');
        })
    }

} 