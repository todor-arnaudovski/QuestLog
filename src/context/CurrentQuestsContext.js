import { createContext, useState, useEffect, useContext } from 'react';
import { currentQuestsData } from 'data/currentQuests';
import { availableQuestsData } from 'data/availableQuests';
import { AvailableQuestsContext } from './AvailableQuestsContext';

export const CurrentQuestsContext = createContext({
  questList: [],
  addQuest: (questId) => {},
  removeQuest: (questId) => {},
});

export const CurrentQuestsProvider = ({ children }) => {
  const [questList, setQuestList] = useState([]);

  const {
    questList: availableQuestsList,
    makeQuestAvailable,
    makeQuestUnavailable,
  } = useContext(AvailableQuestsContext);

  useEffect(() => {
    try {
      setQuestList(() => {
        return currentQuestsData.map((questId) => {
          return availableQuestsData.find((availableQuest) => {
            return availableQuest.id === questId;
          });
        });
      });
    } catch (e) {
      alert(e.Message);
    }
  }, []);

  const addQuest = (questId) => {
    const addedQuest = availableQuestsList.find((availableQuest) => {
      return availableQuest.id === questId;
    });

    setQuestList((prevQuests) => {
      return [...prevQuests, addedQuest];
    });
    makeQuestUnavailable(questId);
  };

  const removeQuest = (questId) => {
    const filteredQuests = questList.filter((quest) => {
      return quest.id !== questId;
    });

    setQuestList(filteredQuests);
    makeQuestAvailable(questId);
  };

  return (
    <CurrentQuestsContext.Provider value={{ questList, addQuest, removeQuest }}>
      {children}
    </CurrentQuestsContext.Provider>
  );
};
