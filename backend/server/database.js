const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://user:user@cluster0.ndjalsu.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToMongoDB() {
  let conn = null;

  try {
    console.log("Trying to establish connection...");
    conn = await client.connect();
    console.log("Connection established successfully");
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
  }

  // Use the connection to access the database
  if (conn) {
    let db = conn.db("testDB");
    module.exports = db;
  } else {
    console.error("Connection not established. Exiting...");
  }
}

// Call the asynchronous function
connectToMongoDB();
