const express = require('express');
const app = express();


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello, Node.js HTTP Server!</h1>');
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Node.js HTTP server is running on port ${port}`);
});

var MongoClient = require('mongodb').MongoClient;
async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const url = 'mongodb://0.0.0.0:27017'; // use local host instead of 0.0.0.0 if not working
 

    const client = new MongoClient(url);
 
    try {
        await client.connect();
        console.log("Successfully connected to database!");
 
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 

main().catch(console.error);
