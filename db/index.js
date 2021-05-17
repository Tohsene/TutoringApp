/**
 * i. creating a connection function for mongodb
 * 2. start a local mongodb server connection
 */

const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

//create the connection function
// const connectDB = ()=> {
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     })
//     .then(() => {
//         console.log('MongoDB connected...');

//         //save data
//     })
//     .catch((err)=> {
//         console.error(err.message);
//         // Exit with failure
//         process.exit(i);
//     })
// }

//you can also use aync mongoose connection
const connectDB = async()=>{
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log('MongoDB connected...');

        //send data
    } catch (error) {
        console.error(err.message);

        //Exit with failure;
        process.exit(i);
    }
}

module.exports = connectDB;