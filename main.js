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


fetchReddit("kat");