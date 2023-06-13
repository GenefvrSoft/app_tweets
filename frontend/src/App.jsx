import { useState } from 'react'
import style from './App.module.css';
import CardTweet from './components/CardTweet/CardTweet'
import CrearTweet from './components/crearTweet/crearTweet'
import { dataDefault } from './utils/dataDefault'
import { useEffect } from 'react'
import { getTweetsAction } from './actions/tweetsActions'


function App() {
  const checkLocalStorage = JSON.parse( localStorage.getItem('tweets') );
  localStorage.setItem('tweets', JSON.stringify( checkLocalStorage ? checkLocalStorage : dataDefault));
  const [tweets, setTweets] = useState(checkLocalStorage ? checkLocalStorage : dataDefault);

  useEffect(() => {
    const getDataTweets = async () => {  // corregir esta parte
      const data = await getTweetsAction();
      if( data.tweets.length ) {
        const allTweets = [...data.tweets, ...tweets];
        setTweets(allTweets);
        localStorage.setItem('tweets', JSON.stringify(allTweets))
      }
      console.log(data)
    }
    getDataTweets()
  }, [])
  

  return (
    <div className={style.main}>
      <h2 className={style.titulo}>Bienvenido Usuario!</h2>
      <CrearTweet tweets={tweets} setTweets={setTweets} />
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
