import React from "react";
import './home.css';
import Logo from '../../assets/nc3.png';

export default function Home(){
    return(
        <div className="container-home">
            <h1 className="titulo">Page de Home</h1>
            <h1 className="titulo">Vai ser a tela de login</h1>
            <img src={Logo}/>
        </div>
    )
}