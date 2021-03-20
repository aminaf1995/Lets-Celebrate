var responseContainerEL = document.getElementById("response");
var movieContainerEL = document.getElementById('movieBox')

// function youtubeFunction()
// preventDefault()
//   // Create a variable called `searchTerm` that will use `document.querySelector()` to target the `id` of the input
//   // Use `.value` to capture the value of the input and store it in the variable
//   var searchTerm = document.querySelector("#searchVibe").value;
//   // Make a `fetch` request concatenating the `searchTerm` to the query URL
//   // Remember to add your API key at the end
//   //debugger
//   fetch(
//     "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=happy&key=AIzaSyC6SlQNkAvha28BgZ7lnzE63fr3x-TIzzg"
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then(function (res) {
//       console.log(res);
//       alert("iam all man");
//       // Create a variable that will select the <div> where the GIF will be displayed
//       var responseContainerEl = document.querySelector("#response-container");

//       // Empty out the <div> before we append a GIF to it
//       responseContainerEl.innerHTML = "";

//       var gifImg = document.createElement("h1");
//       gifImg.textContent = "Youtube Song : " + res.items[0].snippet.title;

//       // Append 'gifImg' to the <div>
//       responseContainerEl.appendChild(gifImg);
//     });
// }



// function imdbFunction() {
//   var searchTerm = document.getElementById("movieBox").value;

//   //document.getElementById("demo").innerHTML = "You selected: " + x;

//   fetch("https://imdb-api.com/en/API/Search/k_iiql2sll/" + searchTerm)
//     .then((response) => response.json())

//     .then(function (response) {
//       console.log(response);
//       var gifImg = document.createElement("img");
//       gifImg.src = response.results[0].image;

//       // Append 'gifImg' to the <div>
//       movieContainerEL.appendChild(gifImg);
//     });
// }





document.querySelector(".search").addEventListener("click", function(event) {
  event;
var searchTerm = document.querySelector("#genreMovie").value;
//allows the erase
event.preventDefault();

  //document.getElementById("demo").innerHTML = "You selected: " + x;

  fetch("https://imdb-api.com/en/API/Search/k_iiql2sll/" + searchTerm)

    .then((response) => {return response.json(); })

    .then(function (moviedata) {
      //console.log(response)
     
      
      var movieContainerEL = document.querySelector("#movie-container");

      // Empty out the <div> before we append a GIF to it
      movieContainerEL.innerHTML = "";
      //console.log(resContainerEl.innerHTML);

      var gifImg = document.createElement("h1");

      gifImg.textContent = moviedata.results[6].title;

      // Append 'gifImg' to the <div>
      movieContainerEL.appendChild(gifImg);
    });
},
false
)





document.querySelector(".button").addEventListener("click",function(event) {
    event;

    var seaTerm = document.querySelector("#searchVibe").value;
    // Make a `fetch` request concatenating the `searchTerm` to the query URL
    // Remember to add your API key at the end
    //debugge
    event.preventDefault();

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" + seaTerm + "&key=AIzaSyC6SlQNkAvha28BgZ7lnzE63fr3x-TIzzg"
    )
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        //console.log(data);;
        // Create a variable that will select the <div> where the GIF will be displayed
        var responseContainerEl = document.querySelector("#response-container");

        // Empty out the <div> before we append a GIF to it
        responseContainerEl.innerHTML = "";

        var gifImg = document.createElement("h1");
        gifImg.textContent = "Youtube Song : " + data.items[0].snippet.title;

        // Append 'gifImg' to the <div>
        responseContainerEl.appendChild(gifImg);
      });
  },
  false
);
