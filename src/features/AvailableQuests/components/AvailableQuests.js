import { useContext, useState, useEffect } from 'react';
import { AvailableQuestsContext } from 'context/AvailableQuestsContext';

import styles from './QuestList.module.scss';

import { List } from 'components/List';
import { ListItem } from 'components/ListItem';
import { QuestItem } from './QuestItem';
import { InputGroup } from 'components/Form/InputGroup';
import { Label } from 'components/Form/Label';
import { Select } from 'components/Form/Input';

const filterOptions = [
  { name: 'Latest', value: 'latest' },
  { name: 'Oldest', value: 'oldest' },
  { name: 'Level Descending', value: 'levelDesc' },
  { name: 'Level Ascending', value: 'levelAsc' },
];

export const AvailableQuests = ({ className }) => {
  const { questList } = useContext(AvailableQuestsContext);
  const [sortedQuestList, setSortedQuestList] = useState([]);

  useEffect(() => {
    setSortedQuestList(questList);
    sortQuestsBy('latest');
  }, [questList]);

  const sortQuestsByLatest = () => {
    const sortedQuests = [...questList].reverse();

    setSortedQuestList(sortedQuests);
  };

  const sortQuestsByOldest = () => {
    setSortedQuestList(questList);
  };

  const sortQuestsByLevelDesc = () => {
    const sortedQuests = [...questList].sort((a, b) => {

      return a.level > b.level ? -1 : 1;
    });

    setSortedQuestList(sortedQuests);
  };

  const sortQuestsByLevelAsc = () => {
    const sortedQuests = [...questList].sort((a, b) => {
      return a.level > b.level ? 1 : -1;
    });

    setSortedQuestList(sortedQuests);
  };

  const sortQuestsBy = (value) => {
    switch (value) {
      case 'latest':
        sortQuestsByLatest();
        break;
      case 'oldest':
        sortQuestsByOldest();
        break;
      case 'levelDesc':
        sortQuestsByLevelDesc();
        break;
      case 'levelAsc':
        sortQuestsByLevelAsc();
        break;
      default:
        break;
    }
  };

  const selectChangeHandler = (e) => {
    sortQuestsBy(e.target.value);
  };

  const classNames = [styles['quest-list'], className, 'pt-1 ps-1 pe-2'].filter(Boolean).join(' ');

  return (
    <div>
      <h3 className='h3 text-center'>Available Quests</h3>
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
        {sortedQuestList &&
          sortedQuestList.map((quest) => {
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
