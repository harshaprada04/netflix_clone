
const API_KEY="8df5aee02940e0a72a9c36ff18f0a5c2";

const requests={ 
   trending:`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
   netflix_original:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
   toprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
   adventure: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_geners=12`,
   comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
   war: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752`, 
   action:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
   horror:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
   popular_tvshows:`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`,
   popularity:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_networks=213`,
   trending_tvshows:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=trending_now.desc&with_networks=213`,
   crime_tvshows:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=crime_tv.desc&with_networks=213`,
   anime_tvshows:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=anime.desc&with_networks=213`,
   hindi_movies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&region=IN&language=hi-IN&with_original_language=hi`,
   kannada_movies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&region=IN&language=hi-IN&with_original_language=kn`,
   telugu_movies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&region=IN&language=te-IN&with_original_language=te`,
   tamil_movies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&region=IN&language=ta-IN&with_original_language=ta`,
   malayalam_movies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&region=IN&language=ta-IN&with_original_language=ml`,
   romance_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
   science_fiction_movies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`
  
}

export default requests;



