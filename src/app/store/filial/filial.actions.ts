import { Action } from "@ngrx/store";

export enum filialActionsType {
    create = '[FILIAL] Create filial item'
};

export class filialCreateAction implements Action {
    readonly type = filialActionsType.create;

    constructor(public payload: {
        filialAddress: string,
        filialPhone: string,
        administrator: string
    }) {

    }
}

export type filialActions = filialCreateAction;
