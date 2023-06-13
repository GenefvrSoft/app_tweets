import style from './cardTweet.module.css';
import borrarIcon from '../../assets/borrarIcon.png';
import bordeCorazon from '../../assets/iconoCorazon.png';
import corazonRojo from '../../assets/iconoRojo.png';
import { eliminarTweetAction, statusFavoritoAction } from '../../actions/tweetsActions'
import { alertDeleteItems, alertSuccess } from '../../utils/alert'


function CardTweet({nombreUsuario, id, descripcion, favorito, tweets, setTweets}) {
  const isTweetCreatedByUser = typeof id === 'number';

  const handleFavoriteButton = async () => {
    alertSuccess(!favorito ? 'Marcado como favorito' : 'Desmarcado como favorito')
    if( isTweetCreatedByUser ) {
      await statusFavoritoAction({ id, favorito: !favorito });
    }
    const dataActualizada = tweets.map( tweet => tweet.id === id ? ({...tweet, favorito: !tweet.favorito}) : tweet );
    localStorage.setItem('tweets', JSON.stringify(dataActualizada))
    setTweets(dataActualizada);
  }

  const handleDeleteButton = async () => {
    const validacion = await alertDeleteItems('¿Eliminar Tweet?');
    if( validacion ) {
        isTweetCreatedByUser && await eliminarTweetAction(id); // si el tweet no es los 3 que estan por defecto, eliminarlo de la BD
        const excluirTweetRemovido = tweets.filter(tweet => tweet.id !== id);        
        setTweets(excluirTweetRemovido);
        localStorage.setItem('tweets', JSON.stringify(excluirTweetRemovido));
        alertSuccess('Tweet removido exitosamente!')
    }   
  }

  return (
    <div className={style.content}>
      <div className={style.headerCard}>
        <div className={style.circleName}>{nombreUsuario?.slice(0,1)}</div>
        <p>{nombreUsuario}</p>
      </div>
      <div className={style.tweet}>
        <p>{descripcion}</p>
      </div>
      <div>
        <div className={style.likeIcon} onClick={handleFavoriteButton}>
          <img src={favorito ? corazonRojo : bordeCorazon} alt="likeIcon" />
        </div>
        <div className={style.borrarIcon} onClick={handleDeleteButton}>
          <img src={borrarIcon} alt="borrarIcon" />
        </div>
      </div>
    </div>
  )
}

export default CardTweet