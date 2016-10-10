var Element = require('../models/element');

module.exports = {
  save: ( req, res ) => {
    var newElement = new Element(req.body)

    newElement.save((err, savedElement)=>{
      if(err) {
        console.log(err);
        res.status(500).send(":(");
      } else {
        res.send(savedElement);
      }
    });
  }
}
