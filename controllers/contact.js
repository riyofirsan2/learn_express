const Contact = require('..models/Contact')

module.exports = ({
    create : ((req,res,next) =>{  
        Contact.create({
            name = req.body.name,
            email= req.body.email
        })
    if (err) {
        next(err)
     } else {
            res.json()
            }
    }), 
})