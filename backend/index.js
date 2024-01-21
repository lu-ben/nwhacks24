const express = require('express');
const app = express();
const cors = require('cors');
const rideRequestsRouter = require('./routes/requestsRoutes.js'); 
const ridesRouter = require('./routes/ridesRoutes.js'); 
const usersRouter = require('./routes/usersRoutes.js'); 


const port = 3000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})

/*
 .../{Router}/add
 .../{Router}/delete/{id}
 .../{Router}/get

 */
app.use('/rideRequests', rideRequestsRouter); 
app.use('/rides', ridesRouter); 
app.use('/users', usersRouter); 

app.listen(port, () => {
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
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

/*
Collections: 
- requests: ongoing requests of people that are REQUESTING a ride
- rides: ongoing ride offers from people who are offering to give a ride

*/
