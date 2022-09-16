import { useContext } from 'react';
import { QuestsContext } from 'context/QuestsContext';

import styles from './QuestList.module.scss';

import { List } from 'components/List';
import { ListItem } from 'components/ListItem';
import { QuestItem } from './QuestItem';

export const QuestList = ({ className }) => {
  const { questList } = useContext(QuestsContext);

  const classNames = [styles['quest-list'], className, 'pt-1 ps-1 pe-2']
    .filter(Boolean)
    .join(' ');

  return (
    <div>
      <h3 className='h3 text-center'>Available Quests</h3>
      <List className={classNames} variant='unstyled'>
        {questList &&
          questList.map((quest) => {
            return (
              <ListItem key={quest.id} className='mb-3'>
                <QuestItem {...quest} />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};
