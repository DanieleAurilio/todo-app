const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/tododb';
const task = require('../models/Task')

    mongoose.connect(uri,   {  useUnifiedTopology: true,  useNewUrlParser: true  })
    .then(response => console.log('sono collegato al server'))
    .catch(error => console.log('oh no qualcosa è andato storto durante la connessione als server'));

const db = mongoose.connection;    

app.use(bodyParser.json());
app.use(cors());


/// get all post
app.get('/post', (req,res,next) => {
    task.find({}, function(error, tasks){
        res.send(tasks)
    });

});

////get single post
app.get('/post/:id', (req,res,next) => {
    task.findById(req.params.id, (error,task)=> {
        if(error) throw console.log(error)
        res.send(task)
    })
});

////create new task
app.post('/createTask', (req,res) => {
    var title = req.body.title;
    var description = req.body.description;

    const newTask = new task({
        'title': title,
        'description': description 
    });

    newTask.save(function (err) {
        if(err) throw console.log(err);
            res.send({
                success: true
            })
    })
});


////update task 
app.put('/post/:id', (req,res,next) => {
    task.findById(req.params.id, function(err,newTask) {
        if(err) throw console.log(err);

        newTask.title = req.body.title;
        newTask.description = req.body.description;

        newTask.save(function(error) {
            
            if(error) throw console.log(error);

            res.send({
                success: true
            })
        })

    })
});

////delete task
app.delete('/post/:id', (req,res, next) => {
    
    let id = req.params.id;
    
    const removedTask = new task({
        '_id': id
    });

    task.deleteOne(removedTask, function(error) {
        
        if(error) throw console.log(error);
        
        res.send({
            success: true
        })

    });
});



app.listen(8081, () => {
    console.log('node server is up')
});