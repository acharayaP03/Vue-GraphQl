const mongoose = require("mongoose");

const connectDb = async (db) => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("-------------* Mongo Db is Connected *--------------");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
