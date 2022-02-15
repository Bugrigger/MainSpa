import { filialCompany } from "src/app/model/filial";
import { filialActions, filialActionsType } from "./filial.actions";

export const FILIAL_REDUCER_NODE = 'filial';

export interface filialState {
    idIncrement: number;
    filialList: filialCompany[];
};

export const initialState: filialState = {
    idIncrement: 2,
    filialList: [
        {
            id: 1,
            filialAddress: 'Мира 26',
            filialPhone: '+7(963)214-56-31',
            administrator: 'Гайдулян И.О'
        },
        {
            id: 3,
            filialAddress: 'Заречная 14',
            filialPhone: '+7(912)569-10-52',
            administrator: 'Вивикова Г.Ф'
        }
    ]
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
                        filial: {},
                    }
                ]
            };
        default:
            return state;
    }
};



