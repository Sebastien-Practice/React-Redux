import { actionTypes } from '../actionTypes/ActionTypes';
import { savedUser } from '../types/SaveUserType/Type';

export const saveUser = (payload: savedUser["savedUser"]) => ({
    type: actionTypes.SAVE_USER,
    payload
})