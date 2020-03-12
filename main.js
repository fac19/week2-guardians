// MOVIE API
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
function putInTheDom(movieObject){
    // Here we'll manipulate the DOM
    console.log(movieObject);
    const getTitle = document.querySelector('.section-movie-db__title');
    // console.log(getTitle);
    const getPoster = document.querySelector('.section-movie-db__poster');
    // console.log(getPoster);
    const getDate = document.querySelector('.section-movie-db__date');
    // console.log(getDate);
    const getSynopsis = document.querySelector('.section-movie-db__info');
    // console.log(getSynopsis);

    getTitle.textContent = movieObject.title;
    getPoster.src = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movieObject.movie_img}`  // 'https://images-na.ssl-images-amazon.com/images/I/716CVK84R6L._SX295_BO1,204,203,200_.gif';
    // console.log(getPoster.src);
    getDate.textContent = movieObject.release_date;
    getSynopsis.textContent = movieObject.synopsis;
    
}
// fetchRequest("blade runner");


// REDDIT API
const redditBox = document.querySelector('#reddit-box') // container that comments go in

function fetchReddit(searchTerm) {
    fetch(`https://api.pushshift.io/reddit/search/comment?q=${searchTerm}`) // gets api data according to argument it is called with
        .then(res => res.json()) // converts to JSON
        .then(res => { // returns an object contining one key-value pair. Key is called data, and value is an array.
            res.data.forEach(element => { // for each element in the array we do two things.
                comment = makeRedditComment(element.author, element.body, element.created_utc); // firstly we make a html element called 'blockquote' (see below)
                redditBox.appendChild(comment); // secondly we add that element onto the redditBox container
            });
        })
}

function makeRedditComment(authorContent, commentContent, unixTimeContent) {
    let container = makeNode('BLOCKQUOTE', 'a-class');
    container.appendChild(makeNode('P', 'comment-class', commentContent));

    let footer = makeNode('FOOTER', 'footer-class');
    footer.appendChild(makeNode('P', 'time-class', unixTimeContent));
    footer.appendChild(makeNode('CITE', 'author-class', authorContent)); 


    container.appendChild(footer);
    return container;
}

function makeNode(type, className, content) { // this makes a node, gives it a class, adds text content to the class, and then it returns the node so that the function that calls makeNode can use the node from makeNode. Sometimes, we want to use this function to create a node that contains other nodes, rather than contains text. When we do that, we only pass it two arguments. This means that it treats content as undefined, so it doesn't assign any new content :)
    let node = document.createElement(type);
    node.classList.add(className);
    node.textContent = content;
    return node;
}












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