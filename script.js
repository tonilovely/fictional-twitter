// Add any interactivity here
// For example, you can add event listeners to the tweet button to open a tweet modal

document.addEventListener('DOMContentLoaded', function() {
    const tweetButton = document.querySelector('.tweet-button');
    tweetButton.addEventListener('click', function() {
        alert('Tweet button clicked!');
        // Add functionality to open tweet modal here
    });
});
