import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import "../App.css";

const DefaultCard = () => {
  const { Response, Error } = useSelector(
    (state: RootState) => state.movies.movies
  );
  const welcomMessage =
    "welcome to OMDB search,search something in the bar above";
  const errorMessage = "Movie not found!";

  return (
    <div
      className={
        Response === "False" && Error !== "Incorrect IMDb ID."
          ? "default-card-error"
          : "default-card"
      }
    >
      <p>
        {Response === "False" && Error !== "Incorrect IMDb ID."
          ? errorMessage
          : welcomMessage}
      </p>
    </div>
  );
};

export default DefaultCard;
