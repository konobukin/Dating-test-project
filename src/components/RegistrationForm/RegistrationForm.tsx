import React, { useState } from 'react';
import styles from './RegistrationForm.module.scss';
import { FaExclamationCircle } from 'react-icons/fa';
import { useRegisterMutation, useLazyLoginQuery } from '../../api/apiSlice';

interface RegistrationFormProps {
  onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const [register] = useRegisterMutation();
  const [loginTrigger] = useLazyLoginQuery();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    try {
      const loginResult = await loginTrigger({ email, password }).unwrap();
      const token = loginResult?.token;

      if (token) {
        localStorage.setItem('authToken', token);
        window.location.href = `https://www.dating.com/people/#token=${token}`;
        return;
      }
    } catch (e) {
      console.log('Authorization failed, proceeding with registration...');
    }

    try {
      const registerResult = await register({ email, password }).unwrap();
      const token = registerResult?.token;

      if (token) {
        localStorage.setItem('authToken', token);
        onSuccess();
        window.location.href = `https://www.dating.com/people/#token=${token}`;
      } else {
        setError('Error during registration');
      }
    } catch (e) {
      setError('Error occurred during registration');
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>To register, enter the mail to which our news is sent and set your password</h2>

        <div className={styles.inputWrapper}>
          <input
            type="email"
            placeholder="Example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? styles.errorInput : ''}
            required
          />
          {error && (
            <div className={styles.error}>
              <FaExclamationCircle className={styles.errorIcon} />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className={styles.inputWrapper}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? styles.errorInput : ''}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>

        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
    </div>
  );
};

export default RegistrationForm;
