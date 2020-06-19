import 'regenerator-runtime/runtime'
const mongoose = require('mongoose');



async function main() {
  const { MongoClient } = require('mongodb');

    const uri = "mongodb+srv://maxime:maxime2312@battlecardsdevelopment-sixjc.mongodb.net/test?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

  /**
   * Print the names of all available databases
   * @param {MongoClient} client A MongoClient that is connected to a cluster
   */
  async function listDatabases(client) {
      databasesList = await client.db().admin().listDatabases();

      console.log("Databases:");
      databasesList.databases.forEach(db => console.log(` - ${db.name}`));

    
  }

main().catch(console.error);

