require('dotenv').config();
export default {
  MongoURI: process.env["MONGO_MURI"] ?? '',
 }