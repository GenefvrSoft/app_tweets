import style from './cardTweet.module.css';
import borrarIcon from '../../assets/borrarIcon.png';
import bordeCorazon from '../../assets/iconoCorazon.png';
import corazonRojo from '../../assets/iconoRojo.png';
import { statusFavoritoAction } from '../../actions/tweetsActions'


function CardTweet({nombreUsuario, id, descripcion, favorito, tweets, setTweets}) {

  const handleFavoriteButton = async () => {
    if( !id.includes('d') ) {
      await statusFavoritoAction({ id, favorito: !favorito });
    }
    const dataActualizada = tweets.map( tweet => tweet.id === id ? ({...tweet, favorito: !tweet.favorito}) : tweet );
    localStorage.setItem('tweets', JSON.stringify(dataActualizada))
    setTweets(dataActualizada);
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
        <div className={style.borrarIcon} onClick={ (e) => {e.stopPropagation();}}>
          <img src={borrarIcon} alt="borrarIcon" />
        </div>
      </div>
    </div>
  )
}

export default CardTweet