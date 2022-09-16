import styles from './QuestInfo.module.scss';

import { List } from 'components/List';
import { ListItem } from 'components/ListItem';
import { Badge } from 'components/Badge/Badge';
import { LevelInfo } from '../LevelInfo';

export const QuestItem = (props) => {
  const { id, title, description, level, isShareable, prerequisites } = props;
  const isShareableText = isShareable ? 'Shareable' : 'Not shareable';

  return (
    <div className={`${styles['quest-item']} bg-fade-light position-relative`}>
      <Badge
        position='top-right'
        color={`${isShareable ? 'success' : 'danger'}`}
      >
        {isShareableText}
      </Badge>
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
