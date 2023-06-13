import { crearTweetAction } from '../../actions/tweetsActions'
import { useForm } from '../../utils/useForm'
import style from './crearTweet.module.css'

function CrearTweet({tweets, setTweets}) {

  const {values, handleInputChange, reset} = useForm({nombreUsuario: '', descripcion: '', favorito: false, })

  const onSubmit = async(e) => {
    e.preventDefault();
    const tweetCreado = await crearTweetAction(values);
    const allTweets = [tweetCreado, ...tweets];
    setTweets(allTweets);
    localStorage.setItem('tweets', JSON.stringify(allTweets))
    // alertSuccess('Registro exitoso');
    reset();
}

  return (
    <div className={style.content}>
        <h2 className={style.titulo}>Postea aquí</h2>
        <form className={style.form} onSubmit={onSubmit}> 
            <input type="text" onChange={handleInputChange} name='nombreUsuario' value={values.nombreUsuario} className={style.nombre} placeholder='Nombre de usuario' />
            <textarea className={style.tweet} onChange={handleInputChange} name='descripcion' value={values.descripcion} placeholder='¿En qué estás pensando?'></textarea>
            <button className={style.btnEnviar}>Tweet</button>
        </form>
    </div>
  )
}

export default CrearTweet