function myFunction() {
    var searchTerm = document.querySelector('#vibe').value;
    // Create a variable to hold the value of rating
    fetch(
      'https://imdb-api.com/en/API/Keyword/k_wmu1kuc6/' +
      searchTerm
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
          debugger;
        console.log(response);
       
      });

    fetch(
        'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=' +
        searchTerm +
        '&key=AIzaSyDSjKl3kb7QXntrm9amPQnhhqFQ2UhRwm0'
    )
        .then(function(response) {
        return response.json();
        })
        .then(function(response) {
        console.log(response);
        
        });
}