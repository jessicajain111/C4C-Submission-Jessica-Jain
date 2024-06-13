import { useState, useEffect } from 'react';
import PartnerTile from '../partnertile/PartnerTile';
import PartnerForm from '../partnerform/PartnerForm';
import './style.css';

function Dashboard() {
  const [partners, setPartners] = useState({});

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000/api/partners', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      setPartners(data);
    })
    .catch((error) => {
      console.error('Error fetching partners:', error);
    });
  }, []);

  // Delete partner function
  const deletePartner = (id) => {
    fetch(`http://localhost:4000/api/partners/${id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then(() => {
      setPartners((prevPartners) => {
        const updatedPartners = { ...prevPartners };
        delete updatedPartners[id];
        return updatedPartners;
      });
    })
    .catch((error) => {
      console.error('Error deleting partner:', error);
    });
  };

  // Add partner function
  const onPartnerAdded = (id, newPartner) => {
    setPartners((prevPartners) => ({
      ...prevPartners,
      [id]: newPartner,
    }));
  };

  return (
    <div className='dashboardContainer'>
      <PartnerForm onPartnerAdded={onPartnerAdded} />
      <div>
        {Object.keys(partners).map((key) => (
          <PartnerTile
            key={key}
            partnerID={key}
            partnerData={partners[key]}
            onDelete={deletePartner}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
