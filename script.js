document.addEventListener("DOMContentLoaded", function() {
    const tweets = [
        { username: "Hanna Marin", handle: "@HannaM", date: "September 1, 2010 10:15 AM", content: "Just got a new pair of shoes!", replies: 2, retweets: 1, likes: 5, bookmarks: 0 },
        { username: "Spencer Hastings", handle: "@SpencerH", date: "September 2, 2010 2:30 PM", content: "Busy with my school projects.", replies: 0, retweets: 0, likes: 1, bookmarks: 0 },
        { username: "Emily Fields", handle: "@EmilyF", date: "September 3, 2010 9:00 AM", content: "Feeling nostalgic today.", replies: 0, retweets: 0, likes: 1, bookmarks: 0 },
        { username: "Aria Montgomery", handle: "@AriaM", date: "September 4, 2010 4:45 PM", content: "Reading a new book.", replies: 0, retweets: 1, likes: 4, bookmarks: 0 },
    ];

    const tweetsContainer = document.getElementById("tweets");

    tweets.forEach(tweet => {
        const tweetElement = document.createElement("div");
        tweetElement.classList.add("tweet");

        tweetElement.innerHTML = `
            <div class="tweet-header">
                <div class="profile-pic"><img src="https://via.placeholder.com/50"></div>
                <div class="tweet-content">
                    <p><strong>${tweet.username}</strong> ${tweet.handle} <br> <small>${tweet.date}</small></p>
                    <p>${tweet.content}</p>
                </div>
            </div>
            <div class="tweet-footer">
                <span>💬 ${tweet.replies}</span>
                <span>🔁 ${tweet.retweets}</span>
                <span>❤️ ${tweet.likes}</span>
                <span>🔖 ${tweet.bookmarks}</span>
            </div>
        `;

        tweetsContainer.appendChild(tweetElement);
    });
});
