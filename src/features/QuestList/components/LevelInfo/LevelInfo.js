import { Badge } from 'components/Badge/Badge';
import { List } from 'components/List';
import { ListItem } from 'components/ListItem';

export const LevelInfo = ({ level }) => {
  const difficulties = [
    {
      name: 'easy',
      color: 'success',
      level: level.recommended + 3,
    },
    {
      name: 'normal',
      color: 'dark',
      level: level.recommended,
    },
    {
      name: 'hard',
      color: 'danger',
      level: level.required,
    },
  ];

  return (
    <div className='mb-1'>
      <h4 className='h4'>Level</h4>
      <span className='d-block'>Required: {level.required}</span>
      <span>Recommended: {level.recommended}</span>
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
