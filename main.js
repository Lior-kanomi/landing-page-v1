// Event listener for 'Google Search' button
document.addEventListener("DOMContentLoaded", function () {
  var img = document.getElementById("doodleImage");
  var randomNumber = (Math.floor(Math.random() * 10) + 1).toString();
  img.src = "./Doodles/doodleipsum-" + randomNumber + ".png";
});

const searchForm = document.querySelector(".search-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var query = document.querySelector("#search-input").value;
  var url = "https://www.google.com/search?q=" + encodeURIComponent(query);
  window.location.href = url;
});
