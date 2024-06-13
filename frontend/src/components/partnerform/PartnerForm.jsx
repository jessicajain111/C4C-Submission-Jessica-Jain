import React, { useState } from 'react';
import './style.css'

function PartnerForm({ onPartnerAdded }) {
  const[showForm, setShowForm] = useState(false);
  const [partner, setPartner] = useState({
    name: '',
    description: '',
    thumbnailUrl: '',
    isActive: false, // Add this new field
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
  
    setPartner({
      ...partner,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now().toString();

    fetch('http://localhost:4000/api/partners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        partner: {
          name: partner.name,
          description: partner.description,
          thumbnailUrl: partner.thumbnailUrl,
          isActive: partner.isActive,
        }
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Submitted partner:', data);
      setShowForm(false);
      setPartner({
        name: '',
        description: '',
        thumbnailUrl: '',
      });
      if (onPartnerAdded) {
        onPartnerAdded(id, data.partners[id]); // Pass id and partner data to callback
      }
    })
    .catch((error) => {
      console.error('Error submitting partner:', error);
    });
  };

  return (
    <div>
      <button className="add-partner-button" onClick={() => setShowForm(!showForm)}>
        + Add Partner Info
      </button>
      {showForm && (
        <div className="partner-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Partner name</label>
              <input
                type="text"
                name="name"
                value={partner.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Partner description</label>
              <input
                type="text"
                name="description"
                value={partner.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Thumbnail URL</label>
              <input
                type="text"
                name="thumbnailUrl"
                value={partner.thumbnailUrl}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="isActive"
                  checked={partner.isActive}
                  onChange={handleChange}
                />
                Active
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PartnerForm;
