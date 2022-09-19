import { AvailableQuestsProvider } from 'context/AvailableQuestsContext';
import { CurrentQuestsProvider } from 'context/CurrentQuestsContext';

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
import { AvailableQuests } from 'features/AvailableQuests';
import { CurrentQuests } from 'features/CurrentQuests';
import { QuestForm } from 'features/QuestForm';

function App() {
  return (
    <AvailableQuestsProvider>
      <CurrentQuestsProvider>
        <PageBackground background={background} />
        <PageContentWrapper className='my-3 my-lg-4'>
          <Container>
            <Frame className='mb-3 mb-lg-4'>
              <Header />
            </Frame>
            <Grid>
              <GirdItem lg={6}>
                <Frame className='mb-3 mb-lg-4'>
                  <CurrentQuests />
                </Frame>
              </GirdItem>
              <GirdItem lg={6}>
                <Frame className='mb-3 mb-lg-4'>
                  <AvailableQuests />
                </Frame>
              </GirdItem>
              <GirdItem>
                <Frame>
                  <QuestForm />
                </Frame>
              </GirdItem>
            </Grid>
          </Container>
        </PageContentWrapper>
      </CurrentQuestsProvider>
    </AvailableQuestsProvider>
  );
}

export default App;
