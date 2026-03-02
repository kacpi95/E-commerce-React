import { useLoaderData } from 'react-router-dom';
import { Breadcrumbs } from '../../features/products/Breadcrumbs/Breadcrumbs';
import { Details } from '../../features/products/Details/Details';
import { ExpandableMenu } from '../../features/products/ExpandableMenu/ExpandableMenu';
import { FlexContainer } from '../../shared/ui/FlexContainer/FlexContainer';
import { Photos } from '../../features/products/Photos/Photos';

export function ProductDetails() {
  const product = useLoaderData();

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div style={{ width: '100%' }}>
        <Breadcrumbs />
        <FlexContainer>
          <Photos product={product} />
          <Details product={product} />
        </FlexContainer>
      </div>
    </FlexContainer>
  );
}
