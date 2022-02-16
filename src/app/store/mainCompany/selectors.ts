import { createFeatureSelector, createSelector } from "@ngrx/store";
import { mainCompanyState, MAIN_COMPANY_REDUCER_NODE } from "./main-company.reduser";


export const mainCompanySelector = createFeatureSelector<mainCompanyState>(MAIN_COMPANY_REDUCER_NODE);

export const mainCompanyListSelector = createSelector(mainCompanySelector,
    state => state.mainCompanyList);