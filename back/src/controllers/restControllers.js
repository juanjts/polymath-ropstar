const firebase = require('../../db');
const Restaurant = require('../models/restaurants.js');

//use Firestore from Firebase
const firestore = firebase.firestore();

// create a restaurant
const addRestaurant = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('restaurants').doc().set(data);
        res.send('restaurante registrado correctamente');
    } catch (error) {
        res.status(400).send(error.massage);
    }
}

// get all restaurants
const getAllRestaurants = async (req, res, next) => {
    try {
        const restaurants = await firestore.collection('restaurants');
        const data = await restaurants.get();
        const allRest = [];
        if(data.empty) {
            res.status(404).send('No se encuentran restaurantes');
        } else {
            data.forEach(doc => {
                const restaurant = new Restaurant(
                    doc.id,
                    doc.data().name,
                    doc.data().desc,
                    doc.data().address,
                    doc.data().city,
                    doc.data().imagUrl
                );
                allRest.push(restaurant);
            });
            res.send(allRest);
        }
    } catch (error) {
        res.status(404).send(error.massage);
    }
}

//get restaurant by id
const getaRestaurant = async (req, res, next) => {
    try {
        const id = req.params.id;
        const restaurant = await firestore.collection('restaurants').doc(id);
        const data = await restaurant.get();
        if(!data.exists) {
            res.status(404).send('el restaurante con ese id no se encuentra');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//update a restaurant
const updateRestaurant = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await firestore.collection('restaurants').doc(id).update(data);
        res.send('el restaurante se modificó correctamente');
    } catch (error) {
        res.status(400).send(error.massage);
    }
}

//delete an restaurant
const deleteRestaurant = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('restaurants').doc(id).delete();
        res.send('Restaurante eliminado');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    addRestaurant,
    getAllRestaurants,
    getaRestaurant,
    updateRestaurant,
    deleteRestaurant
}
