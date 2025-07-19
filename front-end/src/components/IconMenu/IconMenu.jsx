import { Link } from 'react-router-dom';
import BAG_ICON from '../../assets/bag.svg';
import HEART from '../../assets/heart.svg';
import style from './IconMenu.module.css';

export function IconMenu() {
  const cartItems = 2;
  return (
    <div>
      <ul className={style.iconMenu}>
        <li>
          <Link to='/ulubione'>
            <img src={HEART} alt='heart-icon' />
          </Link>
        </li>
        <li>
          <Link to='/koszyk'>
            <img src={BAG_ICON} alt='bag-icon' />
            <div className={style.numberOfProducts}>{cartItems}</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
