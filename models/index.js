const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.belongsToMany(Location, {
  // define third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // define alias for when data is retrieved
  as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
  // define third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // define alias for when data is retrieved
  as: 'location_travellers'
});

module.exports = { Traveller, Location, Trip };
