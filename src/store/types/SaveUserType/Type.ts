import { actionTypes } from "../../actionTypes/ActionTypes";

export interface pageState {
    savedUser: string[]
}

export interface saveUser{
    payload: any;
    type: typeof actionTypes.SAVE_USER;
    savedUser: string[];
    
}

export type savedUser = saveUser;