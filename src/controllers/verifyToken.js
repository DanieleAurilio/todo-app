const jwt = require('jsonwebtoken');
const TOKEN_SECRET ='djghhhhuuwiwuewieuwieuriwu';



module.exports =  function(req,res,next) {
    let token = req.headers.token;

    if(!token) res.status(400).send({
        message: 'error wit jwt token'
    });
    
    
    try {
        const verifiedToken = jwt.verify(req.headers.token, TOKEN_SECRET);
        req.user = verifiedToken;
        next();
        
    } catch(e) {
        console.log(e);
    }
      
    
};

