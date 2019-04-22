const express = require("express");

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();




// const { ApolloServer, gql } = require('apollo-server-express');
// const { typeDefs, resolvers } = require('./schema');

// const server = new ApolloServer({
//   // These will be defined for both new or existing servers
//   typeDefs,
//   resolvers,
// });

// server.applyMiddleware({ app }); // app is from an existing express app




mongoose.connect('mongodb://localhost:27017/test');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "DELETE, PUT, GET, POST");
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


const routes = require('./routes');
app.use('/api', routes);


//erorr handling middleware
app.use(function(err,req,res,next){
    // console.log(err);
    res.send({error:err.msg});
});

app.listen(5000, () => console.log(`Example app listening on port ${5000}!`))