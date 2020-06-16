const Member = require('../Models/Member');
const {age, date}= require('../../lib/utils');



module.exports={

    index(req,res){

        Member.all(function(Members){

            return res.render('Members/index',{Members});
        });

    },
    post(req,res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == '') {
                res.json({ message: 'Please fill all of the fields' })
            }
        };

        Member.create(req.body,function(member){
            return res.redirect(`/Members/${member.id}`);
        });
    },

    create(req,res){
        return res.render('members/create', {member});
    },
    show(req,res){
        Member.find(req.params.id,function(Member){
            if(!Member){
                return res.send('Member Not found');
            }


            Member.birth =date(Member.birth).birthday;


            return res.render(`Members/show`, {Member})
        })
    },
    edit(req,res){
        Member.find(req.params.id,function(Member){
            if(!Member){
                return res.send('Member Not found');
            }


            Member.birth =date(Member.birth).iso;

            return res.render(`Members/edit`, {Member})
        })
    },
    put(req,res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == '') {
                res.json({ message: 'Please fill all of the fields' })
            }
        }

        Member.update(req.body, function(){
            res.redirect(`/Members/${req.body.id}`)
        })
    },
    delete(req,res){
        Member.delete(req.body.id,function(){
            res.redirect('/Members')
        })
    },
}
