import { Badge } from 'components/Badge/Badge';
import { List } from 'components/List';
import { ListItem } from 'components/ListItem';

export const LevelInfo = ({ level }) => {
  const difficulties = [
    {
      name: 'easy',
      color: 'success',
      level: level + 3,
    },
    {
      name: 'normal',
      color: 'dark',
      level: level + 3,
    },
    {
      name: 'hard',
      color: 'danger',
      level: level,
    },
  ];

  return (
    <div className='mb-1'>
      <h5 className='h5'>Level</h5>
      <span className='d-block'>Required: {level}</span>
      <span>Recommended: {level + 3}</span>
      <div className='mt-1'>
        <List variant='unstyled' inline>
          {difficulties &&
            difficulties.map((difficulty, i) => {
              return (
                <ListItem key={`${difficulty.name}-${i}`}>
                  <Badge className='me-1' color={difficulty.color}>
                    {difficulty.level}
                  </Badge>
                </ListItem>
              );
            })}
        </List>
      </div>
    </div>
  );
};
