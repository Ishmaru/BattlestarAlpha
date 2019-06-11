const Score = require('../models/score');
const dotenv = require('dotenv').config();
const authErrorMsg = 'Authentication Required.';

exports.score_index = (req, res, next) => {
  Score.find({}, function(err, scores){
    if (err) {
      return next(err);
    }
    res.send(scores);
  })
}
exports.score_create = (req, res, next) => {
  if(req.query.secret === process.env.SECRET_KEY){
    let score = new Score({
      name: req.query.name || 'Cadet',
      score: req.query.score
    });
    score.save(function (err){
      if(err){
        return next(err);
      }
      res.send('Score Added' + score.name + ':' + score.score);
    })
  }else{
    res.send(authErrorMsg);
  }
}
exports.score_details = (req, res, next) =>  {
  Score.findById(req.params.id, function(err, score){
    if (err) {
      return next(err);
    }
    res.send(score);
  })
};
exports.score_top = (req, res, next) =>  {
  Score.find({}, function(err, scores){
    if (err) {
      return next(err);
    }
    res.send(scores);
  }).sort({score:-1}).limit(3);
};
exports.score_update = (req, res, next) =>  {
  if(req.query.secret === process.env.SECRET_KEY){
    let updateObj = {};
    if(req.query.name){
      updateObj.name = req.query.name;
    }
    if(req.query.score){
      updateObj.score = req.query.score;
    }
    Score.findByIdAndUpdate(req.params.id, {$set: updateObj}, function(err, score){
      if(err){
        return next(err);
      }
      res.send('Score Updated');
    })
  }else{
    res.send(authErrorMsg);
  }
};
exports.score_delete = (req, res, next) =>  {
  if(req.query.secret === process.env.SECRET_KEY){
    Score.findByIdAndRemove(req.params.id, function(err, score){
      if(err){
        return next(err);
      }
      res.send('Score Deleted' + ' ' + req.params.id);
    })
  }else{
    res.send(authErrorMsg);
  }
}

