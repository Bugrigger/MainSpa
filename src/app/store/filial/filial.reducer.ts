import { filialCompany } from "src/app/model/filial";
import { filialActions, filialActionsType } from "./filial.actions";

export const FILIAL_REDUCER_NODE = 'filial';

export interface filialState {
    idIncrement: number;
    filialList: filialCompany[];
};

export const initialState: filialState = {
    idIncrement: 1,
    filialList: []
}

export const filialReducer = (state = initialState, action: filialActions) => {

    switch (action.type) {
        case filialActionsType.create:
            return {
                ...state,
                idIncrement: state.idIncrement + 1,
                filialList: [
                    ...state.filialList,
                    {
                        id: state.idIncrement,
                        filialAddress: action.payload.filialAddress,
                        filialPhone: action.payload.filialPhone,
                        administrator: action.payload.administrator
                    }
                ]
            };
        default:
            return state;
    }
};



