import mongoose from "mongoose";
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    plot: {
        type: String,
        required: true
    }
})

export default mongoose.models.Movie || mongoose.model('Movie', movieSchema);