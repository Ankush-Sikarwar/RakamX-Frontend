const express = require("express");
const app = express();
app.use(express.json());
require('dotenv').config();
const connectDB = require("./db/db");
connectDB();

const router = express.Router();
const {User, userValidationSchema} = require("./models/UserSchema");
const userRouter = require("./routes/userRouter");
const PORT = process.env.PORT || 3000;

// app.use('/user',userRouter)



app.listen(PORT, () => console.log("server is running"));
