import { useEffect, useState } from "react";
import { getGifs } from "../components/helpers/getGifs";


/// un hook es una funcion que regresa algo. Este es un custom hook ya que es creado por nosotros
export const useFetchGifs = (category) => {
     const [images, setImages] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }


    useEffect(()=>{
        getImages();
        
    }, []);

    return {
        images: images,
        isLoading
    }
}
