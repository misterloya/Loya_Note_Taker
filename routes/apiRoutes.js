const router = require("express").Router();
const notes = require("../db/db.json")


router.get("./api/", (req, res) => {
    store.getNotes().then((notes) => res.json(notes));
});

router.post("/api/", (req, res) => {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    router.db.create({
      title: req.body.title,
      text: req.body.text

    }).then(function(notes) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(notes);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
        res.json(err);
      });
  });