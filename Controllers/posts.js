import mongoose from "mongoose";
import PostMessage from "../Models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = PostMessage(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("Invalid request");
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("Invalid request");
    }
    await PostMessage.findByIdAndDelete(_id);
    res.status(200).json({ message: "Post delete successfully", status: true });
  } catch (e) {
    res.status(409).json({ message: e.message, status: false });
  }
};