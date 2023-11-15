import express  from 'express';
import handleLogin from "../Controllers/UserController.js"

const router = express.Router()


router.post("/login", handleLogin)


export default router