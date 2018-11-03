/*
This is going to be the first applkication to connect to a Mongo Database
*/
//Variable to load the Mongo Library
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb') //Destructuring - This will enable us get objects from the Mongodb Library







//Connecting to the mongodb database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => { // Error checking for the connection
if (err) {
console.log('Unable to connect to MongoDB server');
return
}
console.log('Connected to the MongoDB Server');
//const db = client.db('TodoApp')
// db.collection('Todos').insertOne({
// text: 'somthing to do',
// completed: false
// }, (err, result) => {
// if (err) {
// console.log('Unable to inset todo', err);
// ; }
// console.log(JSON.stringify(result.ops, undefined, 2));
// });
//My challage begins here
// db.collection('Users').insertOne({
// name: 'Igho Okoro',
// age: 51,
// location: 'Nottingham' 
// }, (err, result) => {
// if (err) {
// console.log('Unable to insert users', err);
// }
// console.log(JSON.stringify(result.ops[0]._id.getTimestamp, undefined, 2)); // result.ops is an array of inserted records
// });



client.close();
});