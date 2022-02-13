import { filialCompany } from "src/app/model/filial";

export const FILIAL_REDUCER_NODE = 'filial';

export interface filialState {
    idIncrement: number;
    filialList: filialCompany[];
};

export const initialState: filialState = {
    idIncrement: 1,
    filialList: []
}

export const filialReducer = (state = initialState, action: any) => {
    return state;
};



