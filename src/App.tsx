import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Spinner from './Spinner';
const API = 'https://meme-api.com/gimme';
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
      });
     
  }
  
  return (
    <div className="App">
      <h1 className = "header">Random memes</h1>
      <div className = 'container'>
      {(isLoading)?<Spinner />:<img src = {url} className = 'real-image'/>}
      <button onClick = {getMeme}>New meme</button>
      </div>
      
    </div>
  );
}

export default App;
