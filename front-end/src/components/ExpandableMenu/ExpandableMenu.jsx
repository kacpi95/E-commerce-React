import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../constants/category';

export function ExpandableMenu() {
  return (
    <div>
      <p>Kobieta</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>{category.categoryName}</NavLink>
              <ul>
                {category.subcategories.map((subcategory) => {
                  return (
                    <li key={subcategory.path}>
                      <NavLink to={subcategory.path}>
                        {subcategory.categoryName}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
