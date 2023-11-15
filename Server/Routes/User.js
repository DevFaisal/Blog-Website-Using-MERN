import express from 'express';
import { handleLogin, handleRegistation } from "../Controllers/UserController.js"

const router = express.Router()
router.use(express.json())



router.post("/login", handleLogin)
router.post("/register", handleRegistation)


export default router