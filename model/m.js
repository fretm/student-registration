const getdb = require("../util/u").getdb;
class farm {
  static save(i) {
    const db = getdb();
    db.collection("farming1")
      .insertOne(i)
      
  }
 static display(){
      const db = getdb();
   return db.collection('farming1')
      .find().toArray()
      
  }
 
static find(name){
  const db = getdb();
  return db.collection('farming1')
     .find({name}).toArray()

}

}



module.exports = farm;
