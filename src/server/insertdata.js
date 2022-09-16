const { MongoClient } = require("mongodb");
require('dotenv').config();
// Replace the following with your Atlas connection string                                                                                                                                        

const url = process.env.MONGO_MURI + "/?retryWrites=true&w=majority";

const client = new MongoClient(url);

 // The database to use

 const dbName = "WVChat";
                    
 async function run() {

    try {

         await client.connect();

         console.log("Connected correctly to server");

         const db = client.db(dbName);

         // Use the collection "people"

         const col = db.collection("Chats");

          let chatDocument = {
            "name": "Test User 10",
            "message": "okay",                                                                                                                               
            "time": new Date()                                                                                                                                 
          }

         const p = await col.insertOne(chatDocument);

         const myDoc = col.findOne({});

         // Print to the console
        //  await myDoc.forEach(console.dir);
         console.log(myDoc);

        } catch (err) {

         console.log(err.stack);

     }

 

     finally {

        await client.close();

    }

}

run().catch(console.dir);