var img = new Image();
img.src = "https://doodleipsum.com/300x300/outline"; // Replace with your image URL
img.onload = function () {
  document.getElementById("doodleImage").src = img.src ?? "./doodleipsum-6.png"; // Set the source of the image element in your HTML
  document.getElementById("body").style.display = "block"; // Display the body
};

const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var query = document.querySelector("#search-input").value;
  var url = "https://www.google.com/search?q=" + encodeURIComponent(query);
  window.location.href = url;
});
