import { combineReducers } from "redux";
import saveUserReducer from './saveUserReducer/saveUserReducer'

const rootReducer = combineReducers({
    saveUser: saveUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;