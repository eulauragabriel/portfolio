import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <div className='container'>
      <div className='imagem-div'>
        <img className='img' src={require('../assets/about.png')} alt="about" />
      </div>
      <div className='text'>
        <h1><strong>Sobre mim</strong></h1>
        <p>Oi! Eu sou a Laura, atualmente estou no quarto semestre no Curso Superior de Tecnologia de Desenvolvimento de Software Multiplataforma na Fatec Prof. Jessen Vidal em São José dos Campos, SP.</p>

        <p>Sou bastante extrovertida e aprecio poder conversar, trocar experiências e aprender com as pessoas ao meu redor. Sou apaixonada por história e motivada pela vontade de desenvolver projetos que auxiliem a sociedade.</p>

        <p>Divido meu tempo em desenvolver projetos para a faculdade, praticar meus hobbies e estar com as pessoas importantes para mim. Sempre estou buscando coisas novas para fazer e me desafiar, e lugares novos para conhecer e explorar.</p>

        <a href="https://drive.google.com/file/d/1ym-v4sz0WaGa53HxN_CVwMlqSOrpvZe4/view?usp=sharing" target='_blank' rel="noopener noreferrer">currículo</a>
      </div>
    </div>
  );
};

export default About;