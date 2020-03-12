# week-2-guardians Readme

Well hello there :)

Have you ever wanted to see what all the orks from Reddit are saying about a movie along with other facinating information such as the movie name and a catchy quote?

![Show me the money!](https://media1.giphy.com/media/9HQRIttS5C4Za/200.gif?cid=e1bb72ff49ac33ce53f2abf46d9a2c78f64e7baad5ec826d&rid=200.gif)

Well lucky for you now you can with the movie and Reddit comment hunter!

## Description
This web application will query [The Movie Database's API](https://developers.themoviedb.org/3/getting-started/introduction) whilst simultaneously flying over the dark and dangerous world of Reddit to reveal the latest brainless comments related to your movie.

![super cool](https://media3.giphy.com/media/jba8ucWVAhG9VcUkx9/200.gif?cid=e1bb72ff1e6a09e280bf2dcd3ecf9dcd4ab298821ed7cc8d&rid=200.gif)

---

## Methodology
We will take what you input in the search bar and make GET fetch requests to the Lords of the API. If they are in a good mood they may return some information. 

If not at least you'll see a glorious 404 error in the console.

Life is good.

They only ask that you look at one movie at a time. Greed is not an honourable trait in this realm.

---

### APIs
- [The Movie DataBase](https://developers.themoviedb.org/3/getting-started/introduction)
- [PushShift](https://pushshift.io/)

---

## Design Requirements
The design criteria can be found [here](https://github.com/foundersandcoders/coursebook/blob/master/week-2/project.md).

---

## Improvements
* Hide API key 
### Accessibility
* Add Aria labels
* Improve contrast for accessibility 
* Add descriptive label to button

### Functionality
* Instead of movie.input being past through the reddit fetch, maybe make it the movie DB title 

---

## Week 2 Learning Objectives
Week 2 Learning Objectives can be found [here](https://founders-and-coders.gitbook.io/coursebook/week-2/learning-outcomes)

---

## Agreed Numbering Tags

- E0 Simplest task 
- E1 Simple exercise 
- E3 Relatively easy challenge (~1/4 day)
- E5 Know how to do but takes some thinking (~1/2 day)
- E8 Challenging. May require a technical spike (~1day)

---

## Personal Learning Objectives

### Ivo
- Learn how to query APIs
- (maybe) learn about async functions


### Kat
- Understand how to use and implament API's
- Better at readinig the API Documentation
- Improve comunication skill when explaining code
- Feel comfortable with working remote (hangout, VS live share, slack)

### Lizzy
- Learn how the Fetch API works and use it to display the data we want
- Understand how to use the DOM to interact with the data pulled from the API
- Feel confident in using Github projects board to manage workflow
- Use BEM naming conventions

### Joe
- Make a post request to an API and parse through the data to display what we want
- Feel comfortable jumping in and out of workflows and into others code
- More comfortable using GIT :)

---

## Stop, Go, Continue
1. GO: BEM methodology
2. Follow 20/20/20
3. MVP !important 
4. Publish early
5. Swap frequently
6. Use github and git, including project board

---

## Core User Stories
User stories from project page shown in **bold**.

2. **See an interesting mashup of different data**
    - Display response from movie database API
    - Display response from reddit API
3. **Input information to change the displayed result**
    - Create form to take data for ```fetch``` post
    - Create post request to movie database API
    - Create post request to reddit API
5. **View the app on all of my devices**
7. I am a user who is hard of sight and very frustrated with the lack of features helping me use a webpage. 

---

## Stretch User Stories
User stories from project page shown in **bold**.

1. **As an impatient user, I want to see some indication that data is loading**
1. **As a confused user, I want to be told when something goes wrong**
3. After I have seen the information about the movie. I want to find out more information about the director.
4. After looking up the movie, I would like to use the results from the movie database to query the Reddit comments API
5. I would like to be able to see the trailer directly on the webpage
6. I would like to see reddit reviews for the movie I've searched for 
7. I would like to interact with the comments, i.e if links in the comments you can view them 
8. I want to search for reviews so that I can watch good watch movies

---

## Acceptance Criteria
1. Query at least two APIs using fetch
1. Dynamic content generated with JS
1. A clearly defined user journey, documented in your readme
1. A responsive, mobile-first design
1. Ensure your app is accessible to as many different users as possible
1. Try not to push API keys up to GitHub (since anyone can see them there)

---

## Planning
A summary of the APIs we thought were cool.

### The Movie DB 
Lots of info about all kinds of movies, a bit like IMDB
https://www.themoviedb.org/documentation/api

### r/redditdev,  pushshift.io
A tool for searching Reddit Comments and Submissions
https://pushshift.io/

https://www.reddit.com/r/redditdev/comments/3zug2y/a_tool_for_searching_reddit_comments_and/

### honorable mentions
- Guardians 
- Donald Trump Quotes
- Github
- Cat/animal gifs
- Pub finder
- Corp. jardon
- Eff off

---

## Original Plan
![](https://i.imgur.com/iFv1Olc.jpg)

---

## Mini Design Spikes
1. BEM 

