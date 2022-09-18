import { createContext, useState, useEffect } from 'react';
import { availableQuestsData } from 'data/availableQuests';
import { v4 as uuidv4 } from 'uuid';

export const QuestsContext = createContext({
  questList: [],
  createQuest: (quest) => {},
});

export const QuestsProvider = ({ children }) => {
  const [questList, setQuestList] = useState([]);

  useEffect(() => {
    try {
      setQuestList(availableQuestsData);
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
      prerequisites: [],
    };

    setQuestList((prevQuests) => {
      return [...prevQuests, newQuest];
    });
  };

  const removeQuest = (questId) => {
    const filteredQuests = questList.filter((quest) => {
      return quest.id !== questId;
    });

    setQuestList(filteredQuests);
  };

  return (
    <QuestsContext.Provider value={{ questList, createQuest, removeQuest }}>
      {children}
    </QuestsContext.Provider>
  );
};
