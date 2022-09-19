import { useContext, useState, useEffect } from 'react';
import { CurrentQuestsContext } from 'context/CurrentQuestsContext';
import { sortQuestsByLevelDesc, sortQuestsByLevelAsc } from 'utils/sortQuestsBy';

import frameMainBackground from 'assets/images/backgrounds/frame-main.jpg';
import frameEmptyBackground from 'assets/images/backgrounds/frame-empty.jpg';

import styles from './QuestList.module.scss';

import { Frame } from 'components/Frame';
import { List } from 'components/List';
import { ListItem } from 'components/ListItem';
import { QuestItem } from './QuestItem';
import { InputGroup } from 'components/Form/InputGroup';
import { Label } from 'components/Form/Label';
import { Select } from 'components/Form/Input';

const filterOptions = [
  { name: 'Level Ascending', value: 'levelAsc' },
  { name: 'Level Descending', value: 'levelDesc' },
];

export const CurrentQuests = ({ className }) => {
  const { questList: currentQuestsList } = useContext(CurrentQuestsContext);

  const [sortedQuestList, setSortedQuestList] = useState([]);

  useEffect(() => {
    setSortedQuestList(currentQuestsList);
    sortQuestsBy('levelAsc');
  }, [currentQuestsList]);

  const sortQuestsBy = (value) => {
    switch (value) {
      case 'levelDesc':
        setSortedQuestList((prevQuests) => {
          return sortQuestsByLevelDesc(prevQuests);
        });
        break;
      case 'levelAsc':
        setSortedQuestList((prevQuests) => {
          return sortQuestsByLevelAsc(prevQuests);
        });
        break;
      default:
        break;
    }
  };

  const selectChangeHandler = (e) => {
    sortQuestsBy(e.target.value);
  };

  const classNames = [styles['quest-list'], className, 'pt-1 ps-1 pe-2'].filter(Boolean).join(' ');

  const frameBackgroundImage =
    sortedQuestList.length > 0 ? frameMainBackground : frameEmptyBackground;

  return (
    <Frame
      className='mb-3 mb-lg-4'
      style={{ backgroundImage: `url(${frameBackgroundImage})`, minHeight: '50vh' }}
    >
      <h3 className='h3 text-center'>Current Quests</h3>
      {sortedQuestList.length > 0 && (
        <>
          <InputGroup className='mb-1'>
            <Label htmlFor='sortQuestsBy' ariaLabel='Sort Quests'>
              Sort Quests:{' '}
            </Label>
            <Select type='select' name='sortQuestsBy' onChange={selectChangeHandler}>
              {filterOptions &&
                filterOptions.map((option, i) => {
                  return (
                    <option value={option.value} key={i}>
                      {option.name}
                    </option>
                  );
                })}
            </Select>
          </InputGroup>
          <List className={classNames} variant='unstyled'>
            {sortedQuestList.map((quest) => {
              return (
                <ListItem key={quest.id} className='mb-3'>
                  <QuestItem {...quest} />
                </ListItem>
              );
            })}
          </List>
        </>
      )}
      {sortedQuestList.length === 0 && (
        <p className='text-center'>It looks a bit empty in here... Why don't you add some quests?</p>
      )}
    </Frame>
  );
};
