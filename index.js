const express = require("express");
const app = express();
app.use(express.json());
require('dotenv').config();
const connectDB = require("./db/db");
connectDB();
const PORT = process.env.PORT || 3000;

const router = express.Router();
const { User } = require("./models/UserSchema");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const userRouter = require("./routes/userRouter");



app.use('/user',userRouter)



app.listen(PORT, () => console.log("server is running"));
