const express = require('express');
const app = express();

app.use(express.json());


//middleWare Function to check whether it is odd or Even

function CheckisOdd(req, res, next) {

    //Write Your Code here

}

//sample Route for Test
// GET Reqest of API  '/?num=18' --> The router should return {"num":"18","isOdd":false}

app.get('/', CheckisOdd, (req, res) => {
    
    //num in data should be replaced by num from the get request route
    //isOdd in data should be replaced by whether num is odd or even if it odd make it true else false 
    const data = {
        "num" : 5,
        "isOdd": true
    };

    res.send(JSON.stringify(data));
});


module.exports = app;

