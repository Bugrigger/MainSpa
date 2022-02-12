import { createAction, createReducer, on } from "@ngrx/store";


// export const FILIAL_REDUCER = 'filialCompany';
export const createFilial = createAction('[ADD_FILIAL] createFilial');

export interface filialCompany {
    id: number;
    filialAddress: string;
    filialPhone: string;
    administrator: string;
};


export const initialState: filialCompany = {
    id: 1,
    filialAddress: '',
    filialPhone: '',
    administrator: ''
};

export const FilialReducer = createReducer(initialState
);

// export const filialReduser = (filialState: any) => {
//     return filialState;
// }
