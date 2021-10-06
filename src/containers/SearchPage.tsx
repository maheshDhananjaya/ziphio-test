import DefaultCard from "../components/DefaultCard";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import '../App.css'

interface Imovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const SearchPage = () => {
  const { Search, Response } = useSelector(
    (state: RootState) => state.movies.movies
  );
  return (
    <div>
      <Header />
      {Response === "True" ? (
        Search?.map((movie: Imovie) => {
          const { Title, Year, imdbID, Type, Poster } = movie;
          return (
           <div key={imdbID} className="main-card">
              <MovieCard 
              Title={Title}
              Year={Year}
              imdbID={imdbID}
              Type={Type}
              Poster={Poster}
            />
             </div>
          );
        })
      ) : (
        <DefaultCard />
      )}
    </div>
  );
};

export default SearchPage;
