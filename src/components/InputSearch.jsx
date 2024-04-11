import { useState } from "react";


export const InputSearch = ({addCategoria}) => {
  const [value, setValue] = useState('');

  const inputChange = ({target})=>{

    setValue(target.value);

  }

  const onSubmitForm=(event)=>{
    event.preventDefault();
    if(value.trim().length <=1) return;
    addCategoria(value);
    setValue('');
  }
  
    return (
        <form onSubmit={onSubmitForm}>
            <input
            type="text"
            placeholder="Buscar Gifs"
            onChange={inputChange}
            value={value}
            />
            
        
        </form>
)
}
