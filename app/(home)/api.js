const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getNowPlayingMovies() {
  const response = await fetch(`${BASE_URL}/now_playing?api_key=${API_KEY}`);
  const json = await response.json();
  return json.results;
}

export async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/popular?api_key=${API_KEY}`);
  const json = await response.json();
  return json.results;
}

export async function getTopRateMovies() {
  const response = await fetch(`${BASE_URL}/top_rated?api_key=${API_KEY}`);
  const json = await response.json();
  return json.results;
}

export async function getUpComingMovies() {
  const response = await fetch(`${BASE_URL}/upcoming?api_key=${API_KEY}`);
  const json = await response.json();
  return json.results;
}