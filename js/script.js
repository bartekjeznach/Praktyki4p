//(async () => {
//    console.log((await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json())
//        .results.forEach(element => {
//            console.log(element.original_title)
//        }));
//})();

//START STRONY
//wypisanie popularnych filmow
const mostPopularMovies = async () => {
    const popular = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Most popular movies</h1>")
    for (const video of popular) {
        if (counter == 4) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br> <p class='title'>" + video.original_title + "</p></div>");
        counter++;
    }

}
//otwarcie strony danego filmu
const getMovie = async (id) => {
    fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US")

        .then((response) => response.json())
        .then((data) => {
            var vote_average = Math.round(data.vote_average * 10) / 10;
            document.getElementById("box1").innerHTML = ("<h1>" + data.original_title + "</h1>" + "<div id='vote'> <p class='votetext'><b>" + vote_average + "</p> </b> <br>(" + data.vote_count + ")</div>")
            document.getElementById("box1").innerHTML += ("<div class='ext2'><a class='odnosnik' href='https://www.themoviedb.org/movie/" + id + "'><img class='backdrop' src='https://image.tmdb.org/t/p/w500" +
                data.backdrop_path + "'></a><br>" + "<p class='titletag'>" + data.original_title + "<br> </p> <h6>" +
                data.tagline + "</h6> </div> <div class='ext3'>" + "<p class='hehe'>Genre:</p> <br> <p class='hehe2'>" +
                data.genres[0].name + ", " + data.genres[1].name + "</p> <hr class='hr1'> <br>" + "<p class='hehe'>Release date:</p> <br> <p class='hehe2'>" +
                data.release_date + "</p> <hr class='hr1'> <br>" + " <p class='hehe'>Runtime: </p><br><p class='hehe2'> " +
                data.runtime + "min" + "</p> <hr class='hr1'> <br> " + "<p class='heheD'>Director:</p>" + "<div id='director'></div>" + "</div><div class='ext4'><span class='overview'> " +
                data.overview + "</span></div>" + "<div id = 'actors'></div>");
            document.getElementById("box2").remove();
            document.getElementById("sorthehe").innerHTML = "";
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
            for (let counter = 0; counter <= 8; counter++) {
                document.getElementById("actors").innerHTML += ("<div class = 'actors'><p class = 'actor_name'>" + actor.cast[counter].name + "</p> <img class='actorimg' src='https://image.tmdb.org/t/p/w500" + actor.cast[counter].profile_path + "'></div>");
            }
        })
};

//wypisanie po genre
const upcomingMovies = async () => {
    const genreAction = (await (await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results;
    let counter = 0;
    document.getElementById("box2").innerHTML = ("<h1>Upcoming movies</h1>")
    for (const video of genreAction) {
        if (counter == 8) {
            break;
        }
        document.getElementById('box2').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br><p class='title'>" + video.original_title + "</p></div>");
        counter++;
    }

}
//wypisanie filmow po keyword
const searchKeyword = async () => {
    var word = keyword.value;
    if (word == "" || word == " ") {
        alert("Type the keyword in!")
    }
    else {
        console.log(word);
        const search = (await (await fetch("https://api.themoviedb.org/3/search/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&query=" + word + "&page=1&include_adult=false")).json()).results;
        let counter = 0;
        document.getElementById("box1").innerHTML = ("<h1>You was seaching for: " + word + "</h1>");
        document.getElementById("box2").innerHTML = "";
        for (const video of search) {
            if (counter == 8) {
                break;
            }
            document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
            counter++;
        }
    }

}

mostPopularMovies();
upcomingMovies();

//Sortowanie
const SortIsAction = async () => {
    const genreAction = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=28")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Action movies</h1>")
    document.getElementById("sorthehe").innerHTML = ("<center><input class='sortbutton' type='button' value='sort by: Popularity' id='pop' onclick='ActionSort()'>");
    document.getElementById("box2").innerHTML = "";
    for (const video of genreAction) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }

}
//
const SortIsAdventure = async () => {
    const genreAdventure = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=12")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Adventure movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreAdventure) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}
//
const SortIsAnimation = async () => {
    const genreAnimation = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=16")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Animation movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreAnimation) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}
//
const SortIsComedy = async () => {
    const genreComedy = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=35")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Comedy movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreComedy) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}
//
const SortIsCrime = async () => {
    const genreCrime = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=80")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Crime movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreCrime) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

//
const SortIsDocumentary = async () => {
    const genreDocumentary = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=99")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Documentary movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreDocumentary) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

//
const SortIsDrama = async () => {
    const genreDrama = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=18")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Drama movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreDrama) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }

}
//
const SortIsFamily = async () => {
    const genreFamily = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=10751")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Family movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreFamily) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsFantasy = async () => {
    const genreFantasy = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=14")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Fantasy movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreFantasy) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsHistory = async () => {
    const genreHistory = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=36")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>History movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreHistory) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsHorror = async () => {
    const genreHorror = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=27")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Horror movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreHorror) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsMusic = async () => {
    const genreMusic = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=10402")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Music movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreMusic) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsMystery = async () => {
    const genreMystery = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=9648")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Mystery movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreMystery) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsRomance = async () => {
    const genreRomance = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=10749")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Romance movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreRomance) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsScienceFiction = async () => {
    const genreScienceFiction = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=878")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Science Fiction movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreScienceFiction) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsTVMovie = async () => {
    const genreTVMovie = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=10770")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>TV Movie movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreTVMovie) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsThriller = async () => {
    const genreThriller = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=53")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Thriller movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreThriller) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsWar = async () => {
    const genreWar = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=10752")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>War movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreWar) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

const SortIsWestern = async () => {
    const genreWestern = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=2&with_genres=37")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Western movies</h1>")
    document.getElementById("box2").innerHTML = "";
    document.getElementById("sorthehe").innerHTML = "";
    for (const video of genreWestern) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}

//Sortowanie 2 hehe wery draj kod
const ActionSort = async () => {
    const genreWestern = (await (await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>Action movies by popularity</h1>")
    document.getElementById("box2").innerHTML = "";
    for (const video of genreWestern) {
        if (counter == 16) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.poster_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}
const saveMovie = () => {
    let tit = title.value;
    let dir = ddirector.value;
    let date = data.value;
    let gen = genre.value;
    let cas = cast.value;
    let overview = over.value;

    if (tit == "" || tit == " ") {
        alert("Every movie needs a title!");
    }
    else if (dir == "" || dir == " ") {
        alert("Every movie needs a director!");
    }
    else if (date == "" || date == " ") {
        alert("Release date, maybe?");
    }
    else if (gen == "" || gen == " ") {
        alert("Every movie needs a genre!");
    }
    else if (cas == "" || cas == " ") {
        alert("Whos playing in the movie?");
    }
    else if (overview == "" || overview == " ") {
        alert("Tell me something about the movie!");
    }
    else {
        let text = "Title: " + tit + "\n" + "Director: " + dir + "\n" + "Release date: " + date + "\n" + "Genre: " + gen + "\n" + "Cast: " + cas + "\n" + "Overview: " + overview;
        console.log(text);
        var textToSaveAsBlob = new Blob([text], { type: "text/plain" });
        var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);

        var downloadLink = document.createElement("a");
        downloadLink.download = 'addedMovies';
        downloadLink.innerHTML = "Download File";
        downloadLink.href = textToSaveAsURL;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);

        downloadLink.click();
    }
}

