import { createAction, createReducer, on, reduceState, State } from "@ngrx/store";


export const adminStatus = createAction('[AUTHSTATE] adminStatus');
export const userStatus = createAction('[AUTHSTATE] userStatus');
export const authStatus = createAction('[AUTHSTATE] authStatus');

export interface adminStatus {
    admin: boolean;
    auth: boolean;
}
export interface authStatus {

}

export const initialState: adminStatus = {
    admin: false,
    auth: false
}

export const UserStatusReducer = createReducer(initialState,
    on(adminStatus, State => ({
        admin: true,
        auth: true
    })),
    on(userStatus, State => ({
        admin: false,
        auth: true
    })),
);



