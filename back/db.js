/**
 * Import firebase and config file
 * The "config.js" configuration file contains the port configuration,
    host and FireStore authentication data
 */

const firebase = require('firebase');
const config = require('./config');

// Initialize firebase app
const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;
