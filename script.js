const tweets = [
    {
        id: 1,
        name: "Hanna Marin",
        username: "@HannaM",
        text: "Just got a new pair of shoes!",
        profilePic: "https://via.placeholder.com/50",
        date: "September 1, 2010 10:15 AM",
        replies: [
            { name: "Emily Fields", username: "@EmilyF", text: "Nice shoes!", profilePic: "https://via.placeholder.com/50" },
            { name: "Spencer Hastings", username: "@SpencerH", text: "Where did you get them?", profilePic: "https://via.placeholder.com/50" }
        ],
        retweets: 1,
        likes: 5,
        bookmarks: 0
    },
    // Add more tweets here
];

function loadTweets() {
    const container = document.getElementById('tweets');
    container.innerHTML = '';

    tweets.forEach(tweet => {
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
            💬 <span class="interaction replies">${tweet.replies.length}</span>
            🔁 <span class="interaction retweets" onclick="toggleRetweet(event, ${tweet.id})">${tweet.retweets}</span>
            ❤️ <span class="interaction likes" onclick="toggleLike(event, ${tweet.id})">${tweet.likes}</span>
            📌 <span class="interaction bookmarks" onclick="toggleBookmark(event, ${tweet.id})">${tweet.bookmarks}</span>
        `;

        tweetContent.appendChild(tweetHeader);
        tweetContent.appendChild(tweetText);
        tweetContent.appendChild(tweetFooter);

        tweetDiv.appendChild(profilePic);
        tweetDiv.appendChild(tweetContent);

        container.appendChild(tweetDiv);
    });
}

function showTweetDetails(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    if (tweet) {
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'tweet';
        detailsDiv.innerHTML = `
            <div class="profile-pic"><img src="${tweet.profilePic}" /></div>
            <div class="tweet-content">
                <div class="tweet-header">
                    <h3 class="name">${tweet.name}</h3>
                    <span class="username">${tweet.username}</span>
                    <span class="date">${tweet.date}</span>
                </div>
                <p class="tweet-text">${tweet.text}</p>
                <div class="tweet-footer">
                    ❤️ <span class="interaction likes">${tweet.likes}</span>
                    🔁 <span class="interaction retweets">${tweet.retweets}</span>
                    💬 <span class="interaction replies">${tweet.replies.length}</span>
                </div>
            </div>
            <div>
                ${tweet.replies.map(reply => `
                    <div class="tweet reply">
                        <div class="profile-pic"><img src="${reply.profilePic}" /></div>
                        <div class="tweet-content">
                            <div class="tweet-header">
                                <h3 class="name">${reply.name}</h3>
                                <span class="username">${reply.username}</span>
                            </div>
                            <p class="tweet-text">${reply.text}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div>
                <button onclick="showReplyBox(${tweet.id})">Reply</button>
            </div>
        `;
        document.body.innerHTML = '';
        document.body.appendChild(detailsDiv);
    }
}

function showReplyBox(tweetId) {
    const replyText = prompt('Enter your reply:');
    if (replyText) {
        const tweet = tweets.find(t => t.id === tweetId);
        tweet.replies.push({
            name: "You",
            username: "@You",
            text: replyText,
            profilePic: "https://via.placeholder.com/50"
        });
        showTweetDetails(tweetId);
    }
}

function toggleLike(event, tweetId) {
    event.stopPropagation();
    const tweet = tweets.find(t => t.id === tweetId);
    tweet.likes++;
    loadTweets();
}

function toggleRetweet(event, tweetId) {
    event.stopPropagation();
    const tweet = tweets.find(t => t.id === tweetId);
    tweet.retweets++;
    loadTweets();
}

function toggleBookmark(event, tweetId) {
    event.stopPropagation();
    const tweet = tweets.find(t => t.id === tweetId);
    tweet.bookmarks++;
    loadTweets();
}

window.addEventListener('load', loadTweets);
