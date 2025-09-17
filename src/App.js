import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [started, setStarted] = useState(false); // controla se o usuário clicou no botão
 
  const handleStart = () => {
    setStarted(true); // indica que o usuário clicou
    setShowSplash(true); // mostra a splash
   

  const fadeOut = (audio, duration) => {
    const stepTime = 50;
    const steps = duration /  stepTime;
    const stepVolume = audio.volume / steps;

    const fadeInterval = setInterval(() => {

      if (audio.volume - stepVolume > 0) {
        audio.volume -= stepVolume;
      }else{
        audio.volume = 0;
        audio.pause();
        clearInterval(fadeInterval)
      }

    }, stepTime);
  };


    const audio = new Audio("./audio/lambo.mp3");
    audio.volume= 1;
    audio.play();
    fadeOut(audio, 4000)


    setTimeout(() => {
      setShowSplash(false); // esconde a splash após 3 segundos
    }, 60000);
  };

  
  
  return (
    <div className="App">
      
      {!started ? (
        <button onClick={handleStart} className="start-button">
          Acelere
        </button>
      ) : showSplash ? (
        <div className="splash">
         
        </div>
      ) : 
        
        <div className="conteudo">
      
         <div class="boxCarro" id="1"></div>
         <div class="boxCarro" id="2"></div> 
         <div class="boxCarro" id="3"></div>

        </div>


      }
    </div>
  );
}

export default App;
