// Event listener for 'Google Search' button
document
  .querySelector('input[name="submit"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    var query = document.querySelector(".search_bar").value;
    var url = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(url, "_blank");
  });

// Event listener for 'I'm Feeling Lucky' button
document
  .querySelector('input[name="feelinglucky"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    var query = document.querySelector(".search_bar").value;
    var url =
      "https://www.google.com/search?q=" + encodeURIComponent(query) + "&btnI";
    window.open(url, "_blank");
  });
