require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./graphql/schema');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const app = express();

const allowedOrigins = [
    'http://localhost:4200',
    'http://comp-3133-assignment2-frontend-delta.vercel.app'
  ];
  
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS not allowed for this origin: ' + origin));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'], // Ensure OPTIONS is allowed
    allowedHeaders: ['Content-Type', 'Authorization'], // Ensure correct headers
    credentials: true // If you're using cookies or authorization headers
  }));
  

app.use(express.json());

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
 }));

app.all('/graphql', createHandler({ schema }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.options('*', cors());