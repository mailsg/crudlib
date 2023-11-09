require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoURI = process.env.MONGODB_URI;
const dbname = process.env.DATABASE_NAME;
const collname = process.env.COLLECTION_NAME;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Function to connect to the MongoDB database
async function connect() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Function to close the MongoDB connection
async function disconnect() {
  try {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
    throw error;
  }
}

module.exports = {
  connect,
  disconnect,
  getBooksCollection: () => client.db(dbname).collection(collname)
};
