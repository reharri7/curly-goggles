"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webApi = void 0;
/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
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
main.use(bodyParser.urlencoded({ extended: false }));
const db = admin.firestore();
router.get("/:code", async (req, res) => {
    const code = await req.body.code;
    console.log(code);
    const url = await db.collection("url").where("code", "==", code);
    if (url.empty()) {
        return res.redirect("/");
        //console.log(url);
    }
    return res.redirect(url);
});
// define google cloud function name
exports.webApi = functions.https.onRequest(main);
//# sourceMappingURL=index.js.map