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
            state.authModal.show = action.authModal.show
            state.authModal.toggle = action.authModal.toggle
            return {...state}
        default:
            return {...state}
    }
}

export const StoreContext = createContext({})

export const Store = props => {
    const defalutStatesValue = {
        login:true,
        visiable:true,
        authModal:{
            show:false,
            toggle:null
        }
    }
    const [{login,visiable,authModal}, dispatch] = useReducer(reducer, defalutStatesValue)
    return (
        <StoreContext.Provider value={{ login, visiable, authModal, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    )
}
