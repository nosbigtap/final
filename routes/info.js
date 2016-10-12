var Element = require('../models/element');

module.exports = {
  save: ( req, res ) => {
    console.log("/projects/routes/info :: req.body - ", req.body);

    var newElement = new Element(req.body);

    newElement.save((err, data) => {
      if(err) {
        console.log(err);
        res.status(500).send(":(");
      } else {
        res.json(data);
      }
    });
  },
  get: (req, res) => {
    Element.find({}, (err, elements) => {
      res.json(elements);
    });
  },
  delete: (req, res) => {
    Element.remove({}, (err, elements) =>{
      res.json(elements);
    });
  },
}
