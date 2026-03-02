import { Breadcrumbs } from '../../features/products/Breadcrumbs/Breadcrumbs';
import { ExpandableMenu } from '../../features/products/ExpandableMenu/ExpandableMenu';
import { FlexContainer } from '../../shared/ui/FlexContainer/FlexContainer';
import { Products } from '../../features/products/Products/Products';
import { Pagination } from '../../shared/ui/Pagination/Pagination';
import { useLoaderData, useParams } from 'react-router-dom';
import { CATEGORIES } from '../../constants/category';

export function ProductsList() {
  const { products, numberOfPages } = useLoaderData();
  const params = useParams();

  const foundCategory = CATEGORIES.find((c) => c.path === params.category);

  let foundSubcategory;

  if (params.subcategory) {
    foundSubcategory = foundCategory.subcategories.find(
      (sc) => sc.path === params.subcategory,
    );
  }
  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products
          headerText={
            foundSubcategory
              ? foundSubcategory.categoryName
              : foundCategory.categoryName
          }
          products={products}
        />
        <Pagination numberOfPages={numberOfPages} />
      </div>
    </FlexContainer>
  );
}
