const express = require('express');
const app = express();

app.get('/:n', function (req, res){
    const n = req.params.n

    function factorial(n){
        if (n<0){
            return "undefined";
        }
        if(n == 0 || n == 1){
            return 1;
        }
        else{
            return n * factorial(n-1);
        }
        }
        answer = factorial(n)
    
    res.send("The factorial of " + n + " is " + answer)
})
app.listen(3000, function(req,res){
    console.log('running')
});
