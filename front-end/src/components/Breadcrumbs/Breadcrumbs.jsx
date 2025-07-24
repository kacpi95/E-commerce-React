import { NavLink } from 'react-router-dom';
import ARROW_ICON from '../../assets/arrow.svg';
import styles from './Breadcrumbs.module.css';

export function Breadcrumbs() {
  const breadcrumbs = [
    {
      categoryName: 'Kobieta',
      path: 'kobieta',
    },
    {
      categoryName: 'Odzież',
      path: 'odziez',
    },
    {
      categoryName: 'Swetry',
      path: 'swetry',
    },
  ];
  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((category) => {
        return (
          <li key={category.path}>
            <NavLink to={category.path}>
              {category.categoryName} <img src={ARROW_ICON} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
