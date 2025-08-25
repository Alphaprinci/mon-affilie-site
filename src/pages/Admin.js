import React from 'react';
import CMS from 'decap-cms-app';
import 'netlify-identity-widget/build/netlify-identity-widget'; // Pour auth

// Initialise CMS (config chargée depuis public/admin/config.yml)
CMS.init();

const Admin = () => {
  return (
    <div>
      <h1>Dashboard Admin</h1>
      {/* Le CMS se charge ici automatiquement */}
    </div>
  );
};

export default Admin;