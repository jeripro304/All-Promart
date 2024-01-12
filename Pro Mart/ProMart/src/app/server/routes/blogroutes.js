var db = require('./dbdemo')
const jwt = require('jsonwebtoken')
var appRouter = function(app) {
    app.get("/", function(req, res) {
        db.getEmployees(function(data){
            let payload = {subject: 1}
        let token = jwt.sign(payload, 'secretKey')
        // res.status(200).send({token})
            res.send(data);
        });
    });
    app.post("/", function(req, res) {      
        var temp = req.body;
        console.log(temp);
        db.addEmployee(temp, function(resp){
            res.send(resp);
        });
    });
    app.put("/", function(req, res) {      
        var temp = req.body;
        console.log('Edit API');
        console.log(temp);
        db.editEmployee(temp, function(resp){
            res.send(resp);
        });
    });
    app.delete("/:id", function(req, res) {     
            console.log("delete"); 
            var temp = req.params.id;
            db.deleteEmployee(temp, function(resp){
                res.send(resp);
            });
    });
    app.get("/employee/:id", function(req, res) {     
        console.log("Get single Employee"); 
        var temp = req.params.id;
        db.getEmployee(temp, function(resp){
            console.log(resp);
            res.send(resp);
        });
    });
}
module.exports = appRouter;