// this module contains all routes asociated with controller functions in "restControllers" file
const express =require('express');

// functions asociated with routes to create, get, delete and update a restaurant
const {addRestaurant, getAllRestaurants, getaRestaurant, updateRestaurant, deleteRestaurant} = require('../controllers/restControllers');

// "router" contain Router from express to restaurant HTTP methods
const router = express.Router();

router.post('/restaurants', addRestaurant);
router.get('/restaurants', getAllRestaurants);
router.get('/restaurants/:id', getaRestaurant);
router.put('/restaurants/:id', updateRestaurant);
router.delete('/restaurants/:id', deleteRestaurant);

module.exports = {
    routes: router
}
