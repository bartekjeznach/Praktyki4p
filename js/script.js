(async () => {
    console.log((await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json())
        .results.forEach(element => {
            console.log(element.original_title)
        }));
})();

const sad = async () => {
    const videos = (await (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&page=1")).json()).results;
    let counter = 0;
    for (const video of videos) {
        if (counter == 5) {
            break;
        }
        document.body.innerHTML += ("<div class='ext'><img src='https://image.tmdb.org/t/p/w500" + video.backdrop_path + "'><br>" + video.original_title + "</div>");
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

//sposob na wyszukiwanie po keyword sam fetch reszte z gory
//const search=(await(await fetch("https://api.themoviedb.org/3/search/movie?api_key=e794b942eda4421dec0b2efd522974f1&language=en-US&query="+keyword wpisany w pasku+"&page=1&include_adult=false")).json()).results;
