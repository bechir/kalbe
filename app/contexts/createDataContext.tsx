import React, { useReducer } from 'react'

export default (reducer: any, actions: any, defaultValue: any) => {
    //@ts-ignore
    const Context = React.createContext();

    const Provider = ({ children }: any) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        
        for(let key in actions) {
            //@ts-ignore
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions}}>
                {children}
            </Context.Provider>
        );
    }

    return { Context, Provider };
};
