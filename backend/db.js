const mongoose = require("mongoose");
import dotenv from 'dotenv';

dotenv.config();


mongoose.connect(
  process.env.MONGO
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo
};
