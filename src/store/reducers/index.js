import { combineReducers } from "redux";
import searchReducer from "../../redux/reducer/searchReducer";
import queryHeroReducer from "../../redux/reducer/queryHeroReducer";

export default combineReducers({
	 searchReducer,
	 queryHeroReducer
});
