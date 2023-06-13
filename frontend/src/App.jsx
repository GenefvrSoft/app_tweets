import { useState } from 'react'
import style from './App.module.css';
import CardTweet from './components/CardTweet/CardTweet'
import CrearTweet from './components/crearTweet/crearTweet'
import { dataDefault } from './utils/dataDefault'
import { useEffect } from 'react'
import { getTweetsAction } from './actions/tweetsActions'


function App() {
  const checkLocalStorage = JSON.parse( localStorage.getItem('tweets') );
  const mainData = checkLocalStorage ? checkLocalStorage : dataDefault;
  localStorage.setItem('tweets', JSON.stringify(mainData));
  const [tweets, setTweets] = useState(mainData);

  useEffect(() => {
    const getDataTweets = async () => {
      const data = await getTweetsAction();
      if( data.tweets.length ) {
        const tweetsByDefault = JSON.parse( localStorage.getItem('tweets') )?.filter(tweet => typeof tweet.id === 'string') || [];
        const allTweets = [...data.tweets, ...tweetsByDefault];
        setTweets(allTweets);
        localStorage.setItem('tweets', JSON.stringify(allTweets))
      }
    }
    getDataTweets()
  }, [])
  

  return (
    <div className={style.main}>
      <h2 className={style.titulo}>Bienvenido Usuario!</h2>
      <CrearTweet tweets={tweets} setTweets={setTweets} />
      <h3 className={style.feed}>Feed</h3>
      {
        tweets.length > 0 && 
          tweets.map(tweet => (
            <CardTweet 
              key={tweet.id}
              nombreUsuario={tweet.nombreUsuario}
              id={tweet.id}
              descripcion={tweet.descripcion}
              favorito={tweet.favorito}
              tweets={tweets} 
              setTweets={setTweets}
            />
          ))
      }
      
    
    </div>
  )
}

export default App
