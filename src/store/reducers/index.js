import { combineReducers } from "redux";
import searchReducer from "../../redux/reducer/searchReducer";
import queryHeroReducer from "../../redux/reducer/queryHeroReducer";
import locationReducer from "../../redux/reducer/locationReducer";

export default combineReducers({
	 searchReducer,
	 queryHeroReducer,
	 locationReducer,
});
