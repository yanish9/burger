var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

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

router.post("/burgers/create", function(req, res) {
    console.log(req.body);
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function() {
        res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.update({
        devoured: true
    }, condition, function() {
        res.redirect("/burgers");
    });
});

module.exports = router;