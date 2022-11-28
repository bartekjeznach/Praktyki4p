const SortIsAction = async() => {
    const genreAction = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=28")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Action movies</h1>")
    document.getElementById("box2").innerHTML="";
    for (const video of genreAction) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }

}
export default SortIsAction();
//
const SortIsAdventure = async() => {
    const genreAdventure = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=12")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Adventure movies</h1>")
    document.getElementById("box2").innerHTML="";
    for (const video of genreAdventure) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}
//
const SortIsAnimation = async() => {
    const genreAnimation = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=16")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Animation movies</h1>")
    document.getElementById("box2").innerHTML="";
    for (const video of genreAnimation) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}
//
const SortIsComedy = async() => {
    const genreComedy = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=35")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Comedy movies</h1>")
    document.getElementById("box2").innerHTML="";
    for (const video of genreComedy) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}
//
const SortIsCrime = async() => {
const genreCrime = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=80")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Crime movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreCrime) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

//
const SortIsDocumentary = async() => {
const genreDocumentary = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=99")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Documentary movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreDocumentary) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

//
const SortIsDrama = async() => { 
    const genreDrama = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=18")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Drama movies</h1>")
    document.getElementById("box2").innerHTML="";
    document.getElementById("sorthehe").innerHTML = ("<center><input class='sortbutton' type='button' value='Popularity' id='pop'> <input class='sortbutton' type='button' value='Release date▾' id='rdd'> <input class='sortbutton' type='button' value='Release date▴' id='rdu'>");
    for (const video of genreDrama) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }

}
//
const SortIsFamily = async() => {
const genreFamily = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=10751")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Family movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreFamily) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsFantasy = async() => {
const genreFantasy = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=14")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Fantasy movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreFantasy) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsHistory = async() => {
const genreHistory = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=36")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>History movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreHistory) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsHorror = async() => {
const genreHorror = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=27")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Horror movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreHorror) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsMusic = async() => {
const genreMusic = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=10402")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Music movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreMusic) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsMystery = async() => {
const genreMystery = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=9648")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Mystery movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreMystery) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsRomance = async() => {
const genreRomance = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=10749")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Romance movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreRomance) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsScienceFiction = async() => {
const genreScienceFiction = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=878")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Science Fiction movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreScienceFiction) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsTVMovie = async() => {
const genreTVMovie = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=10770")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>TV Movie movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreTVMovie) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsThriller = async() => {
const genreThriller = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=53")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Thriller movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreThriller) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsWar = async() => {
const genreWar = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=10752")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>War movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreWar) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}

const SortIsWestern = async() => {
const genreWestern = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=37")).json()).results;
let counter = 0;
document.getElementById("box1").innerHTML = ("<h1>Western movies</h1>")
document.getElementById("box2").innerHTML="";
for (const video of genreWestern) {
    if (counter == 16) {
        break;
    }
    document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
    counter++;
}
}