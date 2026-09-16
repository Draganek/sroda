document.addEventListener('DOMContentLoaded', function () {
    const tweetForm = document.getElementById('tweetForm');
    const tweetsContainer = document.getElementById('tweets');
    const clearButton = document.getElementById("clearButton");

    function getTimestamp() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    tweetForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const tweetInput = document.getElementById('tweetContent');

        const username = usernameInput.value;
        const tweetContent = tweetInput.value;
        const timestamp = getTimestamp();

        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');

        if (username.toLowerCase() === 'trener') {
            tweetElement.style.backgroundColor = '#cce5ff';
        }

        tweetElement.innerHTML =
            `<p>
                <strong>${username}:</strong>
                ${tweetContent}
                <span class="timestamp">${timestamp}</span>
                <button class="delete-button" style="background-color: #ff6b6b;">Delete</button>
            </p>`;

        tweetsContainer.insertBefore(tweetElement, tweetsContainer.firstChild);

        const deleteButton = tweetElement.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            tweetsContainer.removeChild(tweetElement);
        });

        usernameInput.value = '';
        tweetInput.value = '';
    });

    clearButton.addEventListener('click', function () {
        while (tweetsContainer.firstChild) {
            tweetsContainer.removeChild(tweetsContainer.firstChild);
        }
    });
});
