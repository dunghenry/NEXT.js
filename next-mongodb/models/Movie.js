import mongoose from "mongoose";
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
        maxLength: 100
    },
    plot: {
        type: String,
        required: true
    }
})

export default mongoose.models.Movie || mongoose.model('Movie', movieSchema);