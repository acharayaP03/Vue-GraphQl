module.exports = {
  Query: {
    getUser: () => null,
  },
  Mutation: {
    signupUser: async (_, { username, email, password }, { User }) => {
      try {
        const user = await User.findOne({ username });
        if (user) {
          throw new Error("User already exits");
        }
        const newUser = await new User({
          username,
          email,
          password,
        }).save();

        return newUser;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
