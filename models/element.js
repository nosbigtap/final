module.exports = require('mongoose').model('Element', {
    userId : String,
    style  : Array,
    parent : Object,
    text   : String
});
