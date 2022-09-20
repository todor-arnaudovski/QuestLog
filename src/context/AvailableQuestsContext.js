import { createContext, useState, useEffect, useContext } from 'react';
import { availableQuestsData } from 'data/availableQuests';
import { currentQuestsData } from 'data/currentQuests';
import { v4 as uuidv4 } from 'uuid';

export const AvailableQuestsContext = createContext({
  questList: [],
  createQuest: (quest) => {},
  makeQuestAvailable: (questId) => {},
  makeQuestUnavailable: (questId) => {},
});

export const AvailableQuestsProvider = ({ children }) => {
  const [fullQuestList, setFullQuestList] = useState([]);
  const [questList, setQuestList] = useState([]);

  useEffect(() => {
    try {
      setFullQuestList(availableQuestsData);
      setQuestList(() => {
        return availableQuestsData.filter((quest) => {
          return !currentQuestsData.includes(quest.id);
        });
      });
    } catch (e) {
      alert(e.Message);
    }
  }, []);

  const createQuest = (quest) => {
    const newQuest = {
      id: uuidv4(),
      title: quest.title,
      description: quest.description,
      level: parseInt(quest.level),
      isShareable: quest.isShareable,
      prerequisites: quest.prerequisites,
    };

    setFullQuestList((prevQuests) => {
      return [...prevQuests, newQuest];
    });
    setQuestList((prevQuests) => {
      return [...prevQuests, newQuest];
    });
  };

  const makeQuestAvailable = (questId) => {
    const foundQuest = fullQuestList.find((quest) => {
      return quest.id === questId;
    });

    setQuestList((prevQuests) => {
      return [...prevQuests, foundQuest];
    });
  };

  const makeQuestUnavailable = (questId) => {
    const filteredQuests = questList.filter((quest) => {
      return quest.id !== questId;
    });

    setQuestList(filteredQuests);
  };

  return (
    <AvailableQuestsContext.Provider
      value={{ questList, createQuest, makeQuestAvailable, makeQuestUnavailable }}
    >
      {children}
    </AvailableQuestsContext.Provider>
  );
};
