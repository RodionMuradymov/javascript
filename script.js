const numberOffilms = prompt("Сколько фильмов вы уже посмотрели","");
const personalMovieDB = {
    count: numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
const film = prompt("Один из последних просмотренных фильмов","");
const revision = prompt("На сколько вы оцените его?","");
const movies = {
    film: revision
};
console.log(movies);
