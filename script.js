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
            🔖 <span class="bookmarks">${tweet.bookmarks}</span>
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
    window.location.href = `tweet.html?id=${tweetId}`;
}

function loadTweetDetails() {
    const params = new URLSearchParams(window.location.search);
    const tweetId = parseInt(params.get('id'));
    const tweet = tweets.find(t => t.id === tweetId);

    if (tweet) {
        const tweetContainer = document.getElementById('tweet');

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
            ❤️ <span class="likes" onclick="toggleLike(${tweet.id})">${tweet.likes}</span>
            🔁 <span class="retweets" onclick="toggleRetweet(${tweet.id})">${tweet.retweets}</span>
            🔖 <span class="bookmarks" onclick="toggleBookmark(${tweet.id})">${tweet.bookmarks}</span>
        `;

        tweetContent.appendChild(tweetHeader);
        tweetContent.appendChild(tweetText);
        tweetContent.appendChild(tweetFooter);

        tweetDiv.appendChild(profilePic);
        tweetDiv.appendChild(tweetContent);

        tweetContainer.appendChild(tweetDiv);

        loadReplies(tweet.replyIds);
    }
}

function loadReplies(replyIds) {
    const repliesContainer = document.getElementById('replies');

    replyIds.forEach(replyId => {
        const reply = tweets.find(t => t.id === replyId);
        if (reply) {
            const replyDiv = document.createElement('div');
            replyDiv.className = 'reply';

            const profilePic = document.createElement('div');
            profilePic.className = 'profile-pic';
            const img = document.createElement('img');
            img.src = reply.profilePic;
            profilePic.appendChild(img);

            const replyContent = document.createElement('div');
            replyContent.className = 'tweet-content';

            const replyHeader = document.createElement('div');
            replyHeader.className = 'tweet-header';
            const name = document.createElement('h3');
            name.className = 'name';
            name.innerText = reply.name;
            const username = document.createElement('span');
            username.className = 'username';
            username.innerText = reply.username;
            const date = document.createElement('span');
            date.className = 'date';
            date.innerText = reply.date;
            replyHeader.appendChild(name);
            replyHeader.appendChild(username);
            replyHeader.appendChild(date);

            const replyText = document.createElement('p');
            replyText.className = 'tweet-text';
            replyText.innerText = reply.text;

            const replyFooter = document.createElement('div');
            replyFooter.className = 'tweet-footer';
            replyFooter.innerHTML = `
                ❤️ <span class="likes" onclick="toggleLike(${reply.id})">${reply.likes}</span>
                🔁 <span class="retweets" onclick="toggleRetweet(${reply.id})">${reply.retweets}</span>
                🔖 <span class="bookmarks" onclick="toggleBookmark(${reply.id})">${reply.bookmarks}</span>
            `;

            replyContent.appendChild(replyHeader);
            replyContent.appendChild(replyText);
            replyContent.appendChild(replyFooter);

            replyDiv.appendChild(profilePic);
            replyDiv.appendChild(replyContent);

            repliesContainer.appendChild(replyDiv);
        }
    });
}

function postReply() {
    const params = new URLSearchParams(window.location.search);
    const tweetId = parseInt(params.get('id'));
    const replyText = document.getElementById('replyText').value;

    if (replyText.trim()) {
        const newReply = {
            id: tweets.length + 1,
            name: "You",
            username: "@You",
            text: replyText,
            profilePic: "https://via.placeholder.com/50",
            date: new Date().toLocaleString(),
            replies: 0,
            retweets: 0,
            likes: 0,
            bookmarks: 0,
            replyIds: []
        };

        tweets.push(newReply);
        const tweet = tweets.find(t => t.id === tweetId);
        tweet.replyIds.push(newReply.id);

        document.getElementById('replyText').value = '';
        loadReplies(tweet.replyIds);
    }
}

function toggleLike(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    tweet.likes += tweet.likes === 0 ? 1 : -1;
    updateTweetFooter(tweetId);
}

function toggleRetweet(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    tweet.retweets += tweet.retweets === 0 ? 1 : -1;
    updateTweetFooter(tweetId);
}

function toggleBookmark(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    tweet.bookmarks += tweet.bookmarks === 0 ? 1 : -1;
    updateTweetFooter(tweetId);
}

function updateTweetFooter(tweetId) {
    const tweet = tweets.find(t => t.id === tweetId);
    document.querySelector(`.tweet-footer .likes`).innerText = tweet.likes;
    document.querySelector(`.tweet-footer .retweets`).innerText = tweet.retweets;
    document.querySelector(`.tweet-footer .bookmarks`).innerText = tweet.bookmarks;
}

function loadProfile() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');
    const userTweets = tweets.filter(t => t.username === username);
    const user = userTweets[0];

    if (user) {
        document.getElementById('profilePic').src = user.profilePic;
        document.getElementById('profileName').innerText = user.name;
        document.getElementById('profileUsername').innerText = user.username;

        const container = document.getElementById('profileTweets');
        userTweets.forEach(tweet => {
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
                🔖 <span class="bookmarks">${tweet.bookmarks}</span>
            `;

            tweetContent.appendChild(tweetHeader);
            tweetContent.appendChild(tweetText);
            tweetContent.appendChild(tweetFooter);

            tweetDiv.appendChild(profilePic);
            tweetDiv.appendChild(tweetContent);

            container.appendChild(tweetDiv);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('tweets')) {
        loadTweets();
    } else if (document.getElementById('tweet')) {
        loadTweetDetails();
    } else if (document.getElementById('profileTweets')) {
        loadProfile();
    }
});
