import React, { createContext, useReducer } from 'react'
import { UPDATE_LOGIN, UPDATE_VISIABLE, SHOW_AUTH_MODAL } from './action_type'

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_LOGIN:
            state.login = action.login
            return {...state}
        case UPDATE_VISIABLE:
            state.visiable = action.visiable
            return {...state}
        case SHOW_AUTH_MODAL:
            state.authModal = action.authModal
            console.log(state);
            return {...state}
        default:
            return {...state}
    }
}

export const StoreContext = createContext({})

export const Store = props => {
    const defalutStatesValue = {
        login:false,
        visiable:true,
        authModal:false
    }
    const [{login,visiable,authModal}, dispatch] = useReducer(reducer, defalutStatesValue)
    return (
        <StoreContext.Provider value={{ login, visiable, authModal, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    )
}
