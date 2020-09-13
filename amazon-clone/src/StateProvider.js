import React, { createContext, useContext, useReducer } from "react"

// Preparing Data Layer
export const StateContext = createContext();
// Wrap app and provide access to data layer

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Pull info from data layer
export const useStateProvider = () => useContext(StateContext)