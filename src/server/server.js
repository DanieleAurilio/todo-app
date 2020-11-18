const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.MONGO;
const TOKEN_SECRET = process.env.SECRET_TOKEN;
const verifyToken = require('../controllers/verifyToken');


const task = require('../models/Task');
const user = require('../models/User');


    mongoose.connect(uri,   {  useUnifiedTopology: true,  useNewUrlParser: true  })
    .then(response => console.log('connect to db'))
    .catch(error => console.log('error when trying connect to db'));

const db = mongoose.connection;    

app.use(bodyParser.json());
app.use(cors());


/// get all post by user id connect token
app.get('/post',  verifyToken, (req,res,next) => {
    task.find({'author': req.user._id}, function(error, tasks){
        res.send(tasks)
    });
});

////get single post
app.get('/post/:id', (req,res,next) => {
    task.findById(req.params.id, (error,task) => {
        
        if(error)  throw console.log(error);
       
        res.send(task);
            
    });
});

////create new task
app.post('/createTask', verifyToken, (req,res) => {
    var title = req.body.title;
    var description = req.body.description;

    const newTask = new task({
        'title': title,
        'description': description, 
        'author': req.user._id  //// id del mio utente per creare relazione
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



//////create new user

app.post('/signup', async function(req,res,next) {

    const saltRounds = 10;
    let password = req.body.password;
    let userEmailExist = await user.findOne({ email: req.body.email });

    if(userEmailExist)  return res.status(400).send({ message: "Email already exist" }); ///check if user email already exist
    

    bcrypt.hash(password,saltRounds)
    .then( function(hashedPassword) {
        
    let newUser = new user({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword
    });
    
    newUser.save(function(error) {
        if(error) throw console.log(error);
        res.send({
            message: 'ok, user is now in db',
            success: true
        })
    });

  });
 
});


/////login user

app.post('/login',  async function(req,res,next) {
   
    let userExist = await user.findOne({ email: req.body.email });
    

    if(!userExist) return res.status(400).send({
        message: 'Email not found'
    });
    
    let validPassword = await bcrypt.compare(req.body.password, userExist.password);
    
    if(!validPassword) return res.status(400).send({
        message: 'Password is incorrect'
    })
    
    var newToken = jwt.sign({_id: userExist._id}, TOKEN_SECRET, {expiresIn: '7d'});
    
    res.status(200).header('token', newToken).send(newToken);

});



app.get('*', verifyToken, async function(req,res,next){

    let userLogged = await user.find({'_id': req.user._id});
    if(userLogged) {
        res.status(200).send(userLogged);
    }
});

app.listen(8081, () => {
    console.log('node server is up')
});