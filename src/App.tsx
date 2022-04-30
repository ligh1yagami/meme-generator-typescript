import React, { useEffect, useState } from 'react';
import './App.css';
import Spinner from './Spinner';
const API = 'https://meme-api.herokuapp.com/gimme';
interface state 
{
   url:string;
}
function App() {
  const [url,setUrl] = useState<state | any>('hello');
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    getMeme()
  },[])
  const getMeme = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        setIsLoading(false);
        setUrl(data.url);
        console.log(data.url);
      })
  }
  
  return (
    <div className="App">
      <h1>Memes on Click</h1>
      <div className = 'container'>
      {(isLoading)?<Spinner />:<img src = {url} className = 'real-image'/>}
      <button onClick = {getMeme}>Get meme</button>
      </div>
    </div>
  );
}

export default App;
