import React, { useEffect, useRef, useState } from 'react';
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
      });
     
  }
  
  return (
    <div className="App">
      <h1 className = "header">Dope🔥 memes</h1>
      <div className = 'container'>
      {(isLoading)?<Spinner />:<img src = {url} className = 'real-image'/>}
      <button onClick = {getMeme}>New meme</button>
      </div>
      <h1 className = "footer">Crafted with ❤ by <a  href= "https://www.instagram.com/itzrahulyadav/">Rahul</a></h1>
    </div>
  );
}

export default App;
