const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles',function(){
    //GIVEN i have a cinema
    // and it has some film in it moonlight,bladeRunner,dunkirk,blackPanther,trainspotting
    //WHEN we get the list of just the film titles
    const actual = cinema.filmTitles()//should give me an array of just film title
    //THEN we shoul have an array of strings with all the titles of the films in it
    assert.deepStrictEqual(actual, ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'] )
  });

  it('should be able to find a film by title', function(){
    //GIVEN we have an array of films in cinema and on of them is called "Dunkirk"
    //WHEN we want to get the whole object back for the "Dunkirk" film - dinfFilmByTitle("Dunkkirk")
    const foundFilm = cinema.findByTitle('Dunkirk')
    //THEN we should get back an object for the dunkirk film
    assert.deepStrictEqual(foundFilm, dunkirk)
  });
  it('should be able to filter films by genre', function () {
    const actual = cinema.filmsByGenre('drama');
    // Extension:
    // const actual = cinema.filmsByProperty('genre', `drama`);
    const expected = [moonlight, trainspotting];
    assert.deepStrictEqual(actual, expected);
  });

  it('should return true if there are some films from a particular year', function () {
    const actual = cinema.hasFilmsFromYear(2018);
    assert.strictEqual(actual, true);
  });

  it('should return false if there there are no films from a particular year', function () {
    const actual = cinema.hasFilmsFromYear(2000);
    assert.strictEqual(actual, false);
  });

  it('should return true if every film is over a particular length', function () {
    const actual = cinema.areAllFilmsOfMinLength(60);
    assert.strictEqual(actual, true);
  });

  it('should be able to calculate total running time of all films', function () {
    const actual = cinema.totalRunningTime();
    assert.strictEqual(actual, 622);
  });


  it('should be able to filter films by year', function () {
    const actual = cinema.filmsByProperty('year', 2017);
    const expected = [bladeRunner, dunkirk, trainspotting];
    assert.deepStrictEqual(actual, expected);
  });
});
