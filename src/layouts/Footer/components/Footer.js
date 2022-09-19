import styles from './Footer.module.scss';

import logo from 'assets/images/logo.png';

import { Grid } from 'components/Grid';
import { GirdItem } from 'components/Grid/GridItem';
import { Container } from 'components/Container';

export const Footer = ({ className }) => {
  const classNames = [styles.footer, className, 'text-center'].filter(Boolean).join(' ');

  return (
    <footer className={classNames}>
      <Container>
        <div className={`${styles.logo} mx-auto mb-1 mb-lg-2`}>
          <img src={logo} />
        </div>
        <span>Copyright 2022</span>
      </Container>
    </footer>
  );
};
