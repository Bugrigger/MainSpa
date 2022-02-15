import { createFeatureSelector, createSelector } from "@ngrx/store";
import { filialState, FILIAL_REDUCER_NODE } from "./filial.reducer";

export const filialSelector = createFeatureSelector<filialState>(FILIAL_REDUCER_NODE);


export const filialListSelector = createSelector(
    filialSelector, state => state.filialList
);