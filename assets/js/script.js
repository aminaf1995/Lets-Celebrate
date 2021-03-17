function myFunction() {
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
    .then(data => console.log(data));

    fetch(
      'https://imdb-api.com/en/API/Keyword/k_wmu1kuc6/' +
    searchTerm
    )
      .then(response => response.json())
      .then(data => console.log(data));


    

}
