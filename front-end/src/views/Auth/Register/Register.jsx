import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthContext';
import { FullWidthButton } from '../../../shared/ui/FullWidthButton/FullWidthButton';
import styles from '../Auth.module.css';

export function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setError('');

    if (password !== password2) {
      setError('Hasła muszą być takie same');
      return;
    }

    try {
      const data = await registerRequest({ email, password });
      login(data);
      navigate('/kobieta', { replace: true });
    } catch (err) {
      setError(err.message || 'Register failed');
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Rejestracja</h2>

      {error && <div className={styles.error}>{error}</div>}

      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
            required
          />
        </label>

        <label className={styles.label}>
          Hasło
          <input
            className={styles.input}
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='new-password'
            required
          />
        </label>

        <label className={styles.label}>
          Powtórz hasło
          <input
            className={styles.input}
            type='password'
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            autoComplete='new-password'
            required
          />
        </label>

        <FullWidthButton isBlack={true}>Utwórz konto</FullWidthButton>
      </form>

      <p className={styles.links}>
        Masz konto? <Link to='/login'>Zaloguj się</Link>
      </p>
    </div>
  );
}
