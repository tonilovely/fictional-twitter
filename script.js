const tweets = [
    {
        id: 1,
        name: "Hanna Marin",
        username: "@HannaM",
        text: "Just got a new pair of shoes!",
        profilePic: "https://via.placeholder.com/50",
        date: "September 1, 2010 10:15 AM",
        replies: [
            { name: "Emily Fields", username: "@EmilyF", text: "Nice shoes!" },
            { name: "Spencer Hastings", username: "@SpencerH", text: "Where did you get them?" }
        ],
        retweets: 1,
        likes: 5,
        bookmarks: 0
    },
    {
        id: 2,
        name: "Spencer Hastings",
        username: "@SpencerH",
        text: "Busy with my school projects.",
        profilePic: "https://via.placeholder.com/50",
        date: "September 2, 2010 2:30 PM",
        replies: [],
        retweets: 0,
        likes: 3,
        bookmarks: 0
    },
    {
        id: 3,
        name: "Emily Fields",
        username: "@EmilyF",
        text: "Feeling nostalgic today.",
        profilePic: "https://via.placeholder.com/50",
        date: "September 3, 2010 9:00 AM",
        replies: [],
        retweets: 2,
        likes: 8,
        bookmarks: 0
    },
    {
        id: 4,
        name: "Aria Montgomery",
        username: "@AriaM",
        text: "Reading a new book.",
        profilePic: "https://via.placeholder.com/50",
        date: "September 4, 2010 4:45 PM",
        replies: [],
        retweets: 1,
        likes: 4,
        bookmarks: 0
    }
];

let tweetIndex = 0;

function loadTweets() {
    const container = document.getElementById('tweets');

    for (let i = 0; i < 5; i++) {
        if (tweetIndex >= tweets.length) break;

        const tweet = tweets[tweetIndex];
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
            💬 <span class="replies">${tweet.replies.length}</span>
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

        tweetIndex++;
    }
}

function showTweetDetails(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    if (tweet) {
        localStorage.setItem('selectedTweet', JSON.stringify(tweet));
        window.location.href = 'tweet.html';
    }
}

function loadTweetDetails() {
    const tweet = JSON.parse(localStorage.getItem('selectedTweet'));
    if (tweet) {
        const tweetDetailsDiv = document.getElementById('tweet-details');

        const tweetDiv = document.createElement('div');
        tweetDiv.className = 'tweet';

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
            ❤️ <span class="likes">${tweet.likes}</span>
            🔁 <span class="retweets">${tweet.retweets}</span>
            💬 <span class="replies">${tweet.replies.length}</span>
            📌 <span class="bookmarks">${tweet.bookmarks}</span>
        `;

        tweetContent.appendChild(tweetHeader);
        tweetContent.appendChild(tweetText);
        tweetContent.appendChild(tweetFooter);

        tweetDiv.appendChild(profilePic);
        tweetDiv.appendChild(tweetContent);

        tweetDetailsDiv.appendChild(tweetDiv);

        const repliesDiv = document.getElementById('replies');
        tweet.replies.forEach(reply => {
            const replyDiv = document.createElement('div');
            replyDiv.className = 'reply';

            const replyProfilePic = document.createElement('img');
            replyProfilePic.src = "https://via.placeholder.com/50";
            replyDiv.appendChild(replyProfilePic);

            const replyContent = document.createElement('div');
            replyContent.className = 'reply-content';

            const replyHeader = document.createElement('div');
            replyHeader.className = 'reply-header';
            const replyName = document.createElement('span');
            replyName.className = 'name';
            replyName.innerText = reply.name;
            const replyUsername = document.createElement('span');
            replyUsername.className = 'username';
            replyUsername.innerText = reply.username;
            replyHeader.appendChild(replyName);
            replyHeader.appendChild(replyUsername);

            const replyText = document.createElement('p');
            replyText.className = 'reply-text';
            replyText.innerText = reply.text;

            replyContent.appendChild(replyHeader);
            replyContent.appendChild(replyText);

            replyDiv.appendChild(replyContent);

            repliesDiv.appendChild(replyDiv);
        });
    }
}

function postReply() {
    const tweet = JSON.parse(localStorage.getItem('selectedTweet'));
    const replyInput = document.getElementById('reply-input').value;
    if (replyInput.trim() !== '') {
        tweet.replies.push({
            name: "You",
            username: "@You",
            text: replyInput
        });
        localStorage.setItem('selectedTweet', JSON.stringify(tweet));
        loadTweetDetails();
    }
}

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadTweets();
    }
});

if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    loadTweets(); // Initial load of tweets
} else if (window.location.pathname.includes('tweet.html')) {
    loadTweetDetails(); // Load tweet details when on tweet.html
}
