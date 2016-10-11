module.exports = require('mongoose').model('Element', {
    userId : String,
    style  : Object,
    parent : Object,
    text   : String
});
