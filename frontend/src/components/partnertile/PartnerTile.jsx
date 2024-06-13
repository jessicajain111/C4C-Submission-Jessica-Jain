import React from 'react';
import './style.css'

function PartnerTile({ partnerID, partnerData, onDelete }) {
  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src={partnerData.thumbnailUrl} alt={partnerData.name} />
      <hr />
      <div className="partner-info">
        <h1>{partnerData.name}</h1>
        <p>{partnerData.description}</p>
        {partnerData.isActive ? (<p>Active</p>) : (<p>Inactive</p>)}
        <button
          className="partner-delete-button"
          onClick={() => onDelete(partnerID)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PartnerTile;
