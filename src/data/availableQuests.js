import { v4 as uuidv4 } from 'uuid';

export const availableQuestsData = [
  {
    id: uuidv4(),
    title: 'The Key to Scholomance',
    description:
      "Well, here you are <name> - the completed Skeleton Key.  I am certain as I can be that this key will allow you within the confines of the Scholomance.  There's only one way to be absolutely sure it works, though.  Waste no time in trying it out, I say.",
    level: 55,
    isShareable: false,
    prerequisites: ["Araj's Scarab"],
  },
  {
    id: uuidv4(),
    title: "Araj's Scarab",
    description:
      "Destroy Araj the Summoner and bring Araj's Scarab to Alchemist Arbington at Chillwind Point, Western Plaguelands.",
    level: 54,
    isShareable: true,
    prerequisites: [],
  },
  {
    id: uuidv4(),
    title: 'The Only Song I Know...',
    description:
      "Craftsman Wilhelm at Light's Hope Chapel in the Eastern Plaguelands wants you to bring him 2 Frozen Runes, 2 Essence of Water, 2 Blue Sapphires and 30 gold pieces.",
    level: 60,
    isShareable: true,
    prerequisites: [],
  },
  {
    id: uuidv4(),
    title: 'Wanted: Hogger',
    description: 'Kill Hogger.',
    level: 10,
    isShareable: true,
    prerequisites: [],
  },
  {
    id: uuidv4(),
    title: 'In the Name of the Light',
    description:
      'Kill High Inquisitor Whitemane, Scarlet Commander Mograine, Herod, the Scarlet Champion and Houndmaster Loksey and then report back to Raleigh the Devout in Southshore.',
    level: 34,
    isShareable: true,
    prerequisites: [],
  },
];
