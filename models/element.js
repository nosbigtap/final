module.exports = require('mongoose').model('Element', {
    userId : String,
    width  : Number,
    height : Number,
    text   : String
});
