import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GridGifs = ({categoria}) => {
 
    const {images,isLoading}=useFetchGifs(categoria);

    return (
    <>
        <h2>{categoria}</h2>
        { isLoading && <h2>CARGANDO...</h2> }
        <div className="card-grid" >
            {
                images.map((img)=> 
                 <GifItem key={img.id} {...img}/> )
                 
            }
        </div>    
        
    </>
  )
}
