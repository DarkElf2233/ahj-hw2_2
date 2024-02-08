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
  if (typeof movies[0][attr] === 'string') {
    if (sortReverse) {
      return movies.sort((a, b) => b[attr].localeCompare(a[attr]));
    }
    return movies.sort((a, b) => a[attr].localeCompare(b[attr]));
  }

  if (sortReverse) {
    return movies.sort((a, b) => b[attr] - a[attr]);
  }
  return movies.sort((a, b) => a[attr] - b[attr]);
}

const attributes = [];
for (const movie of getMoviesInArray()) {
  for (const key in movie) {
    if (!attributes.includes(key)) {
      attributes.push(key);
    }
  }
}

while (true) {
  for (const attr of attributes) {
    for (const sort of [false, true]) {
      setTimeout(() => {
        const movies = getMoviesInArray();
        const sortedMovies = sortMovies(movies, attr, sort);
        deleteMovies();
        addMovies(sortedMovies);
      }, 2000);
    }
  }
}
