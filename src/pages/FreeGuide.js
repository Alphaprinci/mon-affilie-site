import React from 'react';

const FreeGuide = () => {
  return (
    <div>
      <h2>Téléchargez notre guide gratuit !</h2>
      <p>En échange de votre email, recevez des tips exclusifs (et des recos affiliées par email).</p>
      {/* Netlify Forms : simple, gratuit */}
      <form name="lead-magnet" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="lead-magnet" />
        <input type="email" name="email" placeholder="Votre email" required />
        <button type="submit">Télécharger</button>
      </form>
      {/* Après submit, Netlify envoie l'email à toi ; tu peux répondre manuellement avec le PDF */}
    </div>
  );
};

export default FreeGuide;