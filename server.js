/**
 * i. Creating express server
 * 2. connect to mongodb
 * 3. Initializing express
 * 4. Initialize express middleware
 * 5. create a simple get rrequest route(optional)
 * 6. Inject our routes
 * 7. listen to our app connection
 */

const express = require('express');
const connectDB = require('./db');
require('dotenv').config(); // allows us to  use the environmental variables in .env
const { PORT} = process.env;
//connect to db
connectDB();

//Initialize express
const app = express();

//initialize exress middleware
app.use(express.json({ extended: false }));

//create a basic express route
app.get('/', (req, res) => res.json({ message: "Welcome to Tutoring app"}));

//PORT
const port = process.env.PORT || PORT;

//listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));