var mongoose = require('mongoose');


var FeedbackSchema = mongoose.Schema({
    username: {type: String, require: true},
    feedback: {type: String, require: true}
})

var feedbackModel = mongoose.model('feedbacks', FeedbackSchema);
module.exports = feedbackModel;