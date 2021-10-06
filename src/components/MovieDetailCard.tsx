import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import "../App.css"

interface Irating {
  Source: string;
  Value: string;
}

const MovieDetailCard = () => {
  const { Plot, Actors, Ratings } = useSelector(
    (state: RootState) => state.movieDetail
  );
  return (
    <div className="detail-card">
      <div className="card-plot">
        <h6>plot</h6>
        <span>{Plot}</span>
      </div>
      <div className="card-actors">
        <h6>Actors</h6>
        <span>{Actors}</span>
      </div>
      <div className="card-ratings">
        <h6>Ratings</h6>
        <span>
          {Ratings?.map((rating: Irating,index:number) => {
            return (
              <ul key={index}>
                <li>
                  {rating.Source}:{rating.Value}
                </li>
              </ul>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default MovieDetailCard;
