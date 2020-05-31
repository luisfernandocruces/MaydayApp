const Health_Support = require('../models/health_support')


exports.create = function (req, res, next) {
    let health_support = new Health_Support({
        idProfessional: req.body.idProfessional,
        schedules: req.body.schedules,
        
    })

    health_support.save(err => {
        if(err){
            return next(err)
        }else{
            res.send(health_support._id)
        }
    })

}

exports.details = function (req,res,next){
    Health_Support.findById(req.params.id, function(err, health_support){
        if(err){
            return next(err);
        }else{
            res.send(health_support)
        }
    })
}

exports.update = function (req,res,next){
    Health_Support.findByIdAndUpdate(req.params.id, { $set: req.body} , function(err, health_support){
        if(err){
            return next(err);
        }else{
            res.send('Health Support Updated Succesfully')
        }
    })
}
exports.delete = function (req,res,next){
    Health_Support.findByIdAndDelete(req.params.id, function(err, health_support){
        if(err){
            return next(err);
        }else{
            res.send('Health Support Deleted Succesfully')
        }
    })
}

exports.index = function (req,res,next){
    let health_supports =Health_Support.find({}, function(err, health_supports){
        if(err){
            return next(err);
        }else{
            res.send(health_supports)
        }
    })
}
