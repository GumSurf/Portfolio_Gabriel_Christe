const PolitiqueConfidentialite = () => {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Politique de Confidentialité</h1>
        <h2 className="text-xl font-semibold">Collecte des données</h2>
        <p>Les seules données personnelles collectées sur ce site sont celles fournies via le formulaire de contact 
            (nom, email, message). Ces informations sont strictement confidentielles.</p>
  
        <h2 className="text-xl font-semibold mt-6">Utilisation des données</h2>
        <p>Les données collectées servent uniquement à répondre aux demandes et ne sont en aucun cas partagées avec des tiers.</p>
  
        <h2 className="text-xl font-semibold mt-6">Droits des utilisateurs</h2>
        <p>Conformément au RGPD, vous pouvez demander la suppression ou la modification de vos données 
            personnelles en envoyant un email à gabriel.christe@gmail.com.</p>
      </div>
    );
  };
  
  export default PolitiqueConfidentialite;
  