var root_app = function (data,user,res,db) {
    
  
       data.find({"name":user.name}).toArray(function(err,doc){
           console.log(err)
           console.log(doc)
        // //    if(doc.length){
        //     if(doc.length!==0){
        //         console.log('res.redirect(/loginin')
        //         res.send(user.name)
        //         return
        //     } else {
                res.send(doc)
            // }
            db.close()
        //     return true
        //    }else{
        //     console.log('Nema')
        //     return false
        //    }
     
    })

}
module.exports = root_app;