document.addEventListener("DOMContentLoaded", function() {
    const tweetsContainer = document.getElementById('tweets');

    const tweets = [
        {
            profilePic: 'https://via.placeholder.com/50',
            name: 'Hanna Marin',
            username: '@HannaM',
            date: 'September 1, 2010 10:15 AM',
            text: 'Just got a new pair of shoes!',
            replies: 2,
            retweets: 1,
            likes: 5,
            bookmarks: 0
        },
        {
            profilePic: 'https://via.placeholder.com/50',
            name: 'Spencer Hastings',
            username: '@SpencerH',
            date: 'September 2, 2010 2:30 PM',
            text: 'Busy with my school projects.',
            replies: 0,
            retweets: 0,
            likes: 1,
            bookmarks: 0
        },
        {
            profilePic: 'https://via.placeholder.com/50',
            name: 'Emily Fields',
            username: '@EmilyF',
            date: 'September 3, 2010 9:00 AM',
            text: 'Feeling nostalgic today.',
            replies: 0,
            retweets: 0,
            likes: 1,
            bookmarks: 0
        },
        {
            profilePic: 'https://via.placeholder.com/50',
            name: 'Aria Montgomery',
            username: '@AriaM',
            date: 'September 4, 2010 4:45 PM',
            text: 'Reading a new book.',
            replies: 0,
            retweets: 1,
            likes: 4,
            bookmarks: 0
        }
    ];

    tweets.forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.innerHTML = `
            <div class="profile-pic">
                <img src="${tweet.profilePic}" alt="Profile Picture">
            </div>
            <div class="tweet-content">
                <div class="tweet-header">
                    <p class="name">${tweet.name}</p>
                    <p class="username">${tweet.username}</p>
                    <p class="date">${tweet.date}</p>
                </div>
                <div class="tweet-text">${tweet.text}</div>
                <div class="tweet-footer">
                    <span>&#128172; ${tweet.replies}</span>
                    <span>&#128257; ${tweet.retweets}</span>
                    <span>&#10084; ${tweet.likes}</span>
                    <span>&#128278; ${tweet.bookmarks}</span>
                </div>
            </div>
        `;
        tweetsContainer.appendChild(tweetElement);
    });
});
