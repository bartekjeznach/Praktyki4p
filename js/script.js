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
        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }

}
//otwarcie strony danego filmu
const getMovie = async (id) => {

    fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US")
    .then((response) => response.json())
    .then((data) => {
    document.getElementById("box1").innerHTML = ("<h1>" + data.original_title + "</h1>")
    document.getElementById("box1").innerHTML += ("<div class='ext2'><img src='https://image.tmdb.org/t/p/w500" + data.backdrop_path + "'><br>" + data.original_title + "<br> <h6>"+data.tagline+
    "</h6> </div> <div class='ext3'>Genre: " + data.genres[0].name+ ", "+data.genres[1].name +", "+data.genres[2].name +"<br>Release date: "+data.release_date+ "<br>Runtime: "+
    data.runtime+"min"+
    "</div><div class='ext4'><span class='overview'>"+data.overview+"</span></div>");
    document.getElementById("box2").remove();  
    })
    const xd = fetch("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US")
    .then((response) => response.json())
    .then((response) => {
        document.getElementById("box1").innerHTML += (response.crew.filter(arr => arr.job == "Director")[0].name)
    })
    
    
        
    
  };

//wypisanie po genre
const genreIsAction = async () => {
    const genreAction = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr => arr.genre_ids.includes(28));
    let counter = 0;
    document.getElementById("box2").innerHTML = ("<h1>Action movies</h1>")
    for (const video of genreAction) {
        if (counter == 4) {
            break;
        }
        document.getElementById('box2').innerHTML += ("<div class='ext'><img onclick='getMovie(" + video.id + ")' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }

}
//wypisanie filmow po keyword
const searchKeyword = async () => {
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