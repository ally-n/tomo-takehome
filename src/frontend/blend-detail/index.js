//Added same functionality that spice-detail had but for blends.
//With more time, I would map through the spices in each blend so they can be on display

import './index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlendDetail = () => {
  const { id } = useParams();
  const [blend, setBlend] = useState(null);

  useEffect(async () => {
    const { data } = await axios.get(`/api/v1/blends/${id}`);
    setBlend(data);
  }, []);

  return (
    <div>
      <h2>Blend Detail Page</h2>
      {blend && (
        <div className="detail-container">
          <div>Blend Name: {blend.name}</div>
          <div>Description: {blend.description}</div>
        </div>
      )}
    </div>
  );
};

export default BlendDetail;
