const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
//the method should loop through the films
//pick out the film titles and add them to an array
// return that arrau of film titles
  const titles = this.films.map((film) => film.title)
  //const foundFilm = []
  // for (const film of this.films){
  //   foundFilm.push(film.title)
  // }
  // return foundFilm
  return titles
};
module.exports = Cinema;
