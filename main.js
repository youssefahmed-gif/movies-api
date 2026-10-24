const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDgwNmFjZWE3ZDE0M2I1YTdkYTZiYmRkNWE0YjMwZCIsIm5iZiI6MTcyMjc5NTM4NS40NDUsInN1YiI6IjY2YWZjNTc5ZDBlMzg4MjcxMjViN2U5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VafLQ9ITWPGl_SA6ZAdEb2L0ec_7_ryOf8P1mCqcKpM",
  },
};

let container = document.querySelector(".container")

async function fetchMovies() {
    let res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options,
    );

    let data = await res.json();
    data = data.results;
    console.log(data);
    data.forEach((movie) => {
        container.innerHTML += `
         <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="" width="300" height="400" />
        `;
    }); 
}

fetchMovies(); 