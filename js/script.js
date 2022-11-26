//(async () => {
//    console.log((await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json())
//        .results.forEach(element => {
//            console.log(element.original_title)
//        }));
//})();

//START STRONY
//wypisanie popularnych filmow
const mostPopularMovies = async() => {
        const popular = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results;
        let counter = 0;
        document.getElementById("box1").innerHTML = ("<h1>Most popular movies</h1>")
        for (const video of popular) {
            if (counter == 4) {
                break;
            }
            document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
            counter++;
        }

    }
    //otwarcie strony danego filmu
const getMovie = async(id) => {
    fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US")

    .then((response) => response.json())
        .then((data) => {
            document.getElementById("box1").innerHTML = ("<h1>" + data.original_title + "</h1>")
            document.getElementById("box1").innerHTML += ("<div class='ext2'><img src='https://image.tmdb.org/t/p/w500" + data.backdrop_path + "'><br>" + "<p class='titletag'>" + data.original_title + "<br> </p> <h6>" + data.tagline + "</h6> </div> <div class='ext3'>" + "<p class='hehe'>Genre:</p> <br> <p class='hehe2'>" + data.genres[0].name + ", " + data.genres[1].name + ", " + data.genres[2].name + "</p> <hr class='hr1'> <br>" + "<p class='hehe'>Release date:</p> <br> <p class='hehe2'>" + data.release_date + "</p> <hr class='hr1'> <br>" + " <p class='hehe'>Runtime: </p><br><p class='hehe2'> " + data.runtime + "min" + "</p> <hr class='hr1'> <br> " + "<p class='heheD'>Director:</p>" + "<div id='director'></div>" + "</div><div class='ext4'><span class='overview'>" + data.overview + "</span></div>" + "<div id = 'actors'></div>");
            document.getElementById("box2").remove();
            document.getElementById("sort").remove();
            document.getElementById("wrap").remove();
        })
    fetch("https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US")
        .then((response) => response.json())
        .then((response) => {
            document.getElementById("director").innerHTML += (response.crew.filter(arr => arr.job == "Director")[0].name)
        })



    fetch("https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US")
        .then((response) => response.json())
        .then((actor) => {
            for (let counter = 0; counter < 8; counter++) {
                document.getElementById("actors").innerHTML += ("<div class = 'actors'><p class = 'actor_name'>" + actor.cast[counter].name + "</p> <img class='actorimg' src='https://image.tmdb.org/t/p/w500" + actor.cast[counter].profile_path + "'></div>");
            }
        })


};

//wypisanie po genre
const genreIsAction = async() => {
        const genreAction = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(28));
        let counter = 0;
        document.getElementById("box2").innerHTML = ("<h1>Action movies</h1>")
        for (const video of genreAction) {
            if (counter == 8) {
                break;
            }
            document.getElementById('box2').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
            counter++;
        }

    }
    //wypisanie filmow po keyword
const searchKeyword = async() => {
    var word = keyword.value;
    const search = (await (await fetch("https://api.themoviedb.org/3/search/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&query=" + word + "&page=1&include_adult=false")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>You was seaching for: " + word + "</h1>")
    for (const video of search) {
        if (counter == 4) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}



mostPopularMovies();
genreIsAction();



//Sortowanie
const SortIsAction = async() => {
        const genreAction = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(28));
        let counter = 0;
        document.getElementById("box1").innerHTML = ("<h1>Action movies</h1>")
        document.getElementById("box2").remove();
        document.getElementById("sort").remove();
        for (const video of genreAction) {
            if (counter == 16) {
                break;
            }
            document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
            counter++;
        }

    }
    //
const SortIsAdventure = async() => {
        const genreAdventure = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(12));
        let counter = 0;
        document.getElementById("box1").innerHTML = ("<h1>Adventure movies</h1>")
        document.getElementById("box2").remove();
        document.getElementById("sort").remove();
        for (const video of genreAdventure) {
            if (counter == 16) {
                break;
            }
            document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
            counter++;
        }
    }
    //
const SortIsAnimation = async() => {
        const genreAnimation = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(16));
        let counter = 0;
        document.getElementById("box1").innerHTML = ("<h1>Animation movies</h1>")
        document.getElementById("box2").remove();
        document.getElementById("sort").remove();
        for (const video of genreAnimation) {
            if (counter == 16) {
                break;
            }
            document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
            counter++;
        }
    }
    //
const SortIsComedy = async() => {
        const genreComedy = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(35));
        let counter = 0;
        document.getElementById("box1").innerHTML = ("<h1>Comedy movies</h1>")
        document.getElementById("box2").remove();
        document.getElementById("sort").remove();
        for (const video of genreComedy) {
            if (counter == 16) {
                break;
            }
            document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
            counter++;
        }
    }
    //
const SortIsCrime = async() => {
    const genreCrime = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(80));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Crime movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreCrime) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

//
const SortIsDocumentary = async() => {
    const genreDocumentary = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids[0] == 99 || arr.genre_ids[1] == 99 || arr.genre_ids[2] == 99);
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Documentary movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreDocumentary) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

//
const SortIsDrama = async() => {
        const genreDrama = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(18));
        let counter = 0;
        document.getElementById("box1").innerHTML = ("<h1>Drama movies</h1>")
        document.getElementById("box2").remove();
        document.getElementById("sort").remove();
        for (const video of genreDrama) {
            if (counter == 16) {
                break;
            }
            document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
            counter++;
        }
    }
    //
const SortIsFamily = async() => {
    const genreFamily = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(10751));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Family movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreFamily) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsFantasy = async() => {
    const genreFantasy = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(14));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Fantasy movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreFantasy) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsHistory = async() => {
    const genreHistory = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(36));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>History movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreHistory) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsHorror = async() => {
    const genreHistory = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(27));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Horror movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreHorror) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsMusic = async() => {
    const genreMusic = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(10402));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Music movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreMusic) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsMystery = async() => {
    const genreMystery = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(9648));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Mystery movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreMystery) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsRomance = async() => {
    const genreRomance = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(10749));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Romance movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreRomance) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsScienceFiction = async() => {
    const genreScienceFiction = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(878));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Science Fiction movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreScienceFiction) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsTVMovie = async() => {
    const genreTVMovie = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(10770));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>TV Movie movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreTVMovie) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsThriller = async() => {
    const genreThriller = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(53));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Thriller movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreThriller) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsWar = async() => {
    const genreWar = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(10752));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>War movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreWar) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsWestern = async() => {
    const genreWestern = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(37));
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Western movies</h1>")
    document.getElementById("box2").remove();
    document.getElementById("sort").remove();
    for (const video of genreWestern) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}