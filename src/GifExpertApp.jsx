
import { useState } from 'react';


export const GifExpertApp = () => {

    const [categories, setCatefories] = useState(['One Punch', 'Dragon Ball']);



    return(

        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
        
            {/* Input */}


            {/* Listado de Gif */}
                {/* Gif Item */}

            <ol>
                {categories.map(category=>{  /// el map me permite barrer cada uno de los elementos del arreglo y regresar algo nuevo
                    return <li key={category}> {category} </li>
                })}
            </ol>

        </>




    )




}