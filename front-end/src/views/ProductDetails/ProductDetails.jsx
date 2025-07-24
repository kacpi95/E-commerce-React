import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu';
import { FlexContainer } from '../../components/FlexContainer/FlexContainer';
import { Layout } from '../../components/Layout/Layout';

export function ProductDetails() {
  return (
    <Layout>
      <FlexContainer>
        <ExpandableMenu />
        <Breadcrumbs />
      </FlexContainer>
    </Layout>
  );
}
