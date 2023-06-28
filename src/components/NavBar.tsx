import React, { useState } from 'react';
import '../css/NavBar.css'
import NewAppModal from './NewAppModal'
import { UserProps } from '../FrontendTypes';
import { useNavigate } from 'react-router-dom';

export default function NavBar({userId}: UserProps) {
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate();

  const handleNewAppClick = () => {
    setShowModal(!showModal);
  }

  return (
    <div>
    <div id='bar-container'>
      <button className='bar-display' onClick={() => navigate('/')}>
        Return to Welcome Page      
      </button>
      <button className='bar-display' onClick={handleNewAppClick}>
        Add New Application
      </button>
    </div>
    {showModal && <NewAppModal userId={userId} />}
    </div>
  );
}