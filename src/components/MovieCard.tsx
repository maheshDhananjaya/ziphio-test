import axios from "axios";
import { useDispatch } from "react-redux";
import useDetail from "../hooks/useDetail";
import { getMovieDetails } from "../redux/actions/MovieActions";
import MovieDetailCard from "./MovieDetailCard";

interface Imovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const MovieCard = (prop: Imovie) => {
  const { handleState, state } = useDetail();
  const dispatch = useDispatch();
  const movieDetails = async () => {
    const response = await axios
      .get(` http://www.omdbapi.com/?i=${prop.imdbID}&apikey=17a2d57d`)
      .catch((Error) => {
        console.log(Error);
      });
    if (response) dispatch(getMovieDetails(response.data));
  };
  return (
    <div className={state ? "card" : "card-detail"}>
      <div className="card-img">
        <img alt="movie" src={prop.Poster} />
      </div>
      <div className={state ? "card-year" : "card-year-detail"}>
        {prop.Year}
      </div>
      <div className="card-title">{prop.Title}</div>
      {state ? (
        <>
          <div className="card-btn">
            <button
              className="detail-btn"
              onClick={() => {
                movieDetails();
                handleState();
              }}
            >
              Details
            </button>
          </div>
        </>
      ) : (
        <MovieDetailCard />
      )}
    </div>
  );
};

export default MovieCard;
