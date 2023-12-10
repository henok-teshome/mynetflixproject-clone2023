import axios from "axios";
const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
});
//instance.get("/movies/top_rated");
export default instance;
