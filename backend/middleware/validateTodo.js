// middleware/validateTodo.js
function validateTodo(req, res, next) {
    const { title, completed } = req.body;
    if (!title || typeof title !== "string") 
    {
        return res.status(400).json({ error: "Title is required and must be a string" });
    }
    if (completed !== undefined && typeof completed !== "boolean") 
    {
        return res.status(400).json({ error: "Completed must be true or false" });
    }
    next();
}

module.exports = validateTodo;
