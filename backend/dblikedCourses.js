import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    platform: String,
    instructor: String,
    imgUrl: String,
    url: String,
    affiliation: String,
    
});

export default mongoose.model('likedCourses', cardSchema);