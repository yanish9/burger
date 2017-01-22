var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/cats/create", function(req, res) {
    cat.create([
        "name", "sleepy"
    ], [
        req.body.name, req.body.sleepy
    ], function() {
        res.redirect("/cats");
    });
});

router.put("/cats/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    cat.update({
        sleepy: req.body.sleepy
    }, condition, function() {
        res.redirect("/cats");
    });
});

// Export routes for server.js to use.
module.exports = router;