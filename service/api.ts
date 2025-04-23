export const tmdb_config = {
  root: "https://api.themoviedb.org/3",
  api_key: process.env.MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.MOVIE_API_KEY}`
  }
}

export const fetchMovies = async({query}: {query: string}) =>{
  const endpoint = query ? 
  `${tmdb_config.root}/search/movie?query=${encodeURIComponent(query)}`:
  `${tmdb_config.root}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: tmdb_config.headers,
  });

  if (!response.ok){
    throw new Error('Failed to fetch movies', );
    response.statusText
  }

  const data = await response.json();
  return data.results;
}