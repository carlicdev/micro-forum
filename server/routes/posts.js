const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/post');

// Get all thread
router.get('/', async (req, res) => {
    const threads = await Post.find();
    res.status(200).json(threads);
});

// Get single thread
router.get('/:slug', async (req, res) => {
    const thread = await Post.find({slug: req.params.slug});
    res.status(200).json(thread);
});


// Post new thread
router.post('/new-thread', (req, res) => {
    const { category, title, comment, } = req.body;

    const newPost = new Post({
        _id: new mongoose.Types.ObjectId,
        title,
        category,
        author: 'John',
        comments: [{
            _id: new mongoose.Types.ObjectId,
            content: comment,
            author: 'John',
            date: Date.now()
        }]
    });

    newPost.save()
        .then(result => {
            res.status(201).json({
                msg: 'new thread created',
                thread: result
            });
        })
        .catch(err => {
            res.status(500).json({
                msg: 'couldn´t create new thread',
                error: err.message
            });
        });
});

// Post new comment
router.patch('/:slug', async (req, res) => {
    const { comment } = req.body;
    // Create new comment obj
    const newComment = {
        _id: new mongoose.Types.ObjectId,
        author: 'Sam',
        content: comment,
        date: Date.now()
    };

    //Get a copy of comments array
    const tempComments = await Post.findOne({slug: req.params.slug})
        .then(result => {
            return result.comments
        })
        .catch(err => {
            res.status(500).json({
                msg: 'couldn´t create new comment',
                error: err.message
            });
        });
    
    // Push new comment
    tempComments.push(newComment);

    // Update comments array 
    await Post.updateOne({slug: req.params.slug}, {$set:{comments: tempComments}})
            .then(() => {
                res.status(201).json({
                    msg: 'new comment created'
                });
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'couldn´t create new comment',
                    error: err.message
                });
            }); 
});

module.exports = router;