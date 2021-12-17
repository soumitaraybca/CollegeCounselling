const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://localhost:27017";

var _db;
var _client;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('user');
      _client = client;
      return callback( err );
    });
  },

  getDb: function() {
    return _db;
  },

  closeDb: function() {
    _client.close();
  }
};


