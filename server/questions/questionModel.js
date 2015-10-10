var mongoose = require('mongoose');
var questions = require('./questionData');

var QuestionSchema = new mongoose.Schema({
  qNumber: {type: Number, unique: true},
  title: String,
  description: String,
  truthy: [String],
  falsy: [String],
  solutions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Solution'
  }]
});

var Question = mongoose.model('Question', QuestionSchema);

// Set up some dummy initial data for now by hardcoding.
questions.forEach(function(element) {
  var newQ = new Question(element);
  newQ.save(function(err, data) {
    if (err) {
      throw err;
    } else {
      console.log('Adding questions success: ', data);
    }
  });
});

module.exports = Question;

