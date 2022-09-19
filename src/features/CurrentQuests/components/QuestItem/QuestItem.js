import { useContext, useState } from 'react';
import { CurrentQuestsContext } from 'context/CurrentQuestsContext';
import { AvailableQuestsContext } from 'context/AvailableQuestsContext';

import styles from './QuestInfo.module.scss';

import { List } from 'components/List';
import { ListItem } from 'components/ListItem';
import { Badge } from 'components/Badge/Badge';
import { LevelInfo } from '../LevelInfo';
import { Button } from 'components/Button';

export const QuestItem = (props) => {
  const { id, title, description, level, isShareable, prerequisites } = props;
  const isShareableText = isShareable ? 'Shareable' : 'Not shareable';
  const [isRemoved, setIsRemoved] = useState(false);

  const { removeQuest } = useContext(CurrentQuestsContext);
  // const { makeQuestAvailable } = useContext(AvailableQuestsContext);

  const removeItemHandler = () => {
    setIsRemoved(true);

    const timer = setTimeout(() => {
      removeQuest(id);
      // makeQuestAvailable(id);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  };

  const classNames = [
    styles['quest-item'],
    isRemoved ? styles.removed : '',
    'bg-fade-light position-relative',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      <Badge position='top-left' color={`${isShareable ? 'success' : 'danger'}`}>
        {isShareableText}
      </Badge>
      <Button className={`${styles['remove-button']}`} variant='danger' onClick={removeItemHandler}>
        x
      </Button>
      <h4 className='h4'>{title}</h4>
      <p className='mb-1'>{description}</p>
      <LevelInfo level={level} />
      {prerequisites.length > 0 && (
        <div>
          <h5 className='h5'>Prerequisites:</h5>
          <List variant='unstyled'>
            {prerequisites.map((prerequisite, i) => {
              return <ListItem key={`${id}-${i}`}>{prerequisite}</ListItem>;
            })}
          </List>
        </div>
      )}
    </div>
  );
};
