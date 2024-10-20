const UserModel = require("../Models/UserModel");


const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await UserModel.create({ name, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });   
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {   
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.login(email, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createUser, getUsers, login };