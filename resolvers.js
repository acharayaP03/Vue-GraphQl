module.exports = {
  Query: {
    getUser: () => null,
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId,
      }).save();
      return newPost;
    },
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
