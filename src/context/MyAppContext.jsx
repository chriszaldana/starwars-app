/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import Swal from 'sweetalert2'

export const MyAppContext = createContext()

export const MyAppProvider = ({children}) => {
    const [name, setName] = useState('')

    const [favorites, setFavorites] = useState([])

    const addFavorite = (card) =>{
        setFavorites((prevFavorites) => [...prevFavorites, card])
        Swal.fire({
            title: "Add it to favorites",
            width: 600,
            padding: "3em",
            color: "#fff",
            background: "#000 url(/images/trees.png)",
          });
    }


    return(
        <MyAppContext.Provider value={{name, setName, favorites, setFavorites, addFavorite}}>
            {children}
        </MyAppContext.Provider>
    )
}

