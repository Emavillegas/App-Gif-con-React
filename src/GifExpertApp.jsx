
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory) ) return; // quiere decir que si la catergoria ya existe, no se hace nada. Si no existe, se la agrega.
        setCategories([newCategory, ...categories]); /// el operador spread (...) agarra todo lo que ya tenemos y le agrega lo que le sigue a la coma. 


        /// para insertarlo al inicio seria: ['valorant', ...categories]
    }





    return(

        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
        
            {/* Input */}

            <AddCategory 
            //setCategories = { setCategories } 
            onNewCategory = {onAddCategory}

            />


            {/* Listado de Gif */}
            {/* <button onClick={onAddCategory}>Agregar </button> */}


                {/* Gif Item */}

                {
            categories.map((category)=>{  /// el map me permite barrer cada uno de los elementos del arreglo y regresar algo nuevo
                return (
                    <GifGrid 
                        key={category}
                        category={category}
                    />  
                
                )
            })}
            

        </>




    )




}