/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MyAppContext = createContext()

export const MyAppProvider = ({children}) => {
    const [name, setName] = useState('')

    const [favorites, setFavorites] = useState([])

    const addFavorite = (card) =>{
        setFavorites((prevFavorites) => [...prevFavorites, card])
    }


    return(
        <MyAppContext.Provider value={{name, setName, favorites, setFavorites, addFavorite}}>
            {children}
        </MyAppContext.Provider>
    )
}

