import express from "express";
import router from './Routes/User.js';
import cors from 'cors'

const app = express();
app.use(cors())
const PORT = 8000


app.use(router)


app.listen(PORT, () => {
    console.log(`Server has Started at PORT ${PORT}`);
})