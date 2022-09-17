import { createContext, useState, useEffect } from 'react';
import questsData from 'data/quests.json';

export const QuestsContext = createContext({
  questList: [],
  createQuest: (quest) => {},
});

export const QuestsProvider = ({ children }) => {
  const [questList, setQuestList] = useState([]);

  useEffect(() => {
    try {
      setQuestList(questsData);
    } catch (e) {
      alert(e.Message);
    }
  }, []);

  const createQuest = (quest) => {
    const newQuest = {
      id: questList.length + 1,
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

  return (
    <QuestsContext.Provider value={{ questList, createQuest }}>{children}</QuestsContext.Provider>
  );
};
