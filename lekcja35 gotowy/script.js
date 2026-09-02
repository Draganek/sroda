const usernameError = document.getElementById('usernameError');
const tweetError = document.getElementById('tweetError');
const usernameInput = document.getElementById("username");
const tweetInput = document.getElementById("tweetContent");

document.addEventListener("DOMContentLoaded", function () {
    const tweetForm = document.getElementById("tweetForm");
    tweetForm.addEventListener("submit", function (event) {
        event.preventDefault()
        
        if (!usernameInput.value.trim()) {
            usernameError.style.display = 'block';
        } else {
            usernameError.style.display = 'none';
        }
        
        if (!tweetInput.value.trim()) {
            tweetError.style.display = 'block';
        } else {
            tweetError.style.display = 'none';
        }
    });
});

