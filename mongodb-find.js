/*
This is going to be the first applkication to connect to a Mongo Database
*/
const {MongoClient, ObjectID} = require('mongodb') //Destructuring - This will enable us get objects from the Mongodb Library




//Connecting to the mongodb database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => { // Error checking for the connection


const db = client.db('TodoApp');


if (err) {
console.log('Unable to connect to MongoDB server');
return
}
console.log('Connected to the MongoDB Server');

//Access the Database Collection Todos. This will retreive all the records

// db.collection('Todos').find({
//     _id: new ObjectID("5bd8e3ea2d8cdf38c20b82c0")}).toArray().then((docs) => {

//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));

// }, (err) => { 
//     console.log('Unable to fetch todos', err);

// });


// db.collection('Todos').find({}).count().then((count) => {

//     console.log(`Todos Count ${count}`);


// }, (err) => { 
//     console.log('Unable to fetch todos', err);

// });


//THE CHALLANGE!!!!
//Query the users collection and retreive all the documents with Igho Okoro

db.collection('Users').find({name:  'Ufuoma Okoro'}).toArray().then((docs) => {

console.log('Users');
console.log(JSON.stringify(docs, undefined, 2));

}), (err) => {
    console.log('unable to fetch Users', err);
};



//client.close();
});