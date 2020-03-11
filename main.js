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