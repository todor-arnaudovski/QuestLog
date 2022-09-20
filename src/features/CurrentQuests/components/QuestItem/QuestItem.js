import { useContext, useState, useEffect } from 'react';
import { CurrentQuestsContext } from 'context/CurrentQuestsContext';
import { AvailableQuestsContext } from 'context/AvailableQuestsContext';

import styles from './QuestInfo.module.scss';

import { MdExpandMore, MdExpandLess, MdRemove } from 'react-icons/md';

import { List } from 'components/List';
import { ListItem } from 'components/ListItem';
import { Badge } from 'components/Badge/Badge';
import { LevelInfo } from '../LevelInfo';
import { Button } from 'components/Button';

export const QuestItem = (props) => {
  const { id, title, description, level, isShareable, prerequisites } = props;
  const [prereqList, setPrereqList] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isRemoved, setIsRemoved] = useState(false);
  
  const isShareableText = isShareable ? 'Shareable' : 'Not shareable';

  const { removeQuest } = useContext(CurrentQuestsContext);
  const { questList: availableQuestsList } = useContext(AvailableQuestsContext);

  useEffect(() => {
    setPrereqList(() => {
      return prerequisites.map((prereq) => {
        return availableQuestsList.find((quest) => {
          return quest.id === prereq;
        });
      });
    });
  }, [prerequisites, availableQuestsList]);

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
      <h4 className='h4'>{title}</h4>
      {!isCollapsed && (
        <div className={styles['quest-body']}>
          <p className='mb-1'>{description}</p>
          <LevelInfo level={level} />
          {prereqList.length > 0 && (
            <div>
              <h5 className='h5'>Prerequisites:</h5>
              <List variant='unstyled'>
                {prereqList.map((prereq, i) => {
                  return <ListItem key={`${id}-${i}`}>{prereq.title}</ListItem>;
                })}
              </List>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
