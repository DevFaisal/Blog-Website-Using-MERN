import express from "express";
import router from "./Routes/route.js";
import cors from 'cors'
import connectDB from "./connection.js";
import JWT from 'jsonwebtoken'

const app = express();
const PORT = 8000

app.use(cors())
app.use(router)
express.urlencoded({ extended: true })


connectDB();

app.listen(PORT, () => {
    console.log(`Server has Started at PORT ${PORT}`);
})