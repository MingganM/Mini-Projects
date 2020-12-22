const memeGenerate = (function(){
    const button = document.querySelector('.meme__btn');
    const img = document.querySelector('.meme__img');
    const memeTitle = document.querySelector('.meme__title');
    const memeSubreddit = document.querySelector('.meme__subreddit');

    button.addEventListener('click',makeXHR);

    const newXHR = new XMLHttpRequest;
    function makeXHR(){

        newXHR.open('GET','https://meme-api.herokuapp.com/gimme',true);
        newXHR.onload = function(){
            if(this.status === 200){
                generate(this.responseText);
            }
        }
        newXHR.send();
    }

    function generate(responseText){
        let response = JSON.parse(responseText);
        img.src = response.url;
        memeTitle.textContent = `Title: ${response.title}`;
        memeSubreddit.textContent = `PostLink: ${response.postLink}`;
    }
})();