import { useContext } from 'react';
import { QuestsContext } from 'context/QuestsContext';

import styles from '../assets/styles/Header.module.scss';
import { List } from 'components/List';
import { ListItem } from 'components/ListItem';

export const Header = ({ className }) => {
  const { questList } = useContext(QuestsContext);

  const currentQuestsCount = questList.length;

  const classNames = [styles.header, className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <h2 className='h1'>Quest Log</h2>
      <List className={styles.list} variant='unstyled' inline center>
        <ListItem>Available Quests: ...</ListItem>
        <ListItem className={styles['accepted-quests']}>Accepted Quests: {currentQuestsCount}</ListItem>
      </List>
    </div>
  );
};
