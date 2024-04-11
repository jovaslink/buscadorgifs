import {useState} from 'react';
import { InputSearch, GridGifs } from './components'; 





export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['The Office']);

    

    const addCategoria= (value)=>{
        if (categorias.includes(value)) return;
        setCategorias([value,...categorias]);
    }

 
    return (
    <>  
        <h1>Buscador de GIFS</h1>
        
        <InputSearch addCategoria={addCategoria}/>
        
        {categorias.map((categoria)=>
        <div key={categoria}>
                <GridGifs categoria={categoria}/>
         </div> )}
    </>

  )
}
