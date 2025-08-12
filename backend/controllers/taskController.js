const Task = require('../models/Task')

const getTasks = async (req, res) => {

    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
};

const addTask = async (req, res) => {
    const { title, description, deadline } = req.body;
    try {
        const task = await Task.create({ userld: req.user.id, title, description, deadline });
        res.status(201).json(task);
    } catch (error) {
        res.staus(500).json({ message: error.message });
    }
};