module.exports = app => {
    const netflixs = require("../controllers/netflix.controller.js");
    var router = require("express").Router();
    router.post("/create/", netflixs.create);
    router.get("/", netflixs.findAll);
    router.get("/status", netflixs.findAllStatus);
    router.get("/:id", netflixs.findOne);
    router.put("/update/:id", netflixs.update);
    router.delete("/delete/:id", netflixs.delete);
    router.delete("/delete/", netflixs.deleteAll);
    app.use("/api/netflix", router);
};