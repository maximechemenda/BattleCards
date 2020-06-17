const regeneratorRuntime = require("regenerator-runtime");
require("regenerator-runtime/runtime");
require("regenerator-runtime/path").path;

async function main() {
  const { MongoClient } = require('mongodb');
  
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://maxime:maxime2312@battlecardsdevelopment-sixjc.mongodb.net/test?retryWrites=true&w=majority";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for more details
     */
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

