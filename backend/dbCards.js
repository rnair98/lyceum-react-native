import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    _id: String,
    name: String,
    platform: String,
    instructor: String,
    imgUrl: String,
    url: String,
    affiliation: String,
    description: String,
});

export default mongoose.model('cards', cardSchema);