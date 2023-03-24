import { actionTypes } from '../actionTypes/ActionTypes';

export const saveUser = (payload: string[]) => ({
    type: actionTypes.SAVE_USER,
    payload
})