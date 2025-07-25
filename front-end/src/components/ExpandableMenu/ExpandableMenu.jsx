import { NavLink, useParams } from 'react-router-dom';
import { CATEGORIES } from '../../constants/category';
import AROW_ICON from '../../assets/arrow.svg';
import styles from './ExpandableMenu.module.css';

export function ExpandableMenu() {
  const params = useParams();
  console.log('parametry', params);
  const activePath = params.category;
  return (
    <div className={styles.expandableMenu}>
      <p>{params.gender}</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={`/${params.gender}/${category.path}`}>
                {category.categoryName}{' '}
                <img
                  src={AROW_ICON}
                  className={
                    activePath === category.path ? styles.expanded : ''
                  }
                />
              </NavLink>
              {activePath === category.path && (
                <ul>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.path}>
                        <NavLink
                          to={`/${params.gender}/${params.category}/${subcategory.path}`}
                        >
                          {subcategory.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
