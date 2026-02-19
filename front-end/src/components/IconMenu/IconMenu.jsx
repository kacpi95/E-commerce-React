import { Link } from 'react-router-dom';
import BAG_ICON from '../../assets/bag.svg';
import HEART from '../../assets/heart.svg';
import styles from './IconMenu.module.css';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';

export function IconMenu() {
  const { user, logout } = useContext(AuthContext);
  const [cartItems] = useContext(CartContext);
  const count = cartItems.length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.auth}>
        {!user ? (
          <>
            <Link className={styles.authLink} to='/login'>
              Zaloguj
            </Link>
            <Link className={styles.authBtn} to='/register'>
              Rejestracja
            </Link>
          </>
        ) : (
          <>
            <span className={styles.userEmail} title={user.email}>
              {user.email}
            </span>
            <button className={styles.logoutBtn} onClick={logout} type='button'>
              Wyloguj
            </button>
          </>
        )}
      </div>

      <ul className={styles.iconMenu}>
        <li>
          <Link
            className={styles.iconLink}
            to='/ulubione'
            aria-label='Ulubione'
          >
            <img src={HEART} alt='' />
          </Link>
        </li>
        <li>
          <Link className={styles.iconLink} to='/koszyk' aria-label='Koszyk'>
            <img src={BAG_ICON} alt='' />
            {count > 0 && (
              <div className={styles.numberOfProducts}>{count}</div>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}
