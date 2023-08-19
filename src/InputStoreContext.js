import React, { createContext, useContext } from 'react';

const InputStoreContext = createContext();

export const InputStoreProvider = ({ children, store }) => {
    return (
        <InputStoreContext.Provider value={store}>
            {children}
        </InputStoreContext.Provider>
    );
};

export const useInputStore = () => {
    return useContext(InputStoreContext);
};