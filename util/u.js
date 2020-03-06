

const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;  
let db;
const moongconnect = function(cb){
    MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology:true})

    .then(client=>{
        db = client.db('Farming')
     console.log('db connected ')
        cb()
    }).catch(err=>{
        console.log("")
})
}

const getdb =function(){
      if(db){
          return db
      }
      else {
          throw new Error
      }
}


exports.moongconnect=moongconnect
exports.getdb = getdb ;
