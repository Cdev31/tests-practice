

export const getImagen = async() => {

    try {

        const apiKey = '6eA9U1NHwDmAbBU8oseuXDahRQJ63XI9';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



