// // app.js
// const express = require("express");
// const bodyParser = require("body-parser");
// const todosRouter = require("./routes/todos");
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const todosRouter = require("./routes/todos");

const app = express();
const PORT = process.env.PORT || 5000;

// Create data folder if not exists
const dataDir = path.join(__dirname, "data");
const todosFile = path.join(dataDir, "todos.json");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Create sample todos if file missing or empty
if (!fs.existsSync(todosFile) || fs.readFileSync(todosFile).length === 0) {
  const sampleTodos = [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Finish the React project", completed: true },
    { id: 3, title: "Go for a walk", completed: false }
  ];
  fs.writeFileSync(todosFile, JSON.stringify(sampleTodos, null, 2));
  console.log("✅ Sample todos.json created with sample data.");
}

app.use(bodyParser.json());

// Routes
app.use("/todos", todosRouter);

// 404 handler
app.use((req, res)=> {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}/todos`);
});
