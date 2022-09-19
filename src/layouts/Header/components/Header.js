import { useContext } from 'react';
import { AvailableQuestsContext } from 'context/AvailableQuestsContext';
import { CurrentQuestsContext } from 'context/CurrentQuestsContext';

import styles from './Header.module.scss';
import { List } from 'components/List';
import { ListItem } from 'components/ListItem';

export const Header = ({ className }) => {
  const { questList: availableQuests } = useContext(AvailableQuestsContext);
  const { questList: currentQuests } = useContext(CurrentQuestsContext);

  const availableQuestsCount = availableQuests.length;
  const currentQuestsCount = currentQuests.length;

  const classNames = [styles.header, className].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      <h2 className='h1'>Quest Log</h2>
      <List className={styles.list} variant='unstyled' inline center>
        <ListItem className={styles['accepted-quests']}>
          Current Quests: {currentQuestsCount}
        </ListItem>
        <ListItem>Available Quests: {availableQuestsCount}</ListItem>
      </List>
    </div>
  );
};
