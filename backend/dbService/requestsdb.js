const MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);

const addRequest = async (user, origin, destination, time, date) => {
    const insert = async (user, origin, destination, time, date) => {
      try {
        await client.connect();
        const database = client.db("carpool");
        const rideRequests = database.collection("requests");
  
        const doc = { user: user, origin: origin, destination: destination,
                    time: time, date: date, };
        const result = await rideRequests.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        return result;
      } finally {
        await client.close();
      }
    };
    const result = await insert(user, origin, destination, time, date);
    return result;
  };


  
const getRequests = async () => {
    const getAll = async () => {
        try {
          await client.connect();
          const database = client.db("carpool");
          const rideRequests = database.collection("requests");
    
          const query = {};
          const options = { projection: { _id: 1, user: 1, origin: 1, destination: 1, time: 1, date: 1 } };
          const cursor = rideRequests.find(query, options);
          const result = [];
          await cursor.forEach((entry) => {
            result.push(entry);
          });
          return result;
        } finally {
          await client.close();
        }
      };
      const result = await getAll();
      return result;
  };

  module.exports = {
    addRequest,
    getRequests,
  };
  