const fs = require("fs");
const path = require("path");
const { ApolloServer } = require("apollo-server");
require("dotenv").config({ path: ".env" });

const connectDb = require("./db");
const User = require("./models/User");
const Post = require("./models/Post");
const db = process.env.MONGODB_URI;
const resolvers = require("./resolvers");

//connect to Mongo db
connectDb(db);

//Read typeDefs file from the file system
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");

//assign ApolloServer to the variable
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is listening on ${url}`);
});
