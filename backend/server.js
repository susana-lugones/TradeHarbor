const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./models/userSchema')

const SECRET_KEY = "secretkey"

// connect to express app
const app = express()

// connect to mongodb

const mongo_url = 'mongodb+srv://root:root@cluster30.tmgevxw.mongodb.net/UsersDB?retryWrites=true&w=majority'
mongoose.connect(mongo_url)
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(8000, () => {
        console.log('Server is running on port 8000')
    })
}).catch((err) => {
    console.log(err)
})

// middleware

app.use(bodyParser.json())
app.use(cors())

// routes => CRUD API

app.post('/register', async (req, res) => {
    try {
        const {email, username, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({email, username, password: hashedPassword})
        await newUser.save()
        res.status(201).json({message: 'User created successfully'})
    } catch (error) {
        res.status(500).json({error: "Error Signing Up"})
    }
})

app.get('/register', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error: "Error getting users"})
    }
})

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).json({error: "User not found"})
        }
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return res.status(400).json({error: "Invalid Password"})
        }
        const token = jwt.sign({ userId: user._id}, SECRET_KEY, {expiresIn: '1h'})
        res.json({ message: 'Login successful', token})
    } catch (error) {
        res.status(500).json({error: "Error logging in", error})
    }
})


