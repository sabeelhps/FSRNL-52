const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    isWatched: Boolean
}, {versionKey: false, timestamps: true});

// This line will basicall creates a 'movies' collection in mongo db.
const Movie = mongoose.model("Movie", moviesSchema);

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/moviesDB');
    console.log('DB Connected');

    // const movies = await Movie.find({});

    // console.log(movies);

    const superman = new Movie({ name: 'Superman', year: 2011, rating: 8.5, isWatched: true });
    // console.log(aquaman);
    await superman.save();
    console.log('document saved');

}

main();

