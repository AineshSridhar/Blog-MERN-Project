const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author_name: {
        type: String, 
        required: true
    },
    content: {
        type: String,
        required: true
    }
})