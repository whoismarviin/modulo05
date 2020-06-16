const Instructor = require('../Models/Instructor');
const {age, date}= require('../../lib/utils');



module.exports={

    index(req,res){

        Instructor.all(function(instructors){

            return res.render('instructors/index',{instructors});
        })

    },
    post(req,res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == '') {
                res.json({ message: 'Please fill all of the fields' })
            }
        };

        Instructor.create(req.body,function(instructor){
            return res.redirect(`/instructors/${instructor.id}`);
        });
    },

    create(req,res){
        return res.render('instructor/create')
    },
    show(req,res){
        Instructor.find(req.params.id,function(instructor){
            if(!instructor){
                return res.send('Instructor Not found');
            }


            instructor.age =age(instructor.birth);
            instructor.services= instructor.services.split(',');

            instructor.created_at= date(instructor.created_at).format;

            return res.render(`instructors/show`, {instructor})
        })
    },
    edit(req,res){
        Instructor.find(req.params.id,function(instructor){
            if(!instructor){
                return res.send('Instructor Not found');
            }


            instructor.birth =date(instructor.birth).iso;

            return res.render(`instructors/edit`, {instructor})
        })
    },
    put(req,res){
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == '') {
                res.json({ message: 'Please fill all of the fields' })
            }
        }

        Instructor.update(req.body, function(){
            res.redirect(`/instructors/${req.body.id}`)
        })
    },
    delete(req,res){
        Instructor.delete(req.body.id,function(){
            res.redirect('/instructors')
        })
    },
}
