const tweetForm = document.getElementById("tweetForm")
const tweetsContainer = document.querySelector("#tweets")

tweetForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const userNameInput = document.getElementById("username")
    const tweetInput = document.getElementById("tweet")

    const username = userNameInput.value
    const tweetContent = tweetInput.value
    const timestamp = getTimestamp()
    
    const tweetElement = document.createElement("div")
    tweetElement.classList.add("tweet")
    tweetElement.innerHTML = `<p><strong>${username}:</strong> ${tweetContent} 
    <span class="timestamp">${timestamp}</span>
    <button class="delete-button">Delete</button>
    </p>`

    tweetsContainer.insertBefore(tweetElement, tweetsContainer.firstChild)
    userNameInput.value = ""
    tweetInput.value = ""
    const deleteButton = tweetElement.querySelector('.delete-button')
    deleteButton.addEventListener('click', function() {
        tweetsContainer.removeChild(tweetElement)
    })
    
})

function getTimestamp() {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`
}