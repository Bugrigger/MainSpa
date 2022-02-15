import { Action } from "@ngrx/store";
import { filialCompany } from "src/app/model/filial";

export enum filialActionsType {
    create = '[FILIAL] Create filial item'
};

export class filialCreateAction implements Action {
    readonly type = filialActionsType.create;

    constructor(public payload: { filial: object }) {

    }
}

export type filialActions = filialCreateAction;
