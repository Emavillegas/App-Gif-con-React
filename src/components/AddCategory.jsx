import { useState } from "react"

export const AddCategory = ({onNewCategory}) =>{

        const [inputValue, setInputValue] = useState('');
        const onInputChange = ({target}) =>{
            setInputValue(target.value);
        }

        const onSubmit = (event) =>{
            event.preventDefault();
            if (inputValue.trim().length <= 1) return; /// el.trim nos dice que el largo del value que insertemos, si es menor a 1, no se va a cumplir. Tiene que ser mayor o igual a uno para  retornar. 
            // setCategories(categories => [inputValue, ...categories]);
            onNewCategory(inputValue.trim());
            setInputValue('');

        }

        return(
            <form onSubmit={(event)=>{
                onSubmit(event);
            }}>
                <input 
                    type="text"
                    placeholder="Buscar gifs"
                    value = { inputValue }
                    onChange={onInputChange}
                />
            </form>
          
        )


}