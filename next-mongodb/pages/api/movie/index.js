import Movie from '../../../models/Movie';
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const movies = await Movie.find({});
      return res.status(200).json(movies);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  else if (req.method === "POST") {
    try {
      const movie = new Movie({
        title: req.body.title,
        plot: req.body.plot
      });
      const savedMovie = await movie.save();
      return res.status(200).json(savedMovie);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
