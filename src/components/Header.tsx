import React, { useEffect } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import "../App.css";
import { getMovie } from "../redux/actions/MovieActions";

const Header = () => {
  const dispatch = useDispatch();
  const { handleInput, inputVal } = useInput();

  const fetchData = async () => {
    const response = await axios
      .get(`https://www.omdbapi.com/?s=${inputVal}&apikey=17a2d57d`)
      .catch((Error) => {
        console.log(Error);
      });
    if (response) dispatch(getMovie(response.data));
  };
  /**to search value while typing,can use debouncing or throtteling to enhance performance.but here search is enable through button click */
  //   useEffect(() => {
  //     fetchData();
  // }, [inputVal]);

  return (
    <div className="header-main">
      <h2 className="header-name">OMDB Search</h2>
      <div className="header-input">
        <label>Search a movie</label>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            handleInput(e);
          }}
        />
      </div>
      <button
        className="header-searchbtn"
        onClick={() => {
          fetchData();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Header;
