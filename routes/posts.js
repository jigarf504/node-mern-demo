import express from 'express';
import { getPosts, createPost, updatePost } from "../Controllers/posts.js";
const router = express.Router();
router.get("/", getPosts);
router.post("/create", createPost);
router.patch("/update/:id", updatePost);
export default router;  