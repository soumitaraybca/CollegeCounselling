var _finduserres;
module.exports = {
    finduser: function (queryParam,callback) {

        const lib = require("./dbconnection");
        lib.connectToServer(function (err, client) {
            if (err) console.log(err);
    
            lib.getDb().collection('authentication').find(queryParam).toArray(function (err, res) {
                if (err) throw err;
                console.log(res);
                lib.closeDb();
                return callback( res );;
            });
        });
    
    }
};

function insertauthdetails(authObj) {
    const lib = require("./dbconnection");

    lib.connectToServer(function (err, client) {
        if (err) console.log(err);

        lib.getDb().collection('authentication').insertOne(authObj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            lib.closeDb();
        });
    });


}


//  var authObj = { user_id: "55541165678", password: "fghghhjjhkj@123" }
//  insertauthdetails(authObj)
//finduser();