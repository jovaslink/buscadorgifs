
export const getGifs = async(categoria) => {

    const url= `https://api.giphy.com/v1/gifs/search?api_key=0gFAa8tc70I28o4BYYIqyGxFD7534uum&q=${categoria}&limit=10`;
    const resp= await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map((gif)=>{

        return {
            id:gif.id,
            title:gif.title,
            url:gif.images.downsized_medium.url
         }

     });
     
    return gifs;
}
