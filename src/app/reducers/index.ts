import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { adminStatus, UserStatusReducer } from './authState';
import { FilialReducer, filialCompany } from './create-filial';

export interface State {
  authState: adminStatus,
  createfilial: filialCompany


}

export const reducers: ActionReducerMap<State> = {
  authState: UserStatusReducer,
  createfilial: FilialReducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
