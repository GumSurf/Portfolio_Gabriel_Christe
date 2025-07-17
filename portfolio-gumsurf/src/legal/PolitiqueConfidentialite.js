const PolitiqueConfidentialite = () => {
    return (
      <div className="politique-confidentialite-container">
        <h1 className="politique-confidentialite-title">Politique de Confidentialité</h1>
        <h2 className="politique-confidentialite-section-title">Collecte des données</h2>
        <p className="politique-confidentialite-content">Les seules données personnelles collectées sur ce site sont celles fournies via le formulaire de contact 
            (nom, email, message). Ces informations sont strictement confidentielles.</p>
  
        <h2 className="politique-confidentialite-section-title">Utilisation des données</h2>
        <p className="politique-confidentialite-content">Les données collectées servent uniquement à répondre aux demandes et ne sont en aucun cas partagées avec des tiers.</p>
  
        <h2 className="politique-confidentialite-section-title">Droits des utilisateurs</h2>
        <p className="politique-confidentialite-content">Conformément au RGPD, vous pouvez demander la suppression ou la modification de vos données 
            personnelles en envoyant un email à <a href="mailto:gabriel.christe@gmail.com">gabriel.christe@gmail.com</a>.</p>
      </div>
    );
  };
  
  export default PolitiqueConfidentialite;
