import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginRequest } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthContext';
import { FullWidthButton } from '../../../shared/ui/FullWidthButton/FullWidthButton';
import styles from '../Auth.module.css';

export function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/kobieta';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setError('');

    try {
      const data = await loginRequest({ email, password });
      login(data);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  }

return (
  <main className={styles.authPage}>
    <section className={styles.card}>
      <div className={styles.intro}>
        <p>Witaj ponownie</p>
        <h2>Logowanie</h2>
        <span>Zaloguj się, aby przejść do koszyka i ulubionych produktów.</span>
      </div>

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
            autoComplete='current-password'
            required
          />
        </label>

        <FullWidthButton isBlack={true}>Zaloguj</FullWidthButton>
      </form>

      <p className={styles.links}>
        Nie masz konta? <Link to='/register'>Zarejestruj się</Link>
      </p>
    </section>
  </main>
);
}
