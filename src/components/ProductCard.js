import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';

const ProductCard = ({ id, name, price, affiliateLink, image }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem', maxWidth: '300px' }}>
      <img src={image} alt={name} style={{ width: '100%' }} />
      <h3>{name}</h3>
      <p>Prix : {price}€</p>
      {/* Hack urgence/rareté */}
      <CountdownTimer deadline="2025-08-26T00:00:00" />
      <span style={{ color: 'red' }}>Stock limité : Seulement 3 disponibles !</span>
      {/* Hack preuve sociale */}
      <p>+120 clients satisfaits</p>
      {/* Hack autorité */}
      <p>Recommandé par Alpha Princi, expert en [thème]</p>
      {/* Hack simplicité */}
      <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="cta-button">Acheter maintenant</a>
      <Link to={`/product/${id}`}>En savoir plus</Link>
    </div>
  );
};

export default ProductCard;