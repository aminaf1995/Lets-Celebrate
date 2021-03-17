

function myFunction() {
  var searchTerm = document.querySelector(`#searchVibe`).nodeValue;
  // Create a variable to hold the value of rating
  var rating= document.querySelector(`#rating`).nodeValue;
  fetch('https://imdb.api.com/en/API/Keyword/k_wmu1kuc6' + searchTerm)
  .then(function(response) {
    //console.log("test");
      return response.json();
  })
  . then(function(response) {
      console.log(response);

  });

  fetch (
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=' + searchTerm + '&key=AIzaSyDSjKl3kb7QXntrm9amPQnhhqFQ2UhRwm0'
  )
  .then(function(response) {
      return response. json();
  })
  . then(function(response) {
      console.log(response);

  });
}
