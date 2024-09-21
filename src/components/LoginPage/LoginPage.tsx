import React, { useEffect, useState } from 'react';
import mainImg from '../../assets/img/MainImg.webp';
import styles from './LoginPage.module.scss';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const LoginPage: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const openPopup = () => {
    setSubmitted(false);
    setPopupOpen(true);
  };

  const closePopup = () => setPopupOpen(false);

  const handleSuccess = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      window.location.href = `https://www.dating.com/people/#token=${token}`;
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img 
          src={mainImg} 
          alt="People and Heart" 
          loading="lazy" 
        />
      </div>

      <div className={styles.textContainer}>
        <h2>How to Participate</h2>
        <ol>
          <li>Subscribe to our News</li>
          <li>
            <Button onClick={openPopup} label="SIGN UP" />
          </li>
          <li>Check your email inbox</li>
          <li>Wait till September 22</li>
        </ol>
      </div>

      <Modal isOpen={isPopupOpen} onClose={closePopup}>
        {!isSubmitted ? (
          <RegistrationForm onSuccess={handleSuccess} />
        ) : (
          <div>
            <h2>Thank You</h2>
            <p>Your registration was successful!</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LoginPage;
