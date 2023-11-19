import express from 'express';
import { handleLogin, handleRegistration, handleLogOut, refreshUser } from "../Controllers/UserController.js"
import { handlePublish, handleBlogs } from './../Controllers/PostPublishController.js';
import cookieParser from 'cookie-parser';

const router = express.Router()
router.use(cookieParser())
router.use(express.json())


//User Routes
router.post("/login", handleLogin)
router.post("/register", handleRegistration)
router.get("/logout", handleLogOut)
router.get("/refresh", refreshUser)


//Post Publish Router
router.post('/write', handlePublish)
router.get('/blogs', handleBlogs)


export default router