

var responseContainerEL = document.getElementById('response')





function youtubeFunction() {
  // Create a variable called `searchTerm` that will use `document.querySelector()` to target the `id` of the input
  // Use `.value` to capture the value of the input and store it in the variable
  var searchTerm = document.querySelector('#searchVibe').value;
  console.log(searchTerm);
  // Make a `fetch` request concatenating the `searchTerm` to the query URL
  // Remember to add your API key at the end
  //debugger
  fetch(
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=' +
    searchTerm +
    '&key=AIzaSyDSjKl3kb7QXntrm9amPQnhhqFQ2UhRwm0'
  )
    .then(response => response.json())
    .then(function(response) {
      console.log(response);
      // Create a variable that will select the <div> where the GIF will be displayed
      var responseContainerEl = document.querySelector('#response-container');

      // Empty out the <div> before we append a GIF to it
      responseContainerEl.innerHTML = '';

      var gifImg = document.createElement('h1');
      gifImg.textContent = 'Youtube Song : ' + response.items[0].snippet.title;
   
      // Append 'gifImg' to the <div>
      responseContainerEl.appendChild(gifImg);
    });

}

function imdbFunction() {
  var searchTerm = document.getElementById('rating').value;

  //document.getElementById("demo").innerHTML = "You selected: " + x;

  fetch(
    'https://api.themoviedb.org/3/search/movie?api_key=9e8138b4ad6d91ea8b569ce92c1493ab&query=' + searchTerm +'f' ) 
 
    .then(response => response.json())

    .then(function(response) {
    
      var gifImg = document.createElement("h1");
      gifImg.textContent = 'Movie : ' + response.title;

      // Append 'gifImg' to the <div>
     responseContainerEL.appendChild(gifImg);
    })
}







