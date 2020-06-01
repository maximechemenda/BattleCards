const mongoose = require('mongoose');
const fastify = require('fastify')();
const routes = require('./routes');
const path = require('path')
const {parsed : {MONGO_ATLAS_PW}} = require('dotenv').config();


const DistPath = path.join(__dirname, '..', 'dist')

fastify.register(require('fastify-static'), {
  root: DistPath,
})


//connect to mongodb atlas

//PRODUCTION MODE
mongoose.connect(`mongodb+srv://maxime:maxime2312@battlecards-pppqw.mongodb.net/test?retryWrites=true&w=majority`, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })

//DEVELOPMENT MODE
//mongoose.connect(`mongodb+srv://maxime:maxime2312@battlecardsdevelopment-sixjc.mongodb.net/test?retryWrites=true&w=majority`, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log('MongoDB connected'))
  .catch(e => console.log('MongoDB could not be connected due to ', e)); 

//handles GET / request
fastify.get('/', async (request, reply) => {
  try {
    console.log('route')
   reply.sendFile('index.html')
  }
  catch (e) { console.log('The following error occured: ', e) }
});



/* fastify.get('/:app', async (request, reply) => {
  try {
    console.log('other route')
    reply.send({ hello: 'world' })
    //reply.sendFile('app.html')
  }
  catch (e) { console.log('The following error occured: ', e) }
});  */



//iterating over all the routes and registering them with fastify
routes.forEach(route => fastify.route(route))

//launching server at port : 3000 in local environment
fastify.listen({
  port: process.env.PORT || 3000, 
  host: '0.0.0.0'}, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`)
})

/* fastify.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`)
}) */