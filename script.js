document.getElementById("more").addEventListener("click", function(event) {
    event.preventDefault();
    var dropdown = document.querySelector(".dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});
