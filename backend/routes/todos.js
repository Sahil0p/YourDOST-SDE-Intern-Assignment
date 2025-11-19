// routes/todos.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const validateTodo = require("../middleware/validateTodo");

const router = express.Router();
const filePath = path.join(__dirname, "../data/todos.json");

// Helper functions
const readTodos = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeTodos = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

// ✅ GET /todos
router.get("/", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// ✅ POST /todos
router.post("/", validateTodo, (req, res)=> {
  const todos = readTodos();
  const newTodo = {
    id: Date.now(),
    title: req.body.title,
    completed: req.body.completed || false
  };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json({
    message: "✅ New todo created successfully!",
    todo: newTodo
  });
});

// ✅ PUT /todos/:id
router.put("/:id", validateTodo, (req, res) => {
  const todos = readTodos();
  const todoIndex = todos.findIndex(t => t.id == req.params.id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: "❌ Todo not found" });
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    title: req.body.title,
    completed: req.body.completed !== undefined ? req.body.completed : todos[todoIndex].completed
  };

  writeTodos(todos);

  // 🟢 Return success message with updated data
  res.json({
    message: "✅ Todo updated successfully!",
    updatedTodo: todos[todoIndex]
  });
});

// ✅ DELETE /todos/:id
router.delete("/:id", (req, res) => {
  const todos = readTodos();
  const todoIndex = todos.findIndex(t => t.id == req.params.id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: "❌ Todo not found" });
  }

  const deletedTodo = todos.splice(todoIndex, 1)[0];
  writeTodos(todos);

  // 🟢 Return success message with deleted data
  res.json({
    message: "🗑️ Todo deleted successfully!",
    deletedTodo
  });
});

module.exports = router;
