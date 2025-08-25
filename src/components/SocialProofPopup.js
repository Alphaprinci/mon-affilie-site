import React, { useState, useEffect } from 'react';

const SocialProofPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px', background: '#fff', padding: '1rem', border: '1px solid #ddd' }}>
      Marie vient d'acheter ce produit à 14h23.
      <button onClick={() => setShow(false)}>X</button>
    </div>
  );
};

export default SocialProofPopup;