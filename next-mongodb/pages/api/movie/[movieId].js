import Movie from '../../../models/Movie';
export default async function handler(req, res) {
    const { movieId } = req.query;
    if (req.method === "GET") {
        try {
            let movie;
            if (movieId.match(/^[0-9a-fA-F]{24}$/)) {
                movie = await Movie.findById({_id: movieId});
            }
            if (!movie) return res.status(404).json("Movie not found!")
            return res.status(200).json(movie);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    else if (req.method === "DELETE") {
        try {
            if (movieId.match(/^[0-9a-fA-F]{24}$/)) {
                await Movie.findByIdAndDelete({ _id: movieId });
            }
            else
                return res.status(404).json("Movie not found!");
            return res.status(200).json("Deleted successfully!!!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    else if (req.method === "PUT") {
        try {
            if (movieId.match(/^[0-9a-fA-F]{24}$/)) {
                await Movie.findByIdAndUpdate({ _id: movieId }, req.body, {new: true});
            }
            else
                return res.status(404).json("Movie not found!");
            return res.status(200).json("Updated successfully!!!");
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}