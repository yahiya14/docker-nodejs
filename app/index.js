const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    return res.status(200).json({"message": "Docker Running Successfully"}); 
})

app.listen(3000, (err) => {
    if(err) {
        console.log("error in starting server")
    } else {
        console.log("server is running on port 3000")
    }
})