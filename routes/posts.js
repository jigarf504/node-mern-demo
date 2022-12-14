import express from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../Controllers/posts.js";
const router = express.Router();
router.get("/", getPosts);
router.post("/create", createPost);
router.patch("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
export default router;  