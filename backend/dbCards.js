import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    instructor: String,
    platform: String,
    url: String,
    affiliation: String,
    description: String,
    
});

export default mongoose.model('cards', cardSchema);