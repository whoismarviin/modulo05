const {Pool}= require('pg');


module.exports = new Pool({
    user:'viniciusrosa',
    password:"",
    host:'localhost',
    port:5432,
    database:'postgres'
})


