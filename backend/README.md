# 📝 Simple To-Do CRUD API

A lightweight **Node.js + Express** REST API to manage to-do items.  
It demonstrates complete CRUD operations (Create, Read, Update, Delete) with data stored locally in a **JSON file** — no external database needed.

---

## 🚀 Features
- ✅ Create, Read, Update, Delete (CRUD) Todos
- 💾 JSON file-based storage (no database needed)
- 🧾 Clean, structured JSON responses
- 🧠 Input validation
- 🟢 Ready to deploy on Render / Railway
- 🧍 Auto-generates sample data on first run
---

## 🧑‍💻 Tech Stack

- ⚙️ Node.js — JavaScript runtime environment
- 🚀 Express.js — Fast, minimalist web framework for Node.js
- 🧩 Body Parser — Middleware to parse incoming JSON request bodies
- 💾 File System (fs) — Used to store and manage todos in a local JSON file

---


## 📁 Folder Structure
```
todo-api/
│
├── data/
│ └── todos.json # Local data storage
│
├── routes/
│ └── todos.js # All API route logic
│
├── middleware/
│ └── validateTodo.js # Middleware for validation
│
├── app.js # Main entry point
├── package.json # Dependencies & scripts
└── README.md # Project documentation
```

---

## ⚙️ Setup Instructions

### 1️⃣ Open Backend - ToDo CRUD API
```bash
cd backend
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Run the API
```
npm run dev
```

4️⃣ Server starts at:
```
http://localhost:5000
```

---


## 🧠 Sample Data (auto-generated)
> If no todos.json exists, the app auto-creates one with:

```
[
  { "id": 1, "title": "Buy groceries", "completed": false },
  { "id": 2, "title": "Finish the React project", "completed": true },
  { "id": 3, "title": "Go for a walk", "completed": false }
]
```

---

## 📬 Postman Collection

- This Postman collection provides API endpoints for managing the **ToDo CRUD API**.  
- To make testing easier, I’ve created a Postman collection containing all API endpoints.


👉 **[Click here to open the Postman Collection](https://sahilahmed0029-3594081.postman.co/workspace/Sahil-Ahmed's-Workspace~507292b8-beec-4de7-81da-d9594af9042c/collection/47691689-6736a4d4-595e-42b9-9ec4-7cd8ddda43d1?action=share&creator=47691689)**  

- Or you can import it manually:
  - Open **Postman**
  - Click **Import**
  - Paste the above link
  - Start testing the APIs 🎉


---


## 📦 How to Use

### 🔥 Start your server:
```
npm start
```

### 🧭 Open your browser or Postman and visit:
```
http://localhost:5000/todos
```

### 📜 Perform CRUD operations:

- GET `/todos` → View all todos
- POST `/todos` → Add a new todo
- PUT `/todos/id` → Edit a todo
- DELETE `/todos/id` → Delete a todo

### 💾 All changes will automatically persist in data file
> `data/todos.json`

---


## 📡 API Endpoints
|   Method   | Endpoint     | Description         | Request Body                                     | Sample Response                                                                                                 |
| :--------: | ------------ | ------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
|   **GET**  | `/todos`     | Get all todos       | —                                                | `{ "success": true, "data": [ ...todos ] }`                                                                     |
|  **POST**  | `/todos`     | Create a new todo   | `{ "title": "New Task", "completed": false }`    | `{ "message": "Todo created successfully", "data": { "id": 4, "title": "New Task", "completed": false } }`      |
|   **PUT**  | `/todos/:id` | Update a todo by ID | `{ "title": "Updated Task", "completed": true }` | `{ "message": "Todo updated successfully", "data": { "id": 1, "title": "Updated Task", "completed": true } }`   |
| **DELETE** | `/todos/:id` | Delete a todo by ID | —                                                | `{ "message": "Todo deleted successfully", "data": { "id": 1, "title": "Buy groceries", "completed": false } }` |


---


## 🧩 Validation Rules
| Field       | Type    | Required   | Description              |
| ----------- | ------- | ---------- | ------------------------ |
| `title`     | string  | ✅ Yes      | Task name or description |
| `completed` | boolean | ❌ Optional | Task completion status   |

> If validation fails:

```
{ "error": "Title is required and must be a string" }
```

---



## 🧠 Example API Responses
### ✅ GET /todos
```body
[
  { "id": 1, "title": "Buy groceries", "completed": false },
  { "id": 2, "title": "Finish the React project", "completed": true }
]
```

### ✅ POST /todos
```
{
  "message": "✅ New todo created successfully!",
  "todo": {
    "id": 1698354902295,
    "title": "Learn Express.js",
    "completed": false
  }
}
```

### ✅ PUT /todos/:id
```
{
  "message": "✅ Todo updated successfully!",
  "updatedTodo": {
    "id": 1,
    "title": "Buy groceries and fruits",
    "completed": true
  }
}
```

### ✅ DELETE /todos/:id
```

{
  "message": "🗑️ Todo deleted successfully!",
  "deletedTodo": {
    "id": 1,
    "title": "Buy groceries and fruits",
    "completed": true
  }
}
```

