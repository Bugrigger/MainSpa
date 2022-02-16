import { mainCompany } from "src/app/model/main-company";
import { mainCompanyActions, mainCompanyActionsType } from "./main-company.actions";


export const MAIN_COMPANY_REDUCER_NODE = 'mainCompany';

export interface mainCompanyState {
    idIncrement: number;
    mainCompanyList: mainCompany[];
};

export const initialState: mainCompanyState = {
    idIncrement: 2,
    mainCompanyList: [
        {
            id: 1,
            fullName: 'ООО "Первый снег"',
            shortName: 'ПС',
            inn: '456622145532',
            kpp: '1255669987000',
            ceo: 'Григорьев Н.В',
            mainCompanyAddress: 'ул. Шелковая д.8',
            mainCompanyPhone: '+7(391)240-55-78',
        }
    ]
};

export const mainCompanyReducer = (state = initialState, action: mainCompanyActions) => {

    switch (action.type) {
        case mainCompanyActionsType.create:
            return {
                ...state,
                idIncrement: state.idIncrement + 1,
                mainCompanyList: [
                    ...state.mainCompanyList,
                    {
                        id: state.idIncrement,
                        ...action.payload.mainCompany
                    }
                ]
            };
        default:
            return state;
    }
};