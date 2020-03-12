let movieForm = document.querySelector("#movie-form");
let movieInput = document.querySelector("#movie-input");
let submitBtn = document.querySelector("#movie-submit");
//submitBtn.preventDefault();

submitBtn.addEventListener("click", submitMovie);

function submitMovie(event) {  
    event.preventDefault();
    // Call fetchReddit function and pass in movieInput as arguement
    fetchReddit(movieInput.value)
    // console.log(movieInput.value);

    fetchRequest(movieInput.value);   
    
    // console.log(event.target);
}

