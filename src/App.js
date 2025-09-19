import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [started, setStarted] = useState(false);
  const [appBranco, setAppBranco] = useState(false); 

  const handleStart = () => {
    setStarted(true); 
    setShowSplash(true); 


    const fadeOut = (audio, duration) => {
      const stepTime = 50;
      const steps = duration / stepTime;
      const stepVolume = audio.volume / steps;

      const fadeInterval = setInterval(() => {

        if (audio.volume - stepVolume > 0) {
          audio.volume -= stepVolume;
        } else {
          audio.volume = 0;
          audio.pause();
          clearInterval(fadeInterval)
        }

      }, stepTime);
    };


    const audio = new Audio("./audio/lambo.mp3");
    audio.volume = 1;
    audio.play();
    fadeOut(audio, 4000)

    setTimeout(() => {
      setAppBranco(true)
    }, 1000);
    setTimeout(() => {
      setShowSplash(false); 
    }, 5000);
  };



  return (
    <div className={!appBranco ? "App" : "App2"}>

      {!started ? (
        
          <button onClick={handleStart} className="start-button">
            Acelere
          </button>
      ) : showSplash ? (
        <div className="splash">

        </div>
      ) :

        
      
        <div className="conteudo">

          <div className="boxCarro" id="um"> <img src="./img/side_view_Lamborghini_Urus_Pearl_Capsule_2021_1-removebg-preview.png"/><p>Lamburguine Urus</p></div> 
          <div className="boxCarro" id="dois"> <img src='./img/2025-temerario-lamborghini-13kgxeeeeee0rm44spet44l-removebg-preview.png'/> <p>Lamborguine Temerario</p></div>
          <div className="boxCarro" id="tres"> <img src="./img/Lamborghini-Revuelto-2023-6-1-removebg-preview.png"/> <p>Lamborguine Revuelto</p></div> 

        </div>


      }
    </div>
  );
}

export default App;
