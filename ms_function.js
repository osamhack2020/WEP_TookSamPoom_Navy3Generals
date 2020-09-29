

exports.initializeDb_ms = function(db) {
    db.run('CREATE TABLE Training_Day(user_id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT, push_up INTEGER NOT NULL, sit_up INTEGER NOT NULL, running INTEGER NOT NULL, date_trained INTEGER NOT NULL)');
}

exports.dummyData1_ms = function(db) {

    var data=[
        ['김기태', 72, 65, 700, 1],
        ['홍길동', 100, 200, 400, 1]
        ]
        
        for (var i=0;i<data.length; i++){
             db.run("INSERT INTO User(name, push_up, sit_up, running, date_trained) values(?,?,?,?,?)",data[i][0],data[i][1], data[i][2], data[i][3],date[i][4],(err,rows)=>{
             if(err){
                throw err;
             }
              console.log('Insert Success');
         })
        }
} 
exports.dummyData2_ms = function(db) {

    var data=[
        [1,'김기태', 72, 61, 700, 2],
        [1,'김기태', 73, 62, 123, 3],
        [1,'김기태', 74, 63, 42, 4],
        [1,'김기태', 75, 64, 7100, 5],
        [1,'김기태', 76, 65, 7030, 6],
        [1,'김기태', 74, 75, 7005, 7],
        [1,'김기태', 89, 55, 7020, 8],
        [1,'김기태', 56, 75, 7050, 9],
        [1,'김기태', 12, 69, 7010, 10],
        [1,'김기태', 72, 65, 7060, 11],
        [1,'김기태', 32, 61, 7005, 12],
        [1,'김기태', 53, 62, 7020, 13],
        [1,'김기태', 743, 63, 7300, 14],
        [1,'김기태', 732, 64, 1700, 15]
        ]
        
        for (var i=0;i<data.length; i++){
             db.run("INSERT INTO User(id, name, push_up, sit_up, running, date_trained) values(?,?,?,?,?,?)",data[i][0],data[i][1], data[i][2], data[i][3],date[i][4],data[i][5],(err,rows)=>{
             if(err){
                throw err;
             }
              console.log('Insert Success');
         })
        }
}

exports.getTraining = function(db) {
    let sql = 'select push_up, sit_up, running, date_trained'
    +'from training_day where id ==? order by date_trained DESC'
    +'limit 10';
    let params = 1;
    db.all(sql, 1, (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row.push_up + " " + row.sit_up + " " + row.running + " " + row.date_trained + "\n");
        });
    });
}
