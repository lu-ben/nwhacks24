const MongoClient = require("mongodb").MongoClient;
const {ObjectId } = require('mongodb');

const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);

const COLLECTION = "users"
const DATABASE = "carpool"


const addUser = async (user_info) => {
    const insert = async (user_info) => {
      try {
        await client.connect();
        const database = client.db(DATABASE);
        const users = database.collection(COLLECTION);
  
        const userdoc = { sub: user_info.sub }; // sub is user_id
        const new_user_info = { ...user_info, profile_complete: false, phone: undefined}

        const existingUser = await users.findOne(userdoc);
        if (!existingUser){
            const result = await users.insertOne(new_user_info);
            return result;
        } else {
            return existingUser;
        }
      } finally {
        await client.close();
      }
    };
    const result = await insert(user_info);
    return result;
  };


  
const getUsers = async () => {
    const getAll = async () => {
        try {
          await client.connect();
          const database = client.db(DATABASE);
          const users = database.collection(COLLECTION);
    
          const query = {};
          const options = { projection: { _id: 1, user_id: 1} };
          const cursor = users.find(query, options);
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
    addUser,
    getUsers,

  };
  