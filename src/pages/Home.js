import React from 'react';
import ProductCard from '../components/ProductCard';
import SocialProofPopup from '../components/SocialProofPopup';

// Charge dynamiquement les fichiers JSON depuis src/data/products
const productsContext = require.context('../data/products', false, /\.json$/);
const products = productsContext.keys().map((key, index) => ({
  id: index + 1, // ID simple basé sur l'index (ou utilise un champ id dans JSON si défini)
  ...productsContext(key),
}));

const Home = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem' }}>
      {/* Limite à 6 produits pour simplicité et performance */}
      {products.slice(0, 6).map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          affiliateLink={product.affiliateLink}
          image={product.image}
        />
      ))}
      {/* Hack preuve sociale : Pop-up discret */}
      <SocialProofPopup />
      {/* Hack preuve sociale : Section avis statique */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}>
        <h3>Avis Clients</h3>
        <p>"Super produit, livraison rapide !" - Sophie D.</p>
        <p>"Vraiment satisfait, je recommande !" - Julien M.</p>
      </div>
    </div>
  );
};

export default Home;