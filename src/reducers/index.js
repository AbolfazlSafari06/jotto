import { combineReducers } from "redux";
import success from "./successReducers";
import guessWords from "./guessedWordReducer";
import secretWord from "./secretWordReducer";

export default combineReducers({
    success, guessWords, secretWord
})