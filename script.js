const tweets = [
    {
        id: 1,
        name: "Hanna Marin",
        username: "@HannaM",
        text: "Just got a new pair of shoes!",
        profilePic: "https://via.placeholder.com/50",
        date: "September 1, 2010 10:15 AM",
        replies: [
            { name: "Emily Fields", username: "@EmilyF", text: "Nice shoes!", profilePic: "https://via.placeholder.com/50", date: "September 1, 2010 10:30 AM", likes: 1 },
            { name: "Spencer Hastings", username: "@SpencerH", text: "Where did you get them?", profilePic: "https://via.placeholder.com/50", date: "September 1, 2010 10:45 AM", likes: 1 }
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

const user = { name: "You", username: "@You", profilePic: "https://via.placeholder.com/50" };

function loadTweets() {
    const container = document.getElementById('tweets');
    tweets.forEach(tweet => {
        const tweetDiv = document.createElement('div');
        tweetDiv.className = 'tweet';
        tweetDiv.onclick = () => openTweet(tweet.id);

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
    });
}

function openTweet(id) {
    localStorage.setItem('currentTweet', id);
    window.location.href = 'tweet.html';
}

function loadTweetPage() {
    const tweetId = parseInt(localStorage.getItem('currentTweet'));
    const tweet = tweets.find(t => t.id === tweetId);

    if (tweet) {
        const tweetContainer = document.getElementById('tweet');
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

        tweetContainer.appendChild(profilePic);
        tweetContainer.appendChild(tweetContent);

        const repliesContainer = document.getElementById('replies');
        tweet.replies.forEach(reply => {
            const replyDiv = document.createElement('div');
            replyDiv.className = 'tweet';

            const replyProfilePic = document.createElement('div');
            replyProfilePic.className = 'profile-pic';
            const replyImg = document.createElement('img');
            replyImg.src = reply.profilePic;
            replyProfilePic.appendChild(replyImg);

            const replyContent = document.createElement('div');
            replyContent.className = 'tweet-content';

            const replyHeader = document.createElement('div');
            replyHeader.className = 'tweet-header';
            const replyName = document.createElement('h3');
            replyName.className = 'name';
            replyName.innerText = reply.name;
            const replyUsername = document.createElement('span');
            replyUsername.className = 'username';
            replyUsername.innerText = reply.username;
            const replyDate = document.createElement('span');
            replyDate.className = 'date';
            replyDate.innerText = reply.date;
            replyHeader.appendChild(replyName);
            replyHeader.appendChild(replyUsername);
            replyHeader.appendChild(replyDate);

            const replyText = document.createElement('p');
            replyText.className = 'tweet-text';
            replyText.innerText = reply.text;

            const replyFooter = document.createElement('div');
            replyFooter.className = 'tweet-footer';
            replyFooter.innerHTML = `
                💬 <span class="replies">0</span>
                🔁 <span class="retweets">0</span>
                ❤️ <span class="likes">${reply.likes}</span>
                📌 <span class="bookmarks">0</span>
            `;

            replyContent.appendChild(replyHeader);
            replyContent.appendChild(replyText);
            replyContent.appendChild(replyFooter);

            replyDiv.appendChild(replyProfilePic);
            replyDiv.appendChild(replyContent);

            repliesContainer.appendChild(replyDiv);
        });
    }
}

function addReply() {
    const tweetId = parseInt(localStorage.getItem('currentTweet'));
    const tweet = tweets.find(t => t.id === tweetId);

    const replyText = document.getElementById('replyText').value;
    if (replyText.trim() !== '') {
        const newReply = {
            name: user.name,
            username: user.username,
            text: replyText,
            profilePic: user.profilePic,
            date: new Date().toLocaleString(),
            likes: 0
        };
        tweet.replies.push(newReply);
        localStorage.setItem('tweets', JSON.stringify(tweets));
        loadTweetPage();
    }
}

if (document.getElementById('tweets')) {
    loadTweets();
} else if (document.getElementById('tweet')) {
    loadTweetPage();
}
