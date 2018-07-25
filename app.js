const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/User');
const app  = express();
const port = 4444 || process.env.PORT;

mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open',()=>console.log('connected yahoo'))
    .on('error',(err)=>{
    console.log('connection error')
});

//here we insert our data

// const new_user = new User({
//     first_name: 'Ahmed',
//     last_name: 'Shaaban',
//     is_active: 1
//
// });
//
// new_user.save(function (err , dataSaved) {
//     if (err) return err;
//     console.log(dataSaved);
// });




app.get('/',(req,res)=>{
    res.send('root');
});



app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});






//we will not use this because we will use mongoose it is easier
// var {MongoClient,ObjectId} = require('mongodb');
//
// MongoClient.connect('mongodb://localhost:27017', function (err, client) {
//     if (err) throw err;
//     console.log('connected');
//
//     const db = client.db('animals');

    //insert(create) data
    // db.collection('mamels').insertOne({
    //     name : 'duck',
    //     legs : 4
    // },(err,result)=>{
    //     if (err){return console.log(err);}
    //
    //     console.log('inserted ')
    // });



// read data

    // db.collection('mamels').find().toArray(function (err, result) {
    //     if (err) throw err
    //
    //     console.log(result)
    // })

    //update data
    //  db.collection('mamels').findOneAndUpdate({
    //     _id : new ObjectId('5b56664071a5cc2ffc3ec987')
    //  },{
    //      $set : {
    //          name : 'updated'
    //      }
    //      }
    //
    //
    //  );


// delete data
//     db.collection('mamels').findOneAndDelete({
//         _id : new ObjectId('5b56664071a5cc2ffc3ec987')
//     });
//
//});