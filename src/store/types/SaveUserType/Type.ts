import { actionTypes } from "../../actionTypes/ActionTypes";

export interface pageState {
    savedUser: {}[]
}

export interface saveUser{
    payload: any;
    type: typeof actionTypes.SAVE_USER;
    savedUser: {}[];
    
}

export type savedUser = saveUser;