const mongoose = require("mongoose");

// mongodb+srv://dbuttam:BM7hna5cgf!!jEZ@cluster0.ruzagql.mongodb.net/
mongoose.connect(
  "mongodb+srv://dbuttam:BM7hna5cgf!!jEZ@cluster0.ruzagql.mongodb.net/todos"
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
