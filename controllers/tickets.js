var Ticket = require('../models/ticket');;
var Flight = require('../models/flight')

module.exports = {
  new: newTicket,
  create,
  // delete: deleteTicket
};

// function deleteTicket(req, res) {
//   Ticket.deleteOne({_id: req.params.tid}, function(err) {
//     res.redirect(`/flights/${req.params.fid}`);
//   })
// }

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
  });
}


function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('tickets/new', {
      title: 'Add Ticket',
      flight
  });
});
}