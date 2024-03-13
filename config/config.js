const mongoose = require('mongoose');

function connectDataBase(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('Database has connected successfully');
    }).catch(()=>{
        console.log('Error during the database');
    })
}

module.exports = connectDataBase;