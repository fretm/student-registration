

const farm = require('../model/m')
exports.stud=(req,res,next)=>{
      res.render('form')
}

exports.display= (req,res,next)=>{
 
    console.log(req.body)
    let f =req.body;
    farm.save(f)

      res.send("<h1>sucessfuly submited </h1>")
    farm.display().then(data=>{
        res.render('display',{f:data})

    })
    
   
}


