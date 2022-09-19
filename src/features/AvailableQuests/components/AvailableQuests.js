import { useContext, useState, useEffect } from 'react';
import { AvailableQuestsContext } from 'context/AvailableQuestsContext';
import { sortQuestsByLevelDesc, sortQuestsByLevelAsc } from 'utils/sortQuestsBy';

import styles from './QuestList.module.scss';

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

export const AvailableQuests = ({ className }) => {
  const { questList: availableQuestsList } = useContext(AvailableQuestsContext);

  const [sortedQuestList, setSortedQuestList] = useState([]);

  useEffect(() => {
    setSortedQuestList(availableQuestsList);
    sortQuestsBy('levelAsc');
  }, [availableQuestsList]);

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

  return (
    <div>
      <h3 className='h3 text-center'>Available Quests</h3>
      {sortedQuestList.length > 0 && (
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
      )}
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
