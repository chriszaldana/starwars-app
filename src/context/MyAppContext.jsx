/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MyAppContext = createContext()

export const MyAppProvider = ({children}) => {
    const [name, setName] = useState('')


    return(
        <MyAppContext.Provider value={{name, setName}}>
            {children}
        </MyAppContext.Provider>
    )
}

