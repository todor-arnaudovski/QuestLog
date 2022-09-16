import { QuestsProvider } from 'context/QuestsContext';

import 'assets/styles/spacing.scss';
import 'assets/styles/global.scss';
import { PageBackground } from 'components/PageBackground';
import { PageContentWrapper } from 'components/PageContentWrapper';
import { Grid } from 'components/Grid';
import { GirdItem } from 'components/Grid/GridItem';
import { Container } from 'components/Container';
import { Frame } from 'components/Frame';

import background from 'assets/images/backgrounds/main.jpg';
import { Header } from 'layouts/Header';
import { QuestList } from 'features/QuestList';
import { QuestForm } from 'features/QuestForm';

function App() {
  return (
    <QuestsProvider>
      <PageBackground background={background} />
      <PageContentWrapper content='center'>
        <Container>
          <Frame className='mb-5'>
            <Header />
          </Frame>
          <Grid>
            <GirdItem lg={6}>
              <Frame className='mb-4 mb-lg-0'>
                <QuestList/>
              </Frame>
            </GirdItem>
            <GirdItem lg={6}>
              <Frame className='mb-4 mb-lg-0'>
                <QuestForm />
              </Frame>
            </GirdItem>
          </Grid>
        </Container>
      </PageContentWrapper>
    </QuestsProvider>
  );
}

export default App;
