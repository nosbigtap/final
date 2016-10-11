module.exports = require('mongoose').model('Element', {
    userId : String,
    style  : Array,
    text   : String,
    left   : Number,
    top    : Number,
});
