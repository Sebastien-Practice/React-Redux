import { actionTypes } from "../../actionTypes/ActionTypes";
import { pageState, savedUser } from "../../types/SaveUserType/Type";


const initialState: pageState = {
    savedUser: []
}

const saveUserReducer = (state = initialState, action: savedUser) => {
    switch (action.type) {
        case actionTypes.SAVE_USER:
            return {
                ...state,
                partsSelected: action.payload.slice(),
            };
            default:
                return {
                    ...state,
                };
    }
};

export default saveUserReducer;