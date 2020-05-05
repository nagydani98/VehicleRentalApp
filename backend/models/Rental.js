const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Rental = new Schema({
  start: {
    type: Date
  },
  end: {
    type: Date
  },
  RentedVehicle: []
}, {
  collection: 'rentals'
})

module.exports = mongoose.model('Rental', Rental)
