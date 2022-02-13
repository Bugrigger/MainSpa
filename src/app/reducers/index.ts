import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { adminStatus, UserStatusReducer } from './authState';

export interface State {
  authState: adminStatus,

}

export const reducers: ActionReducerMap<State> = {
  authState: UserStatusReducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
