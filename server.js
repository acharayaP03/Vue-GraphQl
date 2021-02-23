const { ApolloServer } = require("apollo-server");
require("dotenv").config({ path: ".env" });

/**
 * @Create and import mongo Db
 */
const connectDb = require("./db");
const User = require("./models/User");
const Post = require("./models/Post");

/**
 * @read_credential from .env file
 */
const db = process.env.MONGODB_URI;

connectDb(db);
/**
 * @import typeDefs and resolvers for Graph ql
 */
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

/**
 * @create GraphQL Apollo server
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post,
  },
});

/**
 * @url listens on localhost:4000 by default.
 * @change pass a PORT that we want to listen.
 */
const PORT = 5000 || process.env.PORT;
server.listen(PORT).then(({ url }) => {
  console.log(`Server is listening on ${url}`);
});
