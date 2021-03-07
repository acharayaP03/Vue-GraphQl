const { ApolloServer, AuthenticationError } = require("apollo-server");
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
const jwt = require("jsonwebtoken");
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");
/**
 * @varify jwt form client
 */
const getUser = async (token) => {
  if (token) {
    try {
      let user = await jwt.verify(token, process.env.SECRET);
      console.log(user);
    } catch (error) {
      throw new AuthenticationError(
        "Your Session has expired, please sign in again."
      );
    }
  }
};

/**
 * @create GraphQL Apollo server
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers["authorizations"];
    return { User, Post, currentUser: await getUser(token) };
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
