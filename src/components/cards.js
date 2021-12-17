// -------------------- 8 Boss Cards -------------------- //

const bossDeck = [
  {
    id: "B1",
    name: "Draculord",
    subtitle: "Hypnotic Vampire",
    xp: 900,
    treasure: "Cleric",
    description:
      "Target opponent reveals his or her hand. Take one card and put it into your hand.",
    image: "",
  },
  {
    id: "B2",
    name: "Xyzax",
    subtitle: "Progenitor Lich",
    xp: 750,
    treasure: "Cleric",
    description:
      "Choose two cards from the discard pile and put them into your hand.",
    image: "",
  },
  {
    id: "B3",
    name: "King Croak",
    subtitle: "Sultan of the Sewers",
    xp: 800,
    treasure: "Fighter",
    description:
      "You may search the Room Deck or discard pile for an Advanced Monster Room. You may immediately build the room (over a room with a matching Treasure type).",
    image: "",
  },
  {
    id: "B4",
    name: "Robobo",
    subtitle: "Angry Golem",
    xp: 400,
    treasure: "Fighter",
    description:
      "Each opponent must choose and destroy one Room in his or her dungeon.",
    image: "",
  },
  {
    id: "B5",
    name: "Cerebellus",
    subtitle: "Father Brain",
    xp: 650,
    treasure: "Mage",
    description: "You may draw three Spell cards, then discard a Spell card.",
    image: "",
  },
  {
    id: "B6",
    name: "Seducia",
    subtitle: "Sorceress of Sexiness",
    xp: 600,
    treasure: "Mage",
    description:
      "You may search through town or the Hero decks, choose one Hero, and put it at the entrance to your dungeon.",
    image: "",
  },
  {
    id: "B7",
    name: "Cleopatra",
    subtitle: "Mother of Mummies",
    xp: 850,
    treasure: "Thief",
    description:
      "You may search the Room Deck or discard pile for an Advanced Trap Room. You may immediately build the room (over a room with a matching Treasure type).",
    image: "",
  },
  {
    id: "B8",
    name: "Gorgona",
    subtitle: "Queen of Medusia",
    xp: 500,
    treasure: "Thief",
    description:
      "Choose a Hero in town. Immediately destroy that Hero and place it face-down in your scorekeeping area.",
    image: "",
  },
];

// -------------------- 75 Room Cards -------------------- //

const roomDeck = [
  // ----- Dark Altar 3 ----- //
  {
    id: "R1",
    name: "Dark Altar",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Cleric*2",
    description:
      "Destroy this Room: Choose one card from the discard pile and put it into your hand.",
    image: "",
  },
  {
    id: "R2",
    name: "Dark Altar",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Cleric*2",
    description:
      "Destroy this Room: Choose one card from the discard pile and put it into your hand.",
    image: "",
  },
  {
    id: "R3",
    name: "Dark Altar",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Cleric*2",
    description:
      "Destroy this Room: Choose one card from the discard pile and put it into your hand.",
    image: "",
  },
  // ----- Open Grave 2 ----- //
  {
    id: "R4",
    name: "Open Grave",
    subtitle: "Trap Room",
    dmg: 2,
    treasure: "Cleric",
    description:
      "Once per turn, If a Hero dies in this room, choose one Room card from the discard pile and put into your hand.",
    image: "",
  },
  {
    id: "R5",
    name: "Open Grave",
    subtitle: "Trap Room",
    dmg: 2,
    treasure: "Cleric",
    description:
      "Once per turn, If a Hero dies in this room, choose one Room card from the discard pile and put into your hand.",
    image: "",
  },
  // ----- Specter's Sanctum 3 ----- //
  {
    id: "R6",
    name: "Specter's Sanctum",
    subtitle: "Monster Room",
    dmg: 2,
    treasure: "Cleric",
    description:
      "When you build this room, choose an opponent. That opponent discards a random Spell card.",
    image: "",
  },
  {
    id: "R7",
    name: "Specter's Sanctum",
    subtitle: "Monster Room",
    dmg: 2,
    treasure: "Cleric",
    description:
      "When you build this room, choose an opponent. That opponent discards a random Spell card.",
    image: "",
  },
  {
    id: "R8",
    name: "Specter's Sanctum",
    subtitle: "Monster Room",
    dmg: 2,
    treasure: "Cleric",
    description:
      "When you build this room, choose an opponent. That opponent discards a random Spell card.",
    image: "",
  },
  // ----- Succubus Spa 3 ----- //
  {
    id: "R9",
    name: "Succubus Spa",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Cleric",
    description:
      "Once per turn, If a Hero Dies in this room, choose an opponent. Take a random Room or Spell card from that opponent's hand.",
    image: "",
  },
  {
    id: "R10",
    name: "Succubus Spa",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Cleric",
    description:
      "Once per turn, If a Hero Dies in this room, choose an opponent. Take a random Room or Spell card from that opponent's hand.",
    image: "",
  },
  {
    id: "R11",
    name: "Succubus Spa",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Cleric",
    description:
      "Once per turn, If a Hero Dies in this room, choose an opponent. Take a random Room or Spell card from that opponent's hand.",
    image: "",
  },
  // ----- Dracolich Lair 2 ----- //
  {
    id: "R12",
    name: "Dracolich Lair",
    subtitle: "Advanced Monster Room",
    dmg: 3,
    treasure: "Cleric",
    description:
      "Once per turn, you may discard two Room cards to choose one Rom card from the discard pile and put it into your hand.",
    image: "",
  },
  {
    id: "R13",
    name: "Dracolich Lair",
    subtitle: "Advanced Monster Room",
    dmg: 3,
    treasure: "Cleric",
    description:
      "Once per turn, you may discard two Room cards to choose one Rom card from the discard pile and put it into your hand.",
    image: "",
  },
  // ----- Vampire Bordello 2 ----- //
  {
    id: "R14",
    name: "Vampire Bordello",
    subtitle: "Advanced Monster Room",
    dmg: 3,
    treasure: "Cleric",
    description:
      "Once per turn, If a Hero dies in this room you may heal one wound. (Flip over one of your wounds, adding its Soul value to your total.)",
    image: "",
  },
  {
    id: "R15",
    name: "Vampire Bordello",
    subtitle: "Advanced Monster Room",
    dmg: 3,
    treasure: "Cleric",
    description:
      "Once per turn, If a Hero dies in this room you may heal one wound. (Flip over one of your wounds, adding its Soul value to your total.)",
    image: "",
  },
  // ----- Goblin Armory 3 ----- //
  {
    id: "R16",
    name: "Goblin Armory",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Fighter*2",
    description: "Monster Rooms adjacent to this room deal +1 damage.",
    image: "",
  },
  {
    id: "R17",
    name: "Goblin Armory",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Fighter*2",
    description: "Monster Rooms adjacent to this room deal +1 damage.",
    image: "",
  },
  {
    id: "R18",
    name: "Goblin Armory",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Fighter*2",
    description: "Monster Rooms adjacent to this room deal +1 damage.",
    image: "",
  },
  // ----- Goblin Factory 3 ----- //
  {
    id: "R19",
    name: "Golem Factory",
    subtitle: "Monster Room",
    dmg: 2,
    treasure: "Fighter",
    description:
      "Once per turn, if a hero dies in this room, draw a Room card.",
    image: "",
  },
  {
    id: "R20",
    name: "Golem Factory",
    subtitle: "Monster Room",
    dmg: 2,
    treasure: "Fighter",
    description:
      "Once per turn, if a hero dies in this room, draw a Room card.",
    image: "",
  },
  {
    id: "R21",
    name: "Golem Factory",
    subtitle: "Monster Room",
    dmg: 2,
    treasure: "Fighter",
    description:
      "Once per turn, if a hero dies in this room, draw a Room card.",
    image: "",
  },
  // ----- Minotaur's Maze 2 ----- //
  {
    id: "R22",
    name: "Minotaur's Maze",
    subtitle: "Monster Room",
    dmg: 0,
    treasure: "Fighter",
    description:
      "The first time a Hero enters this room, send it back to the previous room.",
    image: "",
  },
  {
    id: "R23",
    name: "Minotaur's Maze",
    subtitle: "Monster Room",
    dmg: 0,
    treasure: "Fighter",
    description:
      "The first time a Hero enters this room, send it back to the previous room.",
    image: "",
  },
  // ----- Neanderthal Cave 3 ----- //
  {
    id: "R24",
    name: "Neanderthal Cave",
    subtitle: "Monster Room",
    dmg: 3,
    treasure: "Fighter",
    description: "You cannot build an Advanced Room on Neanderthal Cave.",
    image: "",
  },
  {
    id: "R25",
    name: "Neanderthal Cave",
    subtitle: "Monster Room",
    dmg: 3,
    treasure: "Fighter",
    description: "You cannot build an Advanced Room on Neanderthal Cave.",
    image: "",
  },
  {
    id: "R26",
    name: "Neanderthal Cave",
    subtitle: "Monster Room",
    dmg: 3,
    treasure: "Fighter",
    description: "You cannot build an Advanced Room on Neanderthal Cave.",
    image: "",
  },
  // ----- Beast Menagerie 2 ----- //
  {
    id: "R27",
    name: "Beast Menagerie",
    subtitle: "Advanced Monster Room",
    dmg: 4,
    treasure: "Fighter",
    description:
      "Once per turn when you build another Monster room, draw a Room card.",
    image: "",
  },
  {
    id: "R28",
    name: "Beast Menagerie",
    subtitle: "Advanced Monster Room",
    dmg: 4,
    treasure: "Fighter",
    description:
      "Once per turn when you build another Monster room, draw a Room card.",
    image: "",
  },
  // ----- Monster's Ballroom 2 ----- //
  {
    id: "R29",
    name: "Monster's Ballroom",
    subtitle: "Advanced Monster Room",
    dmg: "*",
    treasure: "Fighter",
    description:
      "This room's damage is equal to the number of Monster rooms in your dungeon.",
    image: "",
  },
  {
    id: "R30",
    name: "Monster's Ballroom",
    subtitle: "Advanced Monster Room",
    dmg: "*",
    treasure: "Fighter",
    description:
      "This room's damage is equal to the number of Monster rooms in your dungeon.",
    image: "",
  },
  // ----- Brainsucker Hive 3 ----- //
  {
    id: "R31",
    name: "Brainsucker Hive",
    subtitle: "Monster Room",
    dmg: 2,
    treasure: "Mage",
    description:
      "Once per turn, if a Hero dies in this room, you may draw a Spell card.",
    image: "",
  },
  {
    id: "R32",
    name: "Brainsucker Hive",
    subtitle: "Monster Room",
    dmg: 2,
    treasure: "Mage",
    description:
      "Once per turn, if a Hero dies in this room, you may draw a Spell card.",
    image: "",
  },
  {
    id: "R33",
    name: "Brainsucker Hive",
    subtitle: "Monster Room",
    dmg: 2,
    treasure: "Mage",
    description:
      "Once per turn, if a Hero dies in this room, you may draw a Spell card.",
    image: "",
  },
  // ----- Dark Laboratory 3 ----- //
  {
    id: "R34",
    name: "Dark Laboratory",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Mage*2",
    description:
      "When you build this room, draw two spell cards, then discard a Spell card.",
    image: "",
  },
  {
    id: "R35",
    name: "Dark Laboratory",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Mage*2",
    description:
      "When you build this room, draw two spell cards, then discard a Spell card.",
    image: "",
  },
  {
    id: "R36",
    name: "Dark Laboratory",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Mage*2",
    description:
      "When you build this room, draw two spell cards, then discard a Spell card.",
    image: "",
  },
  // ----- Haunted Library 2 ----- //
  {
    id: "R37",
    name: "Haunted Library",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Mage",
    description:
      "At the beginning of your turn, you may draw from the Spell deck instead of the Room deck.",
    image: "",
  },
  {
    id: "R38",
    name: "Haunted Library",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Mage",
    description:
      "At the beginning of your turn, you may draw from the Spell deck instead of the Room deck.",
    image: "",
  },
  // ----- Witch's Kitchen 3 ----- //
  {
    id: "R39",
    name: "Witch's Kitchen",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Mage",
    description:
      "Once per turn, you may discard a Monster Room card to draw a Spell card.",
    image: "",
  },
  {
    id: "R40",
    name: "Witch's Kitchen",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Mage",
    description:
      "Once per turn, you may discard a Monster Room card to draw a Spell card.",
    image: "",
  },
  {
    id: "R41",
    name: "Witch's Kitchen",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Mage",
    description:
      "Once per turn, you may discard a Monster Room card to draw a Spell card.",
    image: "",
  },
  // ----- All-Seeing Eye 2 ----- //
  {
    id: "R42",
    name: "All-Seeing Eye",
    subtitle: "Advanced Trap Room",
    dmg: 3,
    treasure: "Mage",
    description:
      "Once per turn when an opponent plays a Spell card, you may discard a Spell card to cancel its effect.",
    image: "",
  },
  {
    id: "R43",
    name: "All-Seeing Eye",
    subtitle: "Advanced Trap Room",
    dmg: 3,
    treasure: "Mage",
    description:
      "Once per turn when an opponent plays a Spell card, you may discard a Spell card to cancel its effect.",
    image: "",
  },
  // ----- Liger's Den 2 ----- //
  {
    id: "R44",
    name: "Liger's Den",
    subtitle: "Advanced Monster Room",
    dmg: 2,
    treasure: "Mage",
    description: "Once per turn when you play a Spell card, draw a Spell card.",
    image: "",
  },
  {
    id: "R45",
    name: "Liger's Den",
    subtitle: "Advanced Monster Room",
    dmg: 2,
    treasure: "Mage",
    description: "Once per turn when you play a Spell card, draw a Spell card.",
    image: "",
  },
  // ----- Bottomless Pit 3 ----- //
  {
    id: "R46",
    name: "Bottomless Pit",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief",
    description: "Destroy this room: Kill a Hero in this room.",
    image: "",
  },
  {
    id: "R47",
    name: "Bottomless Pit",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief",
    description: "Destroy this room: Kill a Hero in this room.",
    image: "",
  },
  {
    id: "R48",
    name: "Bottomless Pit",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief",
    description: "Destroy this room: Kill a Hero in this room.",
    image: "",
  },
  // ----- Monster's Ballroom 2 ----- //
  {
    id: "R49",
    name: "Boulder Ramp",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief",
    description:
      "Destroy another room in your dungeon: Deal 5 damage to a hero in this room.",
    image: "",
  },
  {
    id: "R50",
    name: "Boulder Ramp",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief",
    description:
      "Destroy another room in your dungeon: Deal 5 damage to a hero in this room.",
    image: "",
  },
  // ----- Dizzygas Hallway 3 ----- //
  {
    id: "R51",
    name: "Dizzygas Hallway",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief",
    description:
      "If the next room in your dungeon is a Trap room, it has +2 damage.",
    image: "",
  },
  {
    id: "R52",
    name: "Dizzygas Hallway",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief",
    description:
      "If the next room in your dungeon is a Trap room, it has +2 damage.",
    image: "",
  },
  {
    id: "R53",
    name: "Dizzygas Hallway",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief",
    description:
      "If the next room in your dungeon is a Trap room, it has +2 damage.",
    image: "",
  },
  // ----- Jackpot Stash 3 ----- //
  {
    id: "R54",
    name: "Jackpot Stash",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief*2",
    description:
      "Destroy this room: Double the treasure value of your dungeon's Rooms until end of turn.",
    image: "",
  },
  {
    id: "R55",
    name: "Jackpot Stash",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief*2",
    description:
      "Destroy this room: Double the treasure value of your dungeon's Rooms until end of turn.",
    image: "",
  },
  {
    id: "R56",
    name: "Jackpot Stash",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Thief*2",
    description:
      "Destroy this room: Double the treasure value of your dungeon's Rooms until end of turn.",
    image: "",
  },
  // ----- Recycling Center 2 ----- //
  {
    id: "R57",
    name: "Recycling Center",
    subtitle: "Advanced Trap Room",
    dmg: 3,
    treasure: "Thief",
    description:
      "When another room in your dungeon is destroyed, you may draw two Room cards.",
    image: "",
  },
  {
    id: "R58",
    name: "Recycling Center",
    subtitle: "Advanced Trap Room",
    dmg: 3,
    treasure: "Thief",
    description:
      "When another room in your dungeon is destroyed, you may draw two Room cards.",
    image: "",
  },
  // ----- The Crushinator 2 ----- //
  {
    id: "R59",
    name: "The Crushinator",
    subtitle: "Advanced Trap Room",
    dmg: 2,
    treasure: "Thief",
    description:
      "Destroy another room in your dungeon: Until end of turn, your Rooms have +2 damage. Revised: Once per turn, you may destroy another Room in your dungeon to give all your Rooms +2 until end of turn.",
    image: "",
  },
  {
    id: "R60",
    name: "The Crushinator",
    subtitle: "Advanced Trap Room",
    dmg: 2,
    treasure: "Thief",
    description:
      "Destroy another room in your dungeon: Until end of turn, your Rooms have +2 damage. Revised: Once per turn, you may destroy another Room in your dungeon to give all your Rooms +2 until end of turn.",
    image: "",
  },
  // ----- Centipede Tunnel 2 ----- //
  {
    id: "R61",
    name: "Centipede Tunnel",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Fighter + Mage",
    description:
      "When you build this room, you may swap the placement of two Rooms in any one dungeon.",
    image: "",
  },
  {
    id: "R62",
    name: "Centipede Tunnel",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Fighter + Mage",
    description:
      "When you build this room, you may swap the placement of two Rooms in any one dungeon.",
    image: "",
  },
  // ----- Construction Zone 2 ----- //
  {
    id: "R63",
    name: "Construction Zone",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Fighter + Thief",
    description:
      "When you build this room, you may immediately build an additional Room.",
    image: "",
  },
  {
    id: "R64",
    name: "Construction Zone",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Fighter + Thief",
    description:
      "When you build this room, you may immediately build an additional Room.",
    image: "",
  },
  // ----- Dragon Hatchery 3 ----- //
  {
    id: "R65",
    name: "Dragon Hatchery",
    subtitle: "Monster Room",
    dmg: 0,
    treasure: "Cleric + Mage + Fighter + Thief",
    description: "(This room contains all four treasure types.)",
    image: "",
  },
  {
    id: "R66",
    name: "Dragon Hatchery",
    subtitle: "Monster Room",
    dmg: 0,
    treasure: "Cleric + Mage + Fighter + Thief",
    description: "(This room contains all four treasure types.)",
    image: "",
  },
  {
    id: "R67",
    name: "Dragon Hatchery",
    subtitle: "Monster Room",
    dmg: 0,
    treasure: "Cleric + Mage + Fighter + Thief",
    description: "(This room contains all four treasure types.)",
    image: "",
  },
  // ----- Mimic Vault 2 ----- //
  {
    id: "R68",
    name: "Mimic Vault",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Mage + Thief",
    description:
      "When you build this room, choose one ordinary Hero in town and place it on the entrance to your dungeon.",
    image: "",
  },
  {
    id: "R69",
    name: "Mimic Vault",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Mage + Thief",
    description:
      "When you build this room, choose one ordinary Hero in town and place it on the entrance to your dungeon.",
    image: "",
  },
  // ----- Monstrous Monument 2 ----- //
  {
    id: "R70",
    name: "Monstrous Monument",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Cleric + Fighter",
    description:
      "When you build this room, choose one Monster Room from the discard pile and put it in your hand.",
    image: "",
  },
  {
    id: "R71",
    name: "Monstrous Monument",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Cleric + Fighter",
    description:
      "When you build this room, choose one Monster Room from the discard pile and put it in your hand.",
    image: "",
  },
  // ----- Torture Chamber 2 ----- //
  {
    id: "R72",
    name: "Torture Chamber",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Cleric + Thief",
    description:
      "Destroy this room: Choose an opponent. That opponent discards a random Room card.	",
    image: "",
  },
  {
    id: "R73",
    name: "Torture Chamber",
    subtitle: "Trap Room",
    dmg: 1,
    treasure: "Cleric + Thief",
    description:
      "Destroy this room: Choose an opponent. That opponent discards a random Room card.	",
    image: "",
  },
  // ----- Zombie Prison 2 ----- //
  {
    id: "R74",
    name: "Zombie Prison",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Cleric + Mage",
    description:
      "Destroy this room: Choose a dead Hero in an opponent's scorekeeping area. Send it back to the entrance of that player's dungeon",
    image: "",
  },
  {
    id: "R75",
    name: "Zombie Prison",
    subtitle: "Monster Room",
    dmg: 1,
    treasure: "Cleric + Mage",
    description:
      "Destroy this room: Choose a dead Hero in an opponent's scorekeeping area. Send it back to the entrance of that player's dungeon",
    image: "",
  },
];

// -------------------- 31 Spell Cards -------------------- //

const spellDeck = [
  // ----- Annihilator 2 ----- //
  {
    id: "S1",
    name: "Annihilator",
    phase: "Adventure",
    description: "Give one Trap Room +3 damage until end of turn.",
    image: "",
  },
  {
    id: "S2",
    name: "Annihilator",
    phase: "Adventure",
    description: "Give one Trap Room +3 damage until end of turn.",
    image: "",
  },
  // ----- Assassin 3 ----- //
  {
    id: "S3",
    name: "Assassin",
    phase: "Adventure",
    description:
      "Choose a Hero in an opponent's dungeon. Give that Hero +3 Health until end of turn.",
    image: "",
  },
  {
    id: "S4",
    name: "Assassin",
    phase: "Adventure",
    description:
      "Choose a Hero in an opponent's dungeon. Give that Hero +3 Health until end of turn.",
    image: "",
  },
  {
    id: "S5",
    name: "Assassin",
    phase: "Adventure",
    description:
      "Choose a Hero in an opponent's dungeon. Give that Hero +3 Health until end of turn.",
    image: "",
  },
  // ----- Cave-In 2 ----- //
  {
    id: "S6",
    name: "Cave-In",
    phase: "Adventure",
    description: "Destroy a room in your dungeon. Kill any Hero in that Room.",
    image: "",
  },
  {
    id: "S7",
    name: "Cave-In",
    phase: "Adventure",
    description: "Destroy a room in your dungeon. Kill any Hero in that Room.",
    image: "",
  },
  // ----- Counterspell 2 ----- //
  {
    id: "S8",
    name: "Counterspell",
    phase: "Build & Adventure",
    description:
      "Choose a Spell card that has just been declared. Cancel the effects of that Spell card. (The canceled Spell card is sent to the discard pile.)",
    image: "",
  },
  {
    id: "S9",
    name: "Counterspell",
    phase: "Build & Adventure",
    description:
      "Choose a Spell card that has just been declared. Cancel the effects of that Spell card. (The canceled Spell card is sent to the discard pile.)",
    image: "",
  },
  // ----- Exhaustion 1 ----- //
  {
    id: "S10",
    name: "Exhaustion",
    phase: "Adventure",
    description:
      "Deal X damage to one Hero in your dungeon, where X is equal to the number of rooms in your dungeon.",
    image: "",
  },
  // ----- Fear 2 ----- //
  {
    id: "S11",
    name: "Fear",
    phase: "Adventure",
    description: "Choose a Hero in any dungeon and send it back to town.",
    image: "",
  },
  {
    id: "S12",
    name: "Fear",
    phase: "Adventure",
    description: "Choose a Hero in any dungeon and send it back to town.",
    image: "",
  },
  // ----- Freeze 4 ----- //
  {
    id: "S13",
    name: "Freeze",
    phase: "Build & Adventure",
    description:
      "Choose and deactivate one Room in any dungeon. (It has no damage, treasure, or abilities until end of turn.)",
    image: "",
  },
  {
    id: "S14",
    name: "Freeze",
    phase: "Build & Adventure",
    description:
      "Choose and deactivate one Room in any dungeon. (It has no damage, treasure, or abilities until end of turn.)",
    image: "",
  },
  {
    id: "S15",
    name: "Freeze",
    phase: "Build & Adventure",
    description:
      "Choose and deactivate one Room in any dungeon. (It has no damage, treasure, or abilities until end of turn.)",
    image: "",
  },
  {
    id: "S16",
    name: "Freeze",
    phase: "Build & Adventure",
    description:
      "Choose and deactivate one Room in any dungeon. (It has no damage, treasure, or abilities until end of turn.)",
    image: "",
  },
  // ----- Giant Size 2 ----- //
  {
    id: "S17",
    name: "Giant Size",
    phase: "Adventure",
    description: "Give one Monster Room +3 damage until end of turn.",
    image: "",
  },
  {
    id: "S18",
    name: "Giant Size",
    phase: "Adventure",
    description: "Give one Monster Room +3 damage until end of turn.",
    image: "",
  },
  // ----- Jeopardy 2 ----- //
  {
    id: "S19",
    name: "Jeopardy",
    phase: "Build & Adventure",
    description:
      "All players must discard their hands, then draw one Spell card and two Room cards.",
    image: "",
  },
  {
    id: "S20",
    name: "Jeopardy",
    phase: "Build & Adventure",
    description:
      "All players must discard their hands, then draw one Spell card and two Room cards.",
    image: "",
  },
  // ----- Kobold Strike 1 ----- //
  {
    id: "S21",
    name: "Kobold Strike",
    phase: "Build",
    description:
      "No rooms can be built this turn. Any face-down Room is returned to its owner's hand.",
    image: "",
  },
  // ----- Motivation 2 ----- //
  {
    id: "S22",
    name: "Motivation",
    phase: "Build",
    description:
      "If you have fewer Rooms than an opponent, you may build an extra room this turn. (You must declare this before any Rooms are revealed.)",
    image: "",
  },
  {
    id: "S23",
    name: "Motivation",
    phase: "Build",
    description:
      "If you have fewer Rooms than an opponent, you may build an extra room this turn. (You must declare this before any Rooms are revealed.)",
    image: "",
  },
  // ----- Princess in Peril 2 ----- //
  {
    id: "S24",
    name: "Princess in Peril",
    phase: "Build",
    description:
      "Choose one Hero in town. Place it at the entrance to your dungeon.",
    image: "",
  },
  {
    id: "S25",
    name: "Princess in Peril",
    phase: "Build",
    description:
      "Choose one Hero in town. Place it at the entrance to your dungeon.",
    image: "",
  },
  // ----- Soul Harvest 1 ----- //
  {
    id: "S26",
    name: "Soul Harvest",
    phase: "Build & Adventure",
    description:
      "Choose a face-down Hero in your scorekeeping area and remove it from the game. Draw two Spell cards.",
    image: "",
  },
  // ----- Teleportation 2 ----- //
  {
    id: "S27",
    name: "Teleportation",
    phase: "Adventure",
    description:
      "Send a Hero in your dungeon back to the first room of your dungeon. (It continues to move through your dungeon this turn.)",
    image: "",
  },
  {
    id: "S28",
    name: "Teleportation",
    phase: "Adventure",
    description:
      "Send a Hero in your dungeon back to the first room of your dungeon. (It continues to move through your dungeon this turn.)",
    image: "",
  },
  // ----- Trepidation 1 ----- //
  {
    id: "S29",
    name: "Trepidation",
    phase: "Adventure",
    description:
      "Choose a player with at least two more Souls than you. No Hero enters that player's dungeon this turn. (Any Heroes remain at the entrance to that dungeon.)",
    image: "",
  },
  // ----- Zombie Attack 2 ----- //
  {
    id: "S30",
    name: "Zombie Attack",
    phase: "Build",
    description:
      "Choose a dead Hero in an opponent's scorekeeping area. Send it back to the entrance of that player's dungeon. Until end of turn, it has +2 Health.",
    image: "",
  },
  {
    id: "S31",
    name: "Zombie Attack",
    phase: "Build",
    description:
      "Choose a dead Hero in an opponent's scorekeeping area. Send it back to the entrance of that player's dungeon. Until end of turn, it has +2 Health.",
    image: "",
  },
];

// -------------------- 25 Hero Cards -------------------- //

const heroDeck = [
  {
    id: "H1",
    name: "Cleric",
    subtitle: "Ordinary-Hero",
    HP: 4,
    treasure: "Cleric",
    description:
      "Nick the Masher The young cleric was well-armed, and brave enough to take on the Dragon King himself. His credo: I bash it with my mace.",
    players: 2,
    image: "",
  },
  {
    id: "H2",
    name: "Cleric",
    subtitle: "Ordinary-Hero",
    HP: 4,
    treasure: "Cleric",
    description:
      "Pugi the Druidess A defender of the wilderness, she wields the power of Nature. Flowers blossom in her footsteps, and life grows anew.",
    players: 2,
    image: "",
  },
  {
    id: "H3",
    name: "Cleric",
    subtitle: "Ordinary-Hero",
    HP: 6,
    treasure: "Cleric",
    description:
      "Acacia, Warrior of Light Acacia is a carefree soul who makes her own luck. A strong defender of good, she is undeterred by even the darkest dungeons.",
    players: 2,
    image: "",
  },
  {
    id: "H4",
    name: "Cleric",
    subtitle: "Ordinary-Hero",
    HP: 6,
    treasure: "Cleric",
    description:
      "Charles the Young Charles has mother's permission to go adventuring, but he has to return before sundown.",
    players: 2,
    image: "",
  },
  {
    id: "H5",
    name: "Cleric",
    subtitle: "Ordinary-Hero",
    HP: 8,
    treasure: "Cleric",
    description:
      "Delatorious, Angel of Light Created by the Goddess of Light to defend Arcadia, this kid angel never misses a shot with his enchanted crossbow.",
    players: 2,
    image: "",
  },
  {
    id: "H6",
    name: "Cleric",
    subtitle: "Ordinary-Hero",
    HP: 8,
    treasure: "Cleric",
    description:
      "Romero, the Indigo Friar He is a dedicated man of the cloth who wants to see the world coated in blue. You might think he's depressed, but he's actually very, very happy.",
    players: 2,
    image: "",
  },
  {
    id: "H7",
    name: "Fighter",
    subtitle: "Ordinary-Hero",
    HP: 4,
    treasure: "Fighter",
    description:
      "Boden the Pantless Boden's courage is matched only by his forgetfulness. The quest to find his misplaced armor continues!",
    players: 2,
    image: "",
  },
  {
    id: "H8",
    name: "Fighter",
    subtitle: "Ordinary-Hero",
    HP: 4,
    treasure: "Fighter",
    description:
      "Jarek, Squire to the Lion Knights As a squire, Jarek loved nothing more than stories and legends. He had no idea that someday, he would become one.",
    players: 2,
    image: "",
  },
  {
    id: "H9",
    name: "Fighter",
    subtitle: "Ordinary-Hero",
    HP: 6,
    treasure: "Fighter",
    description:
      "Fire's Breath, Heroine of Arcadia The scarlet-haired warrior woman known as Fire's Breath has pledged her deadly twin blades to the fight for liberty",
    players: 2,
    image: "",
  },
  {
    id: "H10",
    name: "Fighter",
    subtitle: "Ordinary-Hero",
    HP: 6,
    treasure: "Fighter",
    description:
      "Samurai Tom Not truly a samurai, this masterless ronin seeks honor and glory.",
    players: 2,
    image: "",
  },
  {
    id: "H11",
    name: "Fighter",
    subtitle: "Ordinary-Hero",
    HP: 8,
    treasure: "Fighter",
    description:
      "Johnny of the Evening Watch A humble member of the Evening Watch, whose band o'brothers is sworn to forsake family, take the grey, and clear dungeons.",
    players: 2,
    image: "",
  },
  {
    id: "H12",
    name: "Fighter",
    subtitle: "Ordinary-Hero",
    HP: 8,
    treasure: "Fighter",
    description:
      "Crystol and A'lan of Gerd Bound by the unbreakable Ring of Gerd, these lovers became the most dangerous husband-wife team in the adventuring business.",
    players: 2,
    image: "",
  },
  {
    id: "H13",
    name: "Mage",
    subtitle: "Ordinary-Hero",
    HP: 4,
    treasure: "Mage",
    description:
      "Tieg and the Magic Bubble Armed with his trusty bubble, Tieg braves dangerous castles and dungeons in search of the musical instruments stolen from his people.",
    players: 2,
    image: "",
  },
  {
    id: "H14",
    name: "Mage",
    subtitle: "Ordinary-Hero",
    HP: 4,
    treasure: "Mage",
    description:
      "Brandork the Neverwrong Schooled in seven flavors of magic, Brandork follows the teachings of master Face, the Omniscient Celestial.",
    players: 2,
    image: "",
  },
  {
    id: "H15",
    name: "Mage",
    subtitle: "Ordinary-Hero",
    HP: 6,
    treasure: "Ma",
    description:
      "Mitchell, the Judge He has wandered the planes, hopelessly lost... ever since his wife, Nikki, sent him to the store for diamond dust sugar.",
    players: 2,
    image: "",
  },
  {
    id: "H16",
    name: "Mage",
    subtitle: "Ordinary-Hero",
    HP: 6,
    treasure: "Mage",
    description:
      "Kalish Ninefingers The worst thief ever, Kalish lost a finger and his freedom in one night. Taught magic in prison by his sorcerous cellmate, he now kills evil with fire.",
    players: 2,
    image: "",
  },
  {
    id: "H17",
    name: "Mage",
    subtitle: "Ordinary-Hero",
    HP: 8,
    treasure: "Mage",
    description:
      "Dartteon, Elf Pyromancer Some elves just want to watch the world burn.",
    players: 2,
    image: "",
  },
  {
    id: "H18",
    name: "Mage",
    subtitle: "Ordinary-Hero",
    HP: 8,
    treasure: "Mage",
    description:
      "Koey, The Last Dragon Mage The survivor of Drakonia vowed to save the world from Kirax's reign with the power bestowed to him by the last emerald dragon.",
    players: 4,
    image: "",
  },
  {
    id: "H19",
    name: "Thief",
    subtitle: "Ordinary-Hero",
    HP: 4,
    treasure: "Thief",
    description:
      "Joman Chimm, Cutpurse From the twinkle in his eye, you might think he comes bearing gifts... until you check your empty pockets.",
    players: 2,
    image: "",
  },
  {
    id: "H20",
    name: "Thief",
    subtitle: "Ordinary-Hero",
    HP: 4,
    treasure: "Thief",
    description:
      "Lance Uppercut, Treasure Hunter With a bent blade and a clenched fist, he gathers shining treasures for the glory of the Keonish Empire.",
    players: 4,
    image: "",
  },
  {
    id: "H21",
    name: "Thief",
    subtitle: "Ordinary-Hero",
    HP: 6,
    treasure: "Thief",
    description:
      "Jesta the Rogue \"Okay, so you take the big guy on the left with the axe, you've got the two little ones on the right with swords, and I'll take this dangerous-looking treasure chest with no lock over here...\"",
    players: 4,
    image: "",
  },
  {
    id: "H22",
    name: "Thief",
    subtitle: "Ordinary-Hero",
    HP: 6,
    treasure: "Thief",
    description:
      "Kins Klauski, Mad Conquistador \"It's hard for me to think about death, how insects and worms will eat me... I never think about death. I haven't even properly started to live yet.\"",
    players: 3,
    image: "",
  },
  {
    id: "H23",
    name: "Thief",
    subtitle: "Ordinary-Hero",
    HP: 8,
    treasure: "Thief",
    description:
      "Sir Digby Apple, Ace Detective He battles to keep the coffers filling, to keep his partners preening and to send a needless message of power to all of the unwilling.",
    players: 3,
    image: "",
  },
  {
    id: "H24",
    name: "Thief",
    subtitle: "Ordinary-Hero",
    HP: 8,
    treasure: "Thief",
    description:
      "Jerome, Kung Fu Monkey A Visitor from a distant land, his hyperactive monkey studied martial arts under the legendary Sifu Wang.",
    players: 4,
    image: "",
  },
  {
    id: "H25",
    name: "The Fool",
    subtitle: "Ordinary-Hero",
    HP: 2,
    treasure: "?",
    description:
      "The Fool is lured to the dungeon of the Boss Monster with the fewest Souls. (In the case of a tie, he waits in town until the tie is broken.)",
    players: 2,
    image: "",
  },
];

// -------------------- 16 Epic Hero Cards -------------------- //

const epicHeroDeck = [
  {
    id: "E1",
    name: "Cleric",
    subtitle: "Epic Hero",
    HP: 11,
    treasure: "Cleric",
    description:
      'Katelyn, Angelic Healer Among the most exalted defenders of righteousness, Katelyn is sometimes referred to as "altissima luce" -- highest light.',
    players: 2,
    image: "",
  },
  {
    id: "E2",
    name: "Cleric",
    subtitle: "Epic Hero",
    HP: 11,
    treasure: "Cleric",
    description:
      "Kerberos Dirtbeard, Canine Cleric Hailing from the Highlands, this flea-bitten friar never turns down a fetch quest.",
    players: 3,
    image: "",
  },
  {
    id: "E3",
    name: "Cleric",
    subtitle: "Epic Hero",
    HP: 13,
    treasure: "Cleric",
    description:
      'Lord Van Ette A prophet and collector of tithes for the omniscient Celestial, his "miracles" are enhanced by the brandewijn distilled by the monks of Nintehn.',
    players: 2,
    image: "",
  },
  {
    id: "E4",
    name: "Cleric",
    subtitle: "Epic Hero",
    HP: 13,
    treasure: "Cleric",
    description:
      "Jejune & Everlea, Holy SistersTenacious and vivacious, each is a threat on her own. But woe betide any who stand against the sisters' united power.",
    players: 4,
    image: "",
  },
  {
    id: "E5",
    name: "Fighter",
    subtitle: "Epic Hero",
    HP: 11,
    treasure: "Fighter",
    description:
      "Frankov, the Envoy This brave warrior stands alone against the evil that rules the world.",
    players: 2,
    image: "",
  },
  {
    id: "E6",
    name: "Fighter",
    subtitle: "Epic Hero",
    HP: 11,
    treasure: "Fighter",
    description:
      "Nate the Squidslayer This surly warrior defeated the mighty Squib, Lord of the Rocktopi. Now he seeks to destroy King Croak himself...",
    players: 3,
    image: "",
  },
  {
    id: "E7",
    name: "Fighter",
    subtitle: "Epic Hero",
    HP: 13,
    treasure: "Fighter",
    description:
      "Antonius, the Rune Knight An elite dragoon, Sir Tony wears armor inscribed with magic runes of ancient and mysterious power.",
    players: 2,
    image: "",
  },
  {
    id: "E8",
    name: "Fighter",
    subtitle: "Epic Hero",
    HP: 13,
    treasure: "Fighter",
    description:
      "Asmor the Aweless What Asmor lacks in tactical acuity, he more than makes up for in impulsiveness. There's no door he won't kick down, much to the frustration of Arcadia's innkeepers.",
    players: 4,
    image: "",
  },
  {
    id: "E9",
    name: "Mage",
    subtitle: "Epic Hero",
    HP: 11,
    treasure: "Mage",
    description:
      "Tempros the Time Marauder He would use his control over time to end all crime. In his hands, this world could be a utopia.",
    players: 2,
    image: "",
  },
  {
    id: "E10",
    name: "Mage",
    subtitle: "Epic Hero",
    HP: 11,
    treasure: "Mage",
    description:
      'Chia Kang, Mystical Warlock of Yu "Hey, Listen! I think this Boss Monster is--" "Silence, fairy! I will crush him through fire and flames in the name of the Order!"',
    players: 3,
    image: "",
  },
  {
    id: "E11",
    name: "Mage",
    subtitle: "Epic Hero",
    HP: 13,
    treasure: "Mage",
    description:
      'Terric Warhelm, Half-Elf Archmage "Weakened by an evil curse, this once-mighty warrior donned the red robes and turned to magic. His spells are chnneled through a magical helmet of untold power."',
    players: 2,
    image: "",
  },
  {
    id: "E12",
    name: "Mage",
    subtitle: "Epic Hero",
    HP: 13,
    treasure: "Mage",
    description:
      "Wayward, the Drifter He is a traveler from a strange land whose only goal is to do whatever is right... whatever that means.",
    players: 4,
    image: "",
  },
  {
    id: "E13",
    name: "Thief",
    subtitle: "Epic Hero",
    HP: 11,
    treasure: "Thief",
    description:
      "Hya, Legendary Shinobi Arcadia's deadliest ninja,Hya lives by the proverb that revenge is a dish best served cold.",
    players: 2,
    image: "",
  },
  {
    id: "E14",
    name: "Thief",
    subtitle: "Epic Hero",
    HP: 11,
    treasure: "Thief",
    description:
      "Blackbeard Jake He hid the treasure he won from insult swordfighting in a booty-trap filled cave on the coast of a town called Astoria.",
    players: 3,
    image: "",
  },
  {
    id: "E15",
    name: "Thief",
    subtitle: "Epic Hero",
    HP: 13,
    treasure: "Thief",
    description:
      "Cecil Leoran, Master Factotum The ultimate jack-of-all-trades, Cecil isn't above taking mercenary work to earn gold and glory. But his real goal has never changed: to find a way to return his betrothed Nevra, sealed into a rapier, to her original form.",
    players: 2,
    image: "",
  },
  {
    id: "E14",
    name: "Thief",
    subtitle: "Epic Hero",
    HP: 13,
    treasure: "Thief",
    description:
      "Wallbanger Basketweaver This humble halfing world rather spend his days weaving baskets and eating crumbly cookies. But when adventure calls, he proves a first-rate burglar",
    players: 4,
    image: "",
  },
];
