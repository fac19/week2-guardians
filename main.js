function fetchRequest(){
    fetch("https://api.themoviedb.org/3/search/movie?api_key=62b96ba98a33d55afab20dba768c38e2&query=Jack+Reacher") //replace Jack Reacher with parameter
    .then(response => {
        if (response.ok !== true) throw new Error(response.status)
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
};

fetchRequest();


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



















// function fetchReddit(searchTerm) {
//     fetch(`https://api.pushshift.io/reddit/search/comment?q=${searchTerm}`)
//         .then(res => res.json())
//         .then(res => res.data.map(i => {
//             return {
//                 user: i.author,
//                 date: i.created_utc,
//                 comment: i.body
//             }
//         }))

// }

// fetchReddit("kat");