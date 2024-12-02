import React from 'react';
import '../styles/home.css'
import Laura from '../assets/laura.png'

function Home() {
  return (
    <div className="container">
        <div className="retangulo">
            <div className="conteudo-texto">
                <p>Oi, eu sou a Laura, uma estudante de desenvolvimento de software multiplataforma.</p>
                <br />
                <p>Atualmente no quarto semestre e aqui você vai encontrar um pouco sobre mim, meus projetos e experiências.</p>
            </div>
            <div className="conteudo-img">
                <img src={Laura} alt="laura" />
            </div>
        </div>
    </div>
  );
}

export default Home;
