import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu';
import { Layout } from '../../components/Layout/Layout';
import { FlexContainer } from '../../components/FlexContainer/FlexContainer';

export function ProductsList() {
  return (
    <Layout>
      <FlexContainer>
        <ExpandableMenu />
        <Breadcrumbs />
      </FlexContainer>
    </Layout>
  );
}
