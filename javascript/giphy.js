var key = "rHFFg1j7hGGxzGPZ9GfhmqTTCbXwODt4";
var userSearch = document.querySelector("input");
var searchButton = document.querySelector("button");
var imgContainer = document.getElementById("display");
var column = document.createElement("div");

column.setAttribute("class", "column");

searchButton.addEventListener("click", function (e) {
    console.log(userSearch.value);
    var searchTerm = userSearch.value;
    userSearch.value = "";
    searchImages(e, searchTerm);
    column.innerHTML = "";
    imgContainer.textContent = "";
});

function searchImages(e, searchTerm) {
    e.preventDefault();
    var url =
        "https://api.giphy.com/v1/gifs/search" +
        "?q=" +
        "'" +
        searchTerm +
        "'" +
        "&api_key=" +
        key;
    fetch(url)
        .then(function (results) {
            return results.json();
        })
        .then(function (json) {
            for (var i = 0; i < 25; i++) {
                var colorDiv = document.createElement("div");
                colorDiv.setAttribute("class", "color");
                var imgs = document.createElement("img");
                imgs.setAttribute("src", json.data[i].images.fixed_height.url);
                var anchor = document.createElement("a");
                anchor.setAttribute("href", json.data[i].url);
                anchor.setAttribute("target", "_blank");
                anchor.appendChild(imgs);
                colorDiv.appendChild(anchor);
                column.appendChild(colorDiv);
                imgContainer.appendChild(column);
            }
        });
}