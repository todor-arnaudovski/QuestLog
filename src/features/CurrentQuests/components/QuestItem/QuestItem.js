import { useContext, useState } from 'react';
import { CurrentQuestsContext } from 'context/CurrentQuestsContext';

import styles from './QuestInfo.module.scss';

import { MdExpandMore, MdExpandLess, MdRemove } from 'react-icons/md';

import { List } from 'components/List';
import { ListItem } from 'components/ListItem';
import { Badge } from 'components/Badge/Badge';
import { LevelInfo } from '../LevelInfo';
import { Button } from 'components/Button';

export const QuestItem = (props) => {
  const { id, title, description, level, isShareable, prerequisites } = props;
  const isShareableText = isShareable ? 'Shareable' : 'Not shareable';
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isRemoved, setIsRemoved] = useState(false);

  const { removeQuest } = useContext(CurrentQuestsContext);

  const collapseItemHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  const removeItemHandler = () => {
    setIsRemoved(true);

    const timer = setTimeout(() => {
      removeQuest(id);
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
      <div className={styles['content-controls']}>
        <Button variant='warning' onClick={collapseItemHandler}>
          {isCollapsed ? <MdExpandMore /> : <MdExpandLess />}
        </Button>
        <Button variant='danger' onClick={removeItemHandler} disabled={isRemoved}>
          <MdRemove />
        </Button>
      </div>
      <h4 className={`${isCollapsed ? 'h4' : 'h3'}`}>{title}</h4>
      {!isCollapsed && (
        <div className={styles['quest-body']}>
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
      )}
    </div>
  );
};
