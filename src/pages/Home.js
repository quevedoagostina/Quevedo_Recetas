import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <img 
          src="https://news.files.bbci.co.uk/include/vjamericas/224-argentina-inflation/assets/app-project-assets/img/recipe/asado.png?v=1.0.36" 
          alt="Asado" 
          className="hero-image" 
        />
        <h1>Bienvenido a Quevedo Recetas</h1>
        <p>Descubre y comparte las mejores recetas de la cocina argentina</p>
        <Link to="/recipes" className="cta-button">Ver Recetas</Link>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Explora</h2>
          <p>Descubre una variedad de deliciosas recetas argentinas.</p>
        </div>
        <div className="feature">
          <h2>Crea</h2>
          <p>Comparte tus propias recetas con la comunidad.</p>
        </div>
        <div className="feature">
          <h2>Aprende</h2>
          <p>Mejora tus habilidades culinarias con nuestros consejos.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;