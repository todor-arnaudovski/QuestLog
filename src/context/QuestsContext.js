import { createContext, useState, useEffect } from 'react';
import questsData from 'data/quests.json';

export const QuestsContext = createContext([]);

export const QuestsProvider = ({ children }) => {
  const [questList, setQuestList] = useState([]);

  useEffect(() => {
    try {
      setQuestList(questsData);
    } catch (e) {
      alert(e.Message);
    }
  }, []);

  const addNewQuest = ({ title, description, level }) => {
    console.log(typeof level);
    const newQuest = {
      id: questList.length + 1,
      title: title,
      description: description,
      level: {
        required: level,
        recommended: parseInt(level) + 3,
      },
      isShareable: false,
      prerequisites: [],
    };
    console.log(newQuest);

    setQuestList((prevQuests) => {
      return [...prevQuests, newQuest];
    });
  };

  return (
    <QuestsContext.Provider value={{ questList, addNewQuest }}>
      {children}
    </QuestsContext.Provider>
  );
};
