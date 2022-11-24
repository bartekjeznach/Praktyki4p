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
        if (counter == 5) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }

}
//test strony filmu
//const mostPopularMovies = async () => {
//    const popular = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results;
//    let counter = 0;
//    document.getElementById("box1").innerHTML = ("<h1>Most popular movies</h1>")
//    for (const video of popular) {
//        if (counter == 5) {
//            break;
//        }
//        const movieId=video.id;
//        document.getElementById('box1').innerHTML += ("<div class='ext'><img onclick='getMovie()' src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title +"<br>"+movieId+ "</div>");
//        counter++;
//    }
//
//}
//const getMovie = async () =>{
//    const gh = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr=>arr.id===mostPopularMovies(movieId));    
//    let counter = 0;
//    for (const video of gh) {
//        if (counter == 1) {
//            break;
//        }
//        document.getElementById("box1").innerHTML = ("<h1>"+video.original_title+"</h1>")
//        document.getElementById("box1").innerHTML += ("<div class='ext'><img src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
//        counter++;
//    }
//    document.getElementById("box2").remove();
//    
//}



//wypisanie po genre
const genreIsAction = async () => {
    const genreAction = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results.filter(arr=>arr.genre_ids.includes(28));
    let counter = 0;
    document.getElementById("box2").innerHTML = ("<h1>Action movies</h1>")
    for (const video of genreAction) {
        if (counter == 5) {
            break;
        }
        document.getElementById('box2').innerHTML += ("<div class='ext'><img src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }

}
//same zdjecia wypisuje 
//(async()=>{
//    console.log((await(await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json())
//    .results.forEach(element => {
//    document.body.innerHTML+=("<img src='https://image.tmdb.org/t/p/w500"+element.backdrop_path+"'>");
//    }));
//})();

//wypisanie filmow po keyword
const searchKeyword = async () => {
    var word = keyword.value;
    const search = (await (await fetch("https://api.themoviedb.org/3/search/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&query=" + word + "&page=1&include_adult=false")).json()).results;
    let counter = 0;
    document.getElementById("box1").innerHTML = ("<h1>You was seaching for: " + word + "</h1>")
    for (const video of search) {
        if (counter == 5) {
            break;
        }
        document.getElementById('box1').innerHTML += ("<div class='ext'><img src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
        counter++;
    }
}






mostPopularMovies();
genreIsAction();