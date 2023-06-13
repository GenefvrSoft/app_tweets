import axios from 'axios'

const HostServer = 'http://localhost:4000/api/';

// Api tweets
export const getTweets = () => axios.get(`${HostServer}obtener-tweets`);
export const crearTweet = (datos) => axios.post(`${HostServer}crear-tweet`, datos);
export const statusFavorito = (datos) => axios.put(`${HostServer}status-favorito`, datos);
export const eliminarTweet = (id) => axios.delete(`${HostServer}eliminar-tweet/${id}`);


