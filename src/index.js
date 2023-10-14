import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Navbar } from './Navbar';
import { InfoMovie } from './InfoMovie';
import { Slider } from './Slider';
import {trailerOn} from './InfoMovie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <div className="contenedor-ppal">
    <Navbar/>
    <div className="texto">
      <InfoMovie movie="the-little-mermaid"/>
      <InfoMovie movie="the-black-demon"/>
      <InfoMovie movie="Avengers-Endgame" active="active"/>
      <InfoMovie movie="the-tank"/>
      <InfoMovie movie="the-65"/>
    </div>
    <Slider/>
    <div className="trailerON">
      <img className='close' onClick={trailerOn} src={`imagenes/close.png`} alt=""/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/TcMBFSGVi1c?si=sC26ecYb73-hkhvu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    </div>
  </div>
  
  
);

