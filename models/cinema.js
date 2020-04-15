const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
//the method should loop through the films
//pick out the film titles and add them to an array
// return that arrau of film titles
  const titles = this.films.map(function (film) { return film.title})
  //const foundFilm = []
  // for (const film of this.films){
  //   foundFilm.push(film.title)
  // }
  // return foundFilm
  return titles
};

Cinema.prototype.findByTitle = function (title) {
  const foundFilm = this.films.find(function(film) {return film.title === title;})
  return foundFilm;
};

Cinema.prototype.filmsByGenre = function (genre) {
  return this.films.filter((film) => {
    return film.genre === genre;
  });
};

Cinema.prototype.hasFilmsFromYear = function (year) {
  return this.films.some((film) => {
    return film.year === year;
  });
};

Cinema.prototype.areAllFilmsOfMinLength = function (length) {
  return this.films.every((film) => {
    return film.length >= length;
  });
};

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
};

// Extension:

Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter((film) => {
    return film[property] === value;
  });
};








module.exports = Cinema;
