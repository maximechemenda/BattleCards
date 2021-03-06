const axios = require('axios');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const { resolve } = require('path');
const bodyParser = require('body-parser');
// Replace if using a different env file or config
require('dotenv').config({ path: __dirname + '/.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { BattleCards } = require( __dirname + '/battleCardModel.js');



/* async function createBattleCards(client, battleCards){
    const result = await client.db("test").collection("battlecards").insertOne(battleCards);
} */


async function updateDocument(client, updatedEmails) {
    result = await client.db("test").collection("emails").updateOne({ id: "emailData" }, { $set: updatedEmails });
}

async function main(newEmail) {
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://maxime:maxime2312@battlecardsdevelopment-sixjc.mongodb.net/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();

        result = await client.db("test").collection("emails").findOne({id: "emailData"});
        var emailsContent = result.emails;
        emailsContent.push(newEmail);


        const finalResult = await updateDocument(client, {emails: emailsContent})
        return finalResult;

    } catch (e) {
        console.error(e);
    } 

}

async function checkEmail(userEmail) {

  const { MongoClient } = require('mongodb');
  const uri = "mongodb+srv://maxime:maxime2312@battlecardsdevelopment-sixjc.mongodb.net/test?retryWrites=true&w=majority";

  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
      await client.connect();

      result = await client.db("test").collection("emails").findOne({id: "emailData"});
      const emailsContent = result.emails;
      var isRegistered = false;

      emailsContent.forEach(registeredEmail => {
        if (registeredEmail === userEmail) {
          isRegistered = true;
        }
      })

      return isRegistered;

  } catch (e) {
      console.error(e);
  } 

}

//connect to mongodb atlas

//PRODUCTION MODE
//mongoose.connect(`mongodb+srv://maxime:maxime2312@battlecards-pppqw.mongodb.net/test?retryWrites=true&w=majority`, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })

//DEVELOPMENT MODE
mongoose.connect(`mongodb+srv://maxime:maxime2312@battlecardsdevelopment-sixjc.mongodb.net/test?retryWrites=true&w=majority`, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log('MongoDB connected'))
  .catch(e => console.log('MongoDB could not be connected due to ', e)); 


//app.use(express.static(__dirname + process.env.STATIC_DIR));
//app.use(express.static(__dirname + '/../../dist'))
app.use(express.static(__dirname + '/../../dist'))
// Use JSON parser for all non-webhook routes.
app.use((req, res, next) => {
  if (req.originalUrl === '/stripe-webhook') {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

app.get('/api/battleCards/:companyIdentifier', async (req, res) => {

    const companyIdentifier = req.params.companyIdentifier;

    try {
        const battleCards = await BattleCards.findOne({id: companyIdentifier});
        res.send(battleCards)

    } catch (e) {
        console.error(e);
    } 
});

app.post('/api/battleCards', async (req, res) => {
  
  try {

      const newBattleCard = new BattleCards({ ...req.body });
      res.send(newBattleCard.save())

  } catch (e) {
      console.error(e);
  } 
});

  app.put('/api/battleCards/:companyIdentifier', async (req, res) => {
  
  const companyIdentifier = req.params.companyIdentifier;

  try {

    const result = await BattleCards.findOneAndUpdate(companyIdentifier, { data: {id: req.body.id, caseStudies: req.body.caseStudies, battleCards: req.body.battleCards, isEmptyBattleCardsState: req.body.isEmptyBattleCardsState, isEmptyCaseStudiesState: req.body.isEmptyCaseStudiesState}}, {new: true})
    console.log(result)
    
    res.send(result)

  }
  catch (e) {
      console.error(e);
  } 
});

app.put('/emailToMongo', (req, res) => {
  const newEmail = req.body.newEmail;
  const response = main(newEmail).catch(console.error);
  res.send(response)
});

app.put('/checkingEmail', async (req, res) => {

  const userEmail = req.body.userEmail;
  const arrayEmail = userEmail.split('@');
  const lastEmailPart = arrayEmail[1]
  console.log(lastEmailPart)

  var isRegistered = await checkEmail(lastEmailPart);
  console.log(isRegistered)

  if (isRegistered) {
    console.log('this is true')
    res.send('true')
  } else {
    console.log('this is false')
    res.send('false')
  }
});











app.get('/', (req, res) => {
  const path = resolve( __dirname + '/../client/index.html');
  res.sendFile(path);
});

app.get('/config', async (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post('/create-customer', async (req, res) => {
  // Create a new customer object
  const customer = await stripe.customers.create({
    email: req.body.email,
  });

  // save the customer.id as stripeCustomerId
  // in your database.

  res.send({ customer });
});

app.post('/create-subscription', async (req, res) => {
  // Set the default payment method on the customer
  try {
    await stripe.paymentMethods.attach(req.body.paymentMethodId, {
      customer: req.body.customerId,
    });
  } catch (error) {
    return res.status('402').send({ error: { message: error.message } });
  }

  let updateCustomerDefaultPaymentMethod = await stripe.customers.update(
    req.body.customerId,
    {
      invoice_settings: {
        default_payment_method: req.body.paymentMethodId,
      },
    }
  );

  // Create the subscription
  const subscription = await stripe.subscriptions.create({
    customer: req.body.customerId,
    items: [{ price: process.env[req.body.priceId] }],
    expand: ['latest_invoice.payment_intent'],
  });

  res.send(subscription);
});

app.post('/retry-invoice', async (req, res) => {
  // Set the default payment method on the customer

  try {
    await stripe.paymentMethods.attach(req.body.paymentMethodId, {
      customer: req.body.customerId,
    });
    await stripe.customers.update(req.body.customerId, {
      invoice_settings: {
        default_payment_method: req.body.paymentMethodId,
      },
    });
  } catch (error) {
    // in case card_decline error
    return res
      .status('402')
      .send({ result: { error: { message: error.message } } });
  }

  const invoice = await stripe.invoices.retrieve(req.body.invoiceId, {
    expand: ['payment_intent'],
  });
  res.send(invoice);
});

app.post('/retrieve-upcoming-invoice', async (req, res) => {
  const subscription = await stripe.subscriptions.retrieve(
    req.body.subscriptionId
  );

  const invoice = await stripe.invoices.retrieveUpcoming({
    subscription_prorate: true,
    customer: req.body.customerId,
    subscription: req.body.subscriptionId,
    subscription_items: [
      {
        id: subscription.items.data[0].id,
        deleted: true,
      },
      {
        price: process.env[req.body.newPriceId],
        deleted: false,
      },
    ],
  });
  res.send(invoice);
});

app.post('/cancel-subscription', async (req, res) => {
  // Delete the subscription
  const deletedSubscription = await stripe.subscriptions.del(
    req.body.subscriptionId
  );
  res.send(deletedSubscription);
});

app.post('/update-subscription', async (req, res) => {
  const subscription = await stripe.subscriptions.retrieve(
    req.body.subscriptionId
  );
  const updatedSubscription = await stripe.subscriptions.update(
    req.body.subscriptionId,
    {
      cancel_at_period_end: false,
      items: [
        {
          id: subscription.items.data[0].id,
          price: process.env[req.body.newPriceId],
        },
      ],
    }
  );

  res.send(updatedSubscription);
});

app.post('/retrieve-customer-payment-method', async (req, res) => {
  const paymentMethod = await stripe.paymentMethods.retrieve(
    req.body.paymentMethodId
  );

  res.send(paymentMethod);
});
// Webhook handler for asynchronous events.
app.post(
  '/stripe-webhook',
  bodyParser.raw({ type: 'application/json' }),
  async (req, res) => {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.headers['stripe-signature'],
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(err);
      console.log(`⚠️  Webhook signature verification failed.`);
      console.log(
        `⚠️  Check the env file and enter the correct webhook secret.`
      );
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    const dataObject = event.data.object;

    // Handle the event
    // Review important events for Billing webhooks
    // https://stripe.com/docs/billing/webhooks
    // Remove comment to see the various objects sent for this sample
    switch (event.type) {
      case 'invoice.payment_succeeded':
        // Used to provision services after the trial has ended.
        // The status of the invoice will show up as paid. Store the status in your
        // database to reference when a user accesses your service to avoid hitting rate limits.
        break;
      case 'invoice.payment_failed':
        // If the payment fails or the customer does not have a valid payment method,
        //  an invoice.payment_failed event is sent, the subscription becomes past_due.
        // Use this webhook to notify your user that their payment has
        // failed and to retrieve new card details.
        break;
      case 'invoice.finalized':
        // If you want to manually send out invoices to your customers
        // or store them locally to reference to avoid hitting Stripe rate limits.
        break;
      case 'customer.subscription.deleted':
        if (event.request != null) {
          // handle a subscription cancelled by your request
          // from above.
        } else {
          // handle subscription cancelled automatically based
          // upon your subscription settings.
        }
        break;
      case 'customer.subscription.trial_will_end':
        // Send notification to your user that the trial will end
        break;
      default:
      // Unexpected event type
    }
    res.sendStatus(200);
  }
);


app.listen(4343, () => console.log(`Node server listening on port ${4343}!`));