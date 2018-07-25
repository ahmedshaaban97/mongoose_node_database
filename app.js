const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open',()=>console.log('connected yahoo'))
    .on('error',(err)=>{
    console.log('connection error')
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