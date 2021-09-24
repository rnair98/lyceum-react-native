import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    platform: String,
    instructor: String,
    imgUrl: String,
    url: String,
    affiliation: String,
    description: String,
});

export default mongoose.model('cards', cardSchema);