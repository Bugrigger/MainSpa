import { createReducer } from "@ngrx/store";
import { filialCompany } from "../model/filial";


export const FILIAL_REDUCER = 'filialCompany';

export interface filialState {
    idChange: number;
    filialList: filialCompany[];
}


export const initialState: filialState = {
    idChange: 1,
    filialList: []
};

export const FilialReducer = createReducer(initialState);

// export const filialReduser = (filialState: any) => {
//     return filialState;
// }