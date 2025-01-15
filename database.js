// Go to mongodb website
// create a free M0 cluster
// create user
// Get the connection string
// install mongodb compass
// homework - create a database , install a mongodb package , create a connection for code , crud - 

const { MongoClient } = require("mongodb")

const url = 'mongodb+srv://sumit:sumit@cluster0.8dflsuw.mongodb.net'

const client = new MongoClient(url)

const dbName = "Node_learning"

async function main() {
    await client.connect();
    console.log("Connected successfull to server")
    const db = client.db(dbName)
    const collection = db.collection("User");

    // the following example can be pasted here ....

    
    // const data = {
    //     name:"Nitish",
    //     age:"21",
    //     Number:"6201007954",
    //     city:"lakisarai"
    // }
    
    // const insertResult = await collection.insertMany([data])
    // console.log("Inserted document ==> ", insertResult)

    // const findResult = await collection.find().toArray();
    // console.log("Found Document ==> ", findResult)

    // const countResult = await collection.countDocuments({});
    // console.log("Count of document of user collection == >", countResult)

    const result = await collection.find({name:"Nitish"}).toArray()
    console.log("Result=>", result)

    return 'done';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
