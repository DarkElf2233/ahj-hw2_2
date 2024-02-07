import addMovies from './base';

function deleteMovies() {
  const movies = [...document.querySelectorAll('.movie')];
  for (const movie of movies) {
    movie.remove();
  }
}

function getMoviesInArray() {
  const movies = [...document.querySelectorAll('.movie')];
  const res = [];

  for (const movie of movies) {
    res.push({
      id: parseInt(movie.dataset.id),
      title: movie.dataset.title,
      imdb: parseFloat(movie.dataset.imdb),
      year: parseInt(movie.dataset.year),
    });
  }
  return res;
}

function sortMovies(movies, attr, sortReverse) {
  if (sortReverse) {
    return movies.sort((a, b) => a[attr] - b[attr]);
  }
  return movies.sort((a, b) => b[attr] - a[attr]);
}

setInterval(() => {
  const movies = getMoviesInArray();
  console.log(movies);
  const sortedMovies = sortMovies(movies, 'id', false);
  console.log(sortedMovies);
  deleteMovies();
  addMovies(sortedMovies);
}, 2000);
