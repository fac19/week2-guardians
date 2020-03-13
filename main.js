// MOVIE API
function fetchRequest(movieName) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=62b96ba98a33d55afab20dba768c38e2&query=${movieName}`)
        .then(response => {
            if (response.ok !== true) throw new Error(response.status)
            return response.json()
        })
        .then(data => {
            let firstResult = data.results[0]; //pulls up the most recent movie by targetting the first object
            // THIS IS OUR CALLBACK. We are calling the putInTheDom function and passing our newly created 
            // object in as an arguement to be manipulated in the DOM in a separate function
            // so we don't have to do it in the then promise
            // We thought it would be easier to pass through this information as an object, 
            // rather than an array and extract the information we require
            // console.log(firstResult);
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
function putInTheDom(movieObject) {
    // Dom Manipulation
    const getTitle = document.querySelector('.section-movie-db__title');
    const getPoster = document.querySelector('.section-movie-db__poster');
    const getDate = document.querySelector('.section-movie-db__date');
    const getSynopsis = document.querySelector('.section-movie-db__info');

    // Give HTML the values from fetch
    getTitle.textContent = movieObject.title;
    getPoster.src = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieObject.movie_img}`; // 'https://images-na.ssl-images-amazon.com/images/I/716CVK84R6L._SX295_BO1,204,203,200_.gif';
    getDate.textContent = movieObject.release_date;
    getSynopsis.textContent = movieObject.synopsis;
}

// REDDIT API
const redditBox = document.querySelector('#reddit-box') // container that comments go in

function fetchReddit(searchTerm) {
    fetch(`https://api.pushshift.io/reddit/search/comment?q=${searchTerm}&subreddit=movies`) // gets api data according to argument it is called with
        .then(res => res.json()) // converts to JSON
        .then(res => {// returns an object contining one key-value pair. Key is called data, and value is an array.
            res.data.forEach(element => { // for each element in the array we do two things.
                comment = makeRedditComment(element.author, element.body, element.created_utc); // firstly we make a html element called 'blockquote' (see below)
                redditBox.appendChild(comment); // secondly we add that element onto the redditBox container
            });
        })
}

function makeRedditComment(authorContent, commentContent, unixTimeContent) {
    let dateContent = new Date(unixTimeContent * 1000);
    dateContent = [dateContent.getDate(), dateContent.getMonth(), dateContent.getFullYear()].join("/");
    
    let container = makeNode('BLOCKQUOTE', 'reddit-box__post');
    container.appendChild(makeNode('P', 'reddit-box__comment', commentContent));

    let redditPostFooter = makeNode('FOOTER', 'reddit-box__footer');
    redditPostFooter.appendChild(makeNode('P', 'reddit-box__time', dateContent));
    redditPostFooter.appendChild(makeNode('CITE', '.reddit-box__author', authorContent));


    container.appendChild(redditPostFooter);
    return container;
}

function makeNode(type, className, content) { // this makes a node, gives it a class, adds text content to the class, and then it returns the node so that the function that calls makeNode can use the node from makeNode. Sometimes, we want to use this function to create a node that contains other nodes, rather than contains text. When we do that, we only pass it two arguments. This means that it treats content as undefined, so it doesn't assign any new content :)
    let node = document.createElement(type);
    node.classList.add(className);
    node.textContent = content;
    return node;
}

// SEARCH BAR 
let movieForm = document.querySelector("#movie-form");
let movieInput = document.querySelector("#movie-input");
let submitBtn = document.querySelector("#movie-submit");

submitBtn.addEventListener("click", submitMovie);

// Grabs movie from movie-input and passes it through the fetch
function submitMovie(event) {
    //Resets comment section, consider changing innerHTML as its not good prac.
    redditBox.innerHTML = "";

    event.preventDefault();
    // Call fetchReddit function and pass in movieInput as arguement
    fetchReddit(movieInput.value)
    // Call fetchRequest function and pass in movieInput as arguement
    fetchRequest(movieInput.value);
}












// !!!!!---------Learning, No need to review (please do not delete)-----------!!!!!


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