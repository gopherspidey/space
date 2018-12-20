const express = require('express');
const SKURoutes = express.Router();

// Require Post model in our routes module
let SKU = require('./product.model');

// Defined store route
SKURoutes.route('/add').post(function (req, res) {
  let post = new SKU(req.body);
  post.save()
    .then(() => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(() => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
SKURoutes.route('/').get(function (req, res) {
    SKU.find(function(err, posts){
    if(err){
      res.json(err);
    }
    else {
      res.json(posts);
    }
  });
});

// Defined edit route
SKURoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  SKU.findById(id, function (err, post){
      if(err) {
        res.json(err);
      }
      res.json(post);
  });
});

//  Defined update route
SKURoutes.route('/update/:id').post(function (req, res) {
    SKU.findById(req.params.id, function(err, post) {
    if (!post)
      res.status(404).send("data is not found");
    else {
        post.title = req.body.title;
        post.body = req.body.body;
        post.save().then(() => {
          res.json('Update complete');
      })
      .catch(() => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
SKURoutes.route('/delete/:id').delete(function (req, res) {
    SKU.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = SKURoutes;