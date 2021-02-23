const { ApolloServer, gql } = require("apollo-server");
require("dotenv").config({ path: ".env" });
const connectDb = require("./db");
const User = require("./models/User");
const Post = require("./models/Post");

const db = process.env.MONGODB_URI;

//connect to Mongo db
connectDb(db);

//define typeDefs,
const typeDefs = gql`
  type Todos {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todos]
  }
`;

//create a resolver
// const resolvers = {
//   Query: {
//     getTodos: () => todos,
//   },
//   Mutation: {
//     addTodo: (_, args) => {
//       const todo = { task: args.task, completed: args.completed };
//       todos.push(todo);
//       return todo;
//     },
//   },
// };
//assign ApolloServer to the variable
const server = new ApolloServer({
  typeDefs,
  context: {
    User,
    Post,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is listening on ${url}`);
});
