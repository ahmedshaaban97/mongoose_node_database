const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/User');
const app  = express();
const bodyParser = require('body-parser');
const port = 4444 || process.env.PORT;
mongoose.promise = global.promise;

mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open',()=>console.log('connected yahoo'))
    .on('error',(err)=>{
    console.log('connection error')
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

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



app.post('/users',(req,res)=>{
    const new_user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    is_active: req.body.is_active

});
new_user.save().then(savedUser=>{
    res.send('user saved successfully by me');
}).catch(err=>{
    res.status(404).send('user not saved');
});
});

//to read all data from data base

app.get('/users',(req,res)=>{
    User.find({}).then(users=>{
       res.send(users);
       console.log('users have been seen');
    });

});


// app.patch('/users/:id',(req , res)=>{
//
//     const id = req.params.id;
//     const first_name = req.body.first_name;
//     User.findByIdAndUpdate({_id : id}, {$set : {first_name : first_name}} , {new : true})
//         .then(updateUser=>{
//             res.send('user has been updated');
//             console.log(`the user by name ${first_name} has benn updated`)
//         });
//
//
// });



app.put('/users/:id',(req , res)=>{

    const id = req.params.id;
    User.findOne({_id : req.params.id}).then(user=>{
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;

            user.save().then(savedUser=>{
                res.send('this is the put user');
            });
    });

});


app.delete('/users/:id',(req , res)=>{


    User.remove({_id : req.params.id}).then(deletedUser=>{
        res.send(`${deletedUser.first} has been removed again`);
    })




});










//
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