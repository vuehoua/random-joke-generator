//.joke-text
const jokeText = document.querySelector('.joke-text');

//.new-joke-btn
const newJokeBtn = document.querySelector('.new-joke-btn');

//.tweet-btn 
const tweetBtn = document.querySelector('.tweet-btn');

//add 'click' eventListner to .new-joke-btn
newJokeBtn.addEventListener('click', getJoke);

getJoke(); //immediately call getJoke()

//getJoke() function definition
function getJoke(){
    //make an API request to https://icanhazdadjoke.com
    fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        // convert stringified JSON respsonse to Javascript Object
        return response.json(); 
    }).then(function(data) {
        // replace innerText of .joke-text with data.joke
        //extract the joke text
        const joke = data.joke;

        //do the replacement
        jokeText.innerText = joke;

        //make the tweetBtn (.tweet-btn link) work by setting href
        //create tweet link with joke
        const tweetLink = `https://twitter.com/share?text=${joke}`;

        //set the href
        tweetBtn.setAttribute('href', tweetLink);
    }).catch(function(error){
        //if error occured
        jokeText.innerText = "Ooops! Error";

        //removes the old href from .tweet-bin if found any 
        tweetBtn.removeAttribute('href');

        //console log the error
        console.log(error);
    });
}