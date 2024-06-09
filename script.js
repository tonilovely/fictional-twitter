const tweets = [
    {
        id: 1,
        name: "Hanna Marin",
        username: "@HannaM",
        text: "Just got a new pair of shoes!",
        profilePic: "https://via.placeholder.com/50",
        date: "September 1, 2010 10:15 AM",
        replies: 2,
        retweets: 1,
        likes: 5,
        bookmarks: 0,
        replyIds: [2, 3]
    },
    {
        id: 2,
        name: "Emily Fields",
        username: "@EmilyF",
        text: "Nice shoes!",
        profilePic: "https://via.placeholder.com/50",
        date: "September 1, 2010 10:30 AM",
        replies: 0,
        retweets: 0,
        likes: 1,
        bookmarks: 0,
        replyIds: []
    },
    {
        id: 3,
        name: "Spencer Hastings",
        username: "@SpencerH",
        text: "Where did you get them?",
        profilePic: "https://via.placeholder.com/50",
        date: "September 1, 2010 10:45 AM",
        replies: 0,
        retweets: 0,
        likes: 1,
        bookmarks: 0,
        replyIds: []
    },
    {
        id: 4,
        name: "Aria Montgomery",
        username: "@AriaM",
        text: "Reading a new book.",
        profilePic: "https://via.placeholder.com/50",
        date: "September 4, 2010 4:45 PM",
        replies: 0,
        retweets: 1,
        likes: 4,
        bookmarks: 0,
        replyIds: []
    }
];

let tweetIndex = 0;

function loadTweets() {
    const container = document.getElementById('tweets');

    for (let i = 0; i < tweets.length; i++) {
        const tweet = tweets[i];
        const tweetDiv = document.createElement('div');
        tweetDiv.className = 'tweet';
        tweetDiv.onclick = () => showTweetDetails(tweet.id);

        const profilePic = document.createElement('div');
        profilePic.className = 'profile-pic';
        const img = document.createElement('img');
        img.src = tweet.profilePic;
        profilePic.appendChild(img);

        const tweetContent = document.createElement('div');
        tweetContent.className = 'tweet-content';

        const tweetHeader = document.createElement('div');
        tweetHeader.className = 'tweet-header';
        const name = document.createElement('h3');
        name.className = 'name';
        name.innerText = tweet.name;
        const username = document.createElement('span');
        username.className = 'username';
        username.innerText = tweet.username;
        const date = document.createElement('span');
        date.className = 'date';
        date.innerText = tweet.date;
        tweetHeader.appendChild(name);
        tweetHeader.appendChild(username);
        tweetHeader.appendChild(date);

        const tweetText = document.createElement('p');
        tweetText.className = 'tweet-text';
        tweetText.innerText = tweet.text;

        const tweetFooter = document.createElement('div');
        tweetFooter.className = 'tweet-footer';
        tweetFooter.innerHTML = `
            💬 <span class="replies">${tweet.replies}</span>
            🔁 <span class="retweets">${tweet.retweets}</span>
            ❤️ <span class="likes">${tweet.likes}</span>
            📌 <span class="bookmarks">${tweet.bookmarks}</span>
        `;

        tweetContent.appendChild(tweetHeader);
        tweetContent.appendChild(tweetText);
        tweetContent.appendChild(tweetFooter);

        tweetDiv.appendChild(profilePic);
        tweetDiv.appendChild(tweetContent);

        container.appendChild(tweetDiv);
    }
}

function showTweetDetails(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    if (tweet) {
        // Simulate redirect to tweet.html with tweetId as query parameter
        window.location.href = `tweet.html?id=${tweetId}`;
    }
}

window.addEventListener('load', () => {
    loadTweets();
});
