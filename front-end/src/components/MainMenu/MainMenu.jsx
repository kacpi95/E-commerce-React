import { NavLink } from 'react-router-dom';

export function MainMenu() {
  const genders = [
    {
      categoryName: 'Kobieta',
      path: 'kobieta',
    },
    {
      categoryName: 'Mężczyzna',
      path: 'mezczyzna',
    },
    {
      categoryName: 'Dziecko',
      path: 'dziecko',
    },
  ];
  return (
    <>
      <ul>
        {genders.map((category) => {
          return (
            <NavLink key={category.path} to={category.path}>
              {category.categoryName}
            </NavLink>
          );
        })}
      </ul>
    </>
  );
}
