import PostMessage from '../Models/postMessage.js'

export const getPosts = async (req,res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch(e) {
        res.status(404).json({message:e.message})
    }
}

export const createPost = async (req,res) => {
    try { 
        const post = req.body;
        const newPost = PostMessage(post)
        await newPost.save();
        res.status(201).json(newPost)
    } catch(e) {
        res.status(409).json({message:e.message})
    }
}