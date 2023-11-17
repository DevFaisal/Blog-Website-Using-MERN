import express from 'express';
import { handleLogin, handleRegistation } from "../Controllers/UserController.js"
import { handlePublish, handleBlogs } from './../Controllers/PostPublishController.js';
import cors from 'cors'


const router = express.Router()
router.use(express.json())


//User Routes
router.post("/login",handleLogin)
router.post("/register", handleRegistation)


//Post Publish Router
router.post('/write', handlePublish)
router.get('/blogs', handleBlogs)


export default router