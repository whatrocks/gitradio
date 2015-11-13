var Event = require('./eventModel.js');
var Promise = require('bluebird');

module.exports = {

  allEvents: function (req, res, next) {

    console.log(req);

    // res.send("thanks");
    // var findAll = Promise.promisify(Event.find);

    Event.find({}, function(err, events){
      if (err) {
        console.error(err);
      } else {
        res.json(events);
      }
    });
    

  }

};
