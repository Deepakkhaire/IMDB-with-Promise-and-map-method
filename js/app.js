let cl = console.log;

const imgUrl="https://image.tmdb.org/t/p/w1280";
 
var moviesInfo = document.getElementById("moviesInfo");

const templating = (newArr) => {
    let result = "";
    newArr.map(function(movie){
        result += `<div class="col-lg-3 col-md-6 col-xs-12">
        <div class="card mt-4 mb-4">
            <figure class="moviecard">
            <img src="${imgUrl}${movie.backdrop_path}" alt="${movie.title}" title="${movie.title}">
                <figcaption class="text-white p-2 bg-dark">
                    <div class="row">
                        <div class="col-sm-10">
                            <h5>
                                ${movie.title}
                            </h5>
                        </div>
                        <div class="col-sm-2">
                            ${movie.vote_average}
                        </div>
                    </div>
                </figcaption>
                <div class="overview bg-white p-4">
                    <h4>overview :</h4>
                    <p>${movie.overview}</p>
                </div>
            </figure>
        </div>
    </div>`;
    })
    
    moviesInfo.innerHTML = result;
}
const myMovies = () => {
   return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let result = Math.random() >= .3 ? true : false;
            if(result){
                resolve("Here..!! You will get the latest movies")
            } else{
                reject ("Something went wrong..!! Please try again")
            }
        }, 1000);
   })
}
myMovies() 
    .then(res => {
        Swal.fire({
            icon: 'success',
            title: res,
            showConfirmButton: false,
            timer: 3000
        })
        templating(movieArr);
    })   
    .catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err,
        })
    })