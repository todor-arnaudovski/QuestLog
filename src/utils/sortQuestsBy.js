export const sortQuestsByLevelDesc = (questList) => {
  const sortedQuests = [...questList].sort((a, b) => {
    return a.level > b.level ? -1 : 1;
  });

  return sortedQuests;
};

export const sortQuestsByLevelAsc = (questList) => {
  const sortedQuests = [...questList].sort((a, b) => {
    return a.level > b.level ? 1 : -1;
  });

  return sortedQuests;
};