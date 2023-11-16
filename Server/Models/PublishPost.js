import mongoose, { Schema } from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }

}, { timestamps: true })

const Blogs  = mongoose.model('Blogs', PostSchema)

export default Blogs