/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);

// initialize express server
const app = express();
const main = express();

// add the path to receive request and set json as bodyParser to process the body
main.use("/api/v1", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

// const db = admin.firestore();

// define google cloud function name
const webApi = functions.https.onRequest(main);
module.exports(webApi);
