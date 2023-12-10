const API_Key = "8bd8e5621e027260bba53d1969f309e7";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchNetflixOrginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
    fetchTopRateMovies: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27`,
    fetchRomancMovies: `/discover/movie?api_key=${API_Key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
};

export default requests;
