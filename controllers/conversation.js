const Conversation = require('../models/conversation')


exports.create = function (req, res, next) {

    Conversation.find({ idUser: req.body.idUser, idProfessional: req.body.idProfessional }, function (err, conversations) {
        if (err) {
            return next(err);
        } else {
            if (conversations.length == 0) {
                let conversation = new Conversation({
                    idUser: req.body.idUser,
                    idProfessional: req.body.idProfessional,
                    messages: req.body.messages,
                })
                conversation.save(err => {
                    if(err){
                        return next(err)
                    }else{
                        res.send(conversation)
                    }
                })
            }else{
                res.send(conversations[0])
            }
        }
    })

    

}

exports.details = function (req, res, next) {
    Conversation.findById(req.params.id, function (err, conversation) {
        if (err) {
            return next(err);
        } else {
            res.send(conversation)
        }
    })
}

exports.update = function (req, res, next) {
    Conversation.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, conversation) {
        if (err) {
            return next(err);
        } else {
            res.send('Conversation Updated Succesfully')
        }
    })
}
exports.delete = function (req, res, next) {
    Conversation.findByIdAndDelete(req.params.id, function (err, conversation) {
        if (err) {
            return next(err);
        } else {
            res.send('Conversation Deleted Succesfully')
        }
    })
}

exports.index = function (req, res, next) {
    let conversations = Conversation.find({}, function (err, conversations) {
        if (err) {
            return next(err);
        } else {
            res.send(conversations)
        }
    })
}

exports.getChatsFromUser = function(req, res, next) {
    let conversations = Conversation.find({$or:[{idUser: req.params.idPerson}, {idProfessional: req.params.idPerson}]}, function (err, conversations) {
        if (err) {
            return next(err);
        } else {
            console.log(conversations);
            var toReturn = [];
            conversations.forEach(conversation => {
                var idOther = "";
                if (conversation.idUser === req.params.idPerson){
                    idOther = conversation.idProfessional;
                } else {
                    idOther = conversation.idUser;
                }
                toReturn.push({email: idOther, first_name: 'Prueba', last_name: 'Probada'});
            });
            res.send(toReturn);
        }
    })
}
