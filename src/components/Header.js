import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#f8f9fa', padding: '1rem', textAlign: 'center' }}>
      <h1>Mon Site Affilié</h1>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/free-guide">Guide Gratuit</Link>
      </nav>
      {/* Hack réciprocité : CTA visible pour engagement progressif */}
      <Link to="/free-guide" className="cta-button">Téléchargez notre guide PDF gratuit !</Link>
    </header>
  );
};

export default Header;