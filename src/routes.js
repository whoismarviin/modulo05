const express = require('express');
const routes= express.Router();
const instructors = require('./app/controllers/instructors');
const members = require('./app/controllers/members')

 routes.get('/',function(req,res){
     res.redirect('/members')
 })
routes.get('/instructors',instructors.index)
routes.get('/instructors/create',function(req,res){
    res.render('instructors/create')
});
routes.get('/instructors/:id/edit',instructors.edit);
routes.post('/instructors',instructors.post);
routes.get('/instructors/:id',instructors.show);
routes.put('/instructors',instructors.put);
routes.delete('/instructors', instructors.delete);




routes.get('/',members.index)
routes.get('/members',members.index)
routes.get('/members/create',function(req,res){
    res.render('members/create')
});
routes.get('/members/:id/edit',members.edit);
routes.post('/members',members.post);
routes.get('/members/:id',members.show);
routes.put('/members',members.put);
routes.delete('/members', members.delete)


module.exports=routes