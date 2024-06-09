document.addEventListener('DOMContentLoaded', () => {
    loadTweets();
    if (document.getElementById('replyButton')) {
        document.getElementById('replyButton').addEventListener('click', postReply);
    }
});

function loadTweets() {
    const tweets = [
        {
            id: 1,
            name: "Hanna Marin",
            username: "@HannaM",
            date: "September 1, 2010 10:15 AM",
            text: "Just got a new pair of shoes!",
            replies: [
                {name: "Emily Fields", username: "@EmilyF", date: "September 1, 2010 10:30 AM", text: "Nice shoes!"},
                {name: "Spencer Hastings", username: "@SpencerH", date: "September 1, 2010 10:45 AM", text: "Where did you get them?"}
            ],
            likes: 5,
            retweets: 1,
            bookmarks: 0
        },
        {
            id: 2,
            name: "Emily Fields",
            username: "@EmilyF",
            date: "September 1, 2010 10:30 AM",
            text: "Nice shoes!",
            replies: [],
            likes: 1,
            retweets: 0,
            bookmarks: 0
        }
    ];

    let tweetContainer = document.getElementById('tweets');
    tweetContainer.innerHTML = '';

    tweets.forEach(tweet => {
        let tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');
        tweetDiv.innerHTML = `
            <div class="profile-pic"><img src="https://via.placeholder.com/50" alt="Profile Picture"></div>
            <div class="tweet-content">
                <div class="tweet-header">
                    <p class="name">${tweet.name}</p>
                    <p class="username">${tweet.username}</p>
                    <p class="date">${tweet.date}</p>
                </div>
                <p class="tweet-text">${tweet.text}</p>
                <div class="tweet-footer">
                    <span>${tweet.likes} Likes</span>
                    <span>${tweet.retweets} Retweets</span>
                    <span>${tweet.bookmarks} Bookmarks</span>
                </div>
            </div>
        `;
        tweetDiv.addEventListener('click', () => openTweet(tweet));
        tweetContainer.appendChild(tweetDiv);
    });
}

function openTweet(tweet) {
    window.location.href = `tweet.html?id=${tweet.id}`;
}

function postReply() {
    const replyInput = document.getElementById('replyInput');
    const replyText = replyInput.value;
    if (replyText) {
        const replyDiv = document.createElement('div');
        replyDiv.classList.add('tweet');
        replyDiv.innerHTML = `
            <div class="profile-pic"><img src="https://via.placeholder.com/50" alt="Profile Picture"></div>
            <div class="tweet-content">
                <div class="tweet-header">
                    <p class="name">You</p>
                    <p class="username">@You</p>
                    <p class="date">${new Date().toLocaleString()}</p>
                </div>
                <p class="tweet-text">${replyText}</p>
                <div class="tweet-footer">
                    <span>0 Likes</span>
                    <span>0 Retweets</span>
                    <span>0 Bookmarks</span>
                </div>
            </div>
        `;
        document.getElementById('tweet').appendChild(replyDiv);
        replyInput.value = '';
    }
}
