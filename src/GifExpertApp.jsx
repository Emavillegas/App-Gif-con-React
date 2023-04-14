
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const ondAddCategory = () => {
        setCategories([...categories, 'Valorant']);v /// el operador spread (...) agarra todo lo que ya tenemos y le agrega lo que le sigue a la coma. 


        /// para insertarlo al inicio seria: ['valorant', ...categories]
    }





    return(

        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
        
            {/* Input */}

            <AddCategory/>

            {/* Listado de Gif */}
            <button onClick={ondAddCategory}>Agregar </button>


                {/* Gif Item */}

            <ol>
                {categories.map(category=>{  /// el map me permite barrer cada uno de los elementos del arreglo y regresar algo nuevo
                    return <li key={category}> {category} </li>
                })}
            </ol>

        </>




    )




}