let movieForm = document.querySelector("#movie-form");
let movieInput = document.querySelector("#movie-input");
let submitBtn = document.querySelector("#movie-submit");
//submitBtn.preventDefault();

function submitMovie(event) {
    console.log(fetchReddit(movieInput.value));
    event.preventDefault();
    //console.log(event.target);

}

submitBtn.addEventListener("click", submitMovie);