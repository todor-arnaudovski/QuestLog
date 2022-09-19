import { AvailableQuestsProvider } from 'context/AvailableQuestsContext';
import { CurrentQuestsProvider } from 'context/CurrentQuestsContext';

import 'assets/styles/spacing.scss';
import 'assets/styles/global.scss';

import background from 'assets/images/backgrounds/main.jpg';

import { PageBackground } from 'components/PageBackground';
import { PageContentWrapper } from 'components/PageContentWrapper';
import { Grid } from 'components/Grid';
import { GirdItem } from 'components/Grid/GridItem';
import { Container } from 'components/Container';
import { Frame } from 'components/Frame';

import { Header } from 'layouts/Header';
import { AvailableQuests } from 'features/AvailableQuests';
import { CurrentQuests } from 'features/CurrentQuests';
import { QuestForm } from 'features/QuestForm';
import { Footer } from 'layouts/Footer';

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
                <CurrentQuests />
              </GirdItem>
              <GirdItem lg={6}>
                <AvailableQuests />
              </GirdItem>
              <GirdItem>
                <Frame>
                  <QuestForm />
                </Frame>
              </GirdItem>
            </Grid>
          </Container>
        </PageContentWrapper>
        <Footer className='py-3 py-lg-4'/>
      </CurrentQuestsProvider>
    </AvailableQuestsProvider>
  );
}

export default App;
