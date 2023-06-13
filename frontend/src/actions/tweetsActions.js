import { crearTweet, eliminarTweet, getTweets, statusFavorito  } from "../api/servicios"



export const getTweetsAction = async () =>  {
    try {
        const { data } = await getTweets();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const crearTweetAction = async (datos) =>  {
    try {
        const { data } = await crearTweet(datos);
        return data.tweet;
    } catch (error) {
        console.log(error)
    }
}

export const statusFavoritoAction = async (nuevaData) =>  {
    try {
        const { data } = await statusFavorito(nuevaData);     
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const eliminarTweetAction = async (idTweet) =>  {
    try {
        const { data } = await eliminarTweet(idTweet);             
        return data;
    } catch (error) {
        console.log(error)
    }
}