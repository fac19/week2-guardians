function fetchRequest(movieName){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=62b96ba98a33d55afab20dba768c38e2&query=${movieName}`)
    .then(response => {
        if (response.ok !== true) throw new Error(response.status)
        return response.json()
    })
    // .then(data => console.log(data.results[0]))
    .then(data => {
        let firstResult = data.results[0]; //pulls up the most recent movie by targetting the first object
        // THIS IS OUR CALLBACK. We are calling the putInTheDom function and passing our newly created 
        // object in as an arguement to be manipulated in the DOM in a separate function
        // so we don't have to do it in the then promise
        // We thought it would be easier to pass through this information as an object, 
        // rather than an array and extract the information we require
        putInTheDom({
            title: firstResult.original_title,
            movie_img: firstResult.poster_path,
            release_date: firstResult.release_date,
            synopsis: firstResult.overview
        });
    })
    .catch(error => console.log(error))
};

//Created a separate function for DOM manipulation to make code easier to read
function putInTheDom(movieObject){
    // Here we'll manipulate the DOM
    console.log(movieObject);
}

fetchRequest("blade runner");

function fetchReddit(searchTerm) {
    fetch(`https://api.pushshift.io/reddit/search/comment?q=${searchTerm}`)
        .then(res => res.json())
        .then(res => res.data.map(i => {
            return {
                user: i.author,
                date: i.created_utc,
                comment: i.body
            }
        }))

}

fetchReddit("kat");

// Create a variable which will grab the VALUE in the search bar
// const getUserInput = // add event listener here


// At some point we want to pass in an ARGUEMENT to the fetch GET request. The arguement will be our movie name
// that we grabbed from the search bar.

// This is the GET fetch request from the real-world-fetch workshop
// fetch(`https://api.themoviedb.org/3/search/movie?api_key=62b96ba98a33d55afab20dba768c38e2&query=${arguement}`)
//     .then(response => {
//         // Our first promise. If our our response is not ok throw an ERROR
//         // Return the response and turn it into an OBJECT
//         if (response.ok !== true) throw new Error(response.status)
//         return response.json();
//     })
//     // Then console log the OBJECT 
//     .then(data => console.log(data))
//     // If it messes up catch it and console the error
//     .catch(error => console.error(error) 




// This is a GREAT example

// function fetchRequest(movieName){
//     let object = {};
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=62b96ba98a33d55afab20dba768c38e2&query=${movieName}`) //replace Jack Reacher with parameter
//     .then(response => {
//         if (response.ok !== true) throw new Error(response.status)
//         return response.json()
//     })
//     // .then(data => console.log(data.results[0]))
//     .then(data => {
//         object = data;
//         let firstResult = data.results[0];
//         putInTheDom({
//             title: firstResult.original_title,
//             movie_img: firstResult.poster_path,
//             release_date: firstResult.release_date,
//             synopsis: firstResult.overview
//         });
//     })
//     .catch(error => console.log(error))

//     setTimeout(() => {
//         console.log(object)
//     }, 1000);

// };