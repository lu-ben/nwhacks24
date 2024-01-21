const MongoClient = require("mongodb").MongoClient;
const {ObjectId} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);

const COLLECTION = "requests"
const DATABASE = "carpool"

const addRequest = async (user_id, origin, destination, time, date) => {
    const insert = async (user_id, origin, destination, time, date) => {
      try {
        await client.connect();
        const database = client.db(DATABASE);
        const rideRequests = database.collection(COLLECTION);
  
        const doc = { user_id: user_id, origin: origin, destination: destination,
                    time: time, date: date, };
        const result = await rideRequests.insertOne(doc);
        return result;
      } finally {
        await client.close();
      }
    };
    const result = await insert(user_id, origin, destination, time, date);
    return result;
  };

const getRequests = async () => {
    const getAll = async () => {
        try {
          await client.connect();
          const database = client.db(DATABASE);
          const rideRequests = database.collection(COLLECTION);
    
          const query = {};
          const options = { projection: { _id: 1, user_id: 1, origin: 1, destination: 1, time: 1, date: 1 } };
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


  const deleteRequest = async (id) => {
    const deleteValue = async (id) => {
      try {
        await client.connect();
        const database = client.db(DATABASE);
        const rideRequests = database.collection(COLLECTION);
        const query = { _id: new ObjectId(id) };
  
        const result = await rideRequests.deleteOne(query);
        return result;
      } finally {
        await client.close();
      }
    };
    const result = await deleteValue(id);
    return result;
  };

  module.exports = {
    addRequest,
    getRequests,
    deleteRequest,
  };
  