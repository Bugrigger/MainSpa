import { Action } from "@ngrx/store";


export enum mainCompanyActionsType {
    create = '[MAIN COMPANY] Create main company item'
}

export class mainCompanyCreateAction implements Action {
    readonly type = mainCompanyActionsType.create;

    constructor(public payload: { mainCompany: object }) { };
}

export type mainCompanyActions = mainCompanyCreateAction;