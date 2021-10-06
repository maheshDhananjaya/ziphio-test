import { ActionType } from "../constants/ActionType";
import { AnyAction } from "redux";

interface IinitialState {
  movies: [];
}

const initialState: IinitialState = {
  movies: []
};

export const movieReducer = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionType.GET_MOVIE:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export const  movieDetailReducer = (state={},action:AnyAction) =>{
switch(action.type){
  case ActionType.SELECTED_MOVIE:
    return {...state,...action.payload};
    default:
      return state;
}
}
