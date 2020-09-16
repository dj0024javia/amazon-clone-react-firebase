const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')

const stripe = require("stripe")("sk_test_51HRZ07EI8wtVd8GUjqSPuYUEW5PORQLl9HzJ4JYJISk8NqM4jLAvjtc5B29XeKhCJug6VGXtsL3pmm0ajyBkYyKf00eCpUX7Mg")


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// API

// App Config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())


// API Routes
app.get('/', (req, res) => res.status(200).send("hello world"))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total
    console.log("Order of Total amt:", total, " received")

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// Listen Commands
exports.api = functions.https.onRequest(app)