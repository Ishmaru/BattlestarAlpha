const Score = require('../models/score');

exports.score_index = (req, res, next) => {
  Score.find({}, function(err, scores){
    if (err) {
      return next(err);
    }
    res.send(scores);
  })
}
exports.score_create = (req, res, next) => {
  let score = new Score({
    name: req.body.name || 'Cadet',
    score: req.body.score
  });
  score.save(function (err){
    if(err){
      return next(err);
    }
    res.send('Score Added' + score.name + ':' + score.score);
  })
}
exports.score_details = (req, res, next) =>  {
  Score.findById(req.params.id, function(err, score){
    if (err) {
      return next(err);
    }
    res.send(score);
  })
};
exports.score_update = (req, res, next) =>  {
  Score.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, score){
    if(err){
      return next(err);
    }
    res.send('Score Updated');
  })
};
exports.score_delete = (req, res, next) =>  {
  Score.findByIdAndRemove(req.params.id, function(err, score){
    if(err){
      return next(err);
    }
    res.send('Score Deleted' + ' ' + req.params.id);
  })
}

