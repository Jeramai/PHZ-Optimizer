export type Attribute =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Earth'
  | 'Wind'
  | 'Light'
  | 'Dark'
  | 'Plant'
  | 'Electric'
  | 'Ice'
  | 'Ground'
  | 'Poison';
export type Grade = 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
export type BuffType = 'Atk Spd' | 'Melee' | 'Ranged' | 'Basic' | 'Boss' | 'Skill' | 'All' | 'Crit D.' | 'Crit %';
export type Buff = {
  type: BuffType | Attribute;
  amount: number;
};

export interface ToyZData {
  name: string;
  grade: Grade;
  attribute: Attribute;
  buffs: Buff[];
  season?: number;
}
interface ToyZ {
  [key: string]: ToyZData;
}
const TOYZ: ToyZ = {
  '10000': {
    name: 'Chick',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Atk Spd',
        amount: 20
      }
    ]
  },
  '10001': {
    name: 'Brown Bear',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4
      }
    ]
  },
  '10002': {
    name: 'White Bear',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3
      }
    ]
  },
  '10003': {
    name: 'Black Bear',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5
      }
    ]
  },
  '10004': {
    name: 'Orange Fox',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4
      }
    ]
  },
  '10005': {
    name: 'White Fox',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3
      }
    ]
  },
  '10006': {
    name: 'Yellow Fox',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5
      }
    ]
  },
  '10007': {
    name: 'Brown Cat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4
      }
    ]
  },
  '10008': {
    name: 'White Cat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3
      }
    ]
  },
  '10009': {
    name: 'Black Cat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5
      }
    ]
  },
  '10010': {
    name: 'Pink Rabbit',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4
      }
    ]
  },
  '10011': {
    name: 'White Rabbit',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3
      }
    ]
  },
  '10012': {
    name: 'Black Rabbit',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5
      }
    ]
  },
  '10013': {
    name: 'Orange Tiger',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4
      }
    ]
  },
  '10014': {
    name: 'White Tiger',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3
      }
    ]
  },
  '10015': {
    name: 'Black Tiger',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5
      }
    ]
  },
  '10016': {
    name: 'Brown Rat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4
      }
    ]
  },
  '10017': {
    name: 'White Rat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3
      }
    ]
  },
  '10018': {
    name: 'Black Rat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5
      }
    ]
  },
  '10019': {
    name: 'Brown Squirrel',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4
      }
    ]
  },
  '10020': {
    name: 'White Squirrel',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3
      }
    ]
  },
  '10021': {
    name: 'Hedgehog',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5
      }
    ]
  },
  '10022': {
    name: 'Mallard',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4
      }
    ]
  },
  '10023': {
    name: 'Yellow Duck',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3
      }
    ]
  },
  '10024': {
    name: 'White Duck',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5
      }
    ]
  },
  '10025': {
    name: 'Green Crocodile',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4
      }
    ]
  },
  '10026': {
    name: 'Orange Crocodile',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3
      }
    ]
  },
  '10027': {
    name: 'Turquoise Crocodile',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5
      }
    ]
  },
  '10028': {
    name: 'Red Dragon',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4
      }
    ]
  },
  '10029': {
    name: 'Orange Dragon',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3
      }
    ]
  },
  '10030': {
    name: 'Blue Dragon',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5
      }
    ]
  },
  '20031': {
    name: 'Rice Ball Ddongle',
    grade: 'Rare',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'All',
        amount: 2.6
      }
    ]
  },
  '20032': {
    name: 'Dancing Cat',
    grade: 'Rare',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Skill',
        amount: 3.8
      }
    ]
  },
  '20033': {
    name: 'Bug-eaten Apple',
    grade: 'Rare',
    attribute: 'Plant',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Plant',
        amount: 3.8
      }
    ]
  },
  '20034': {
    name: 'Black Drop Grass',
    grade: 'Rare',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'Dark',
        amount: 3.8
      }
    ]
  },
  '20035': {
    name: 'Tangle Pudding',
    grade: 'Rare',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'All',
        amount: 2.6
      }
    ]
  },
  '20036': {
    name: 'Half-cooked Soldier',
    grade: 'Rare',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Skill',
        amount: 3.8
      }
    ]
  },
  '20040': {
    name: 'Melted Cone',
    grade: 'Rare',
    attribute: 'Ice',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'Ice',
        amount: 3.8
      }
    ]
  },
  '20041': {
    name: 'Little Spark',
    grade: 'Rare',
    attribute: 'Electric',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Electric',
        amount: 3.8
      }
    ]
  },
  '20045': {
    name: 'Spicy Octopus',
    grade: 'Rare',
    attribute: 'Fire',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Fire',
        amount: 3.8
      }
    ]
  },
  '20049': {
    name: 'Star Cheerleader',
    grade: 'Rare',
    attribute: 'Light',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'Light',
        amount: 3.8
      }
    ]
  },
  '20052': {
    name: 'Swamp Witch',
    grade: 'Rare',
    attribute: 'Poison',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Poison',
        amount: 3.8
      }
    ]
  },
  '20055': {
    name: 'Zombie Clerk',
    grade: 'Rare',
    attribute: 'Poison',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Poison',
        amount: 3.8
      }
    ]
  },
  '20056': {
    name: 'Hot Choco Mug',
    grade: 'Rare',
    attribute: 'Fire',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'Fire',
        amount: 3.8
      }
    ]
  },
  '20057': {
    name: 'Two-faced Black Sheep',
    grade: 'Rare',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Dark',
        amount: 3.8
      }
    ]
  },
  '20060': {
    name: 'Lion Flower',
    grade: 'Rare',
    attribute: 'Plant',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Plant',
        amount: 3.8
      }
    ]
  },
  '20063': {
    name: 'Mohican Bull',
    grade: 'Rare',
    attribute: 'Ground',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'Earth',
        amount: 3.8
      }
    ]
  },
  '20064': {
    name: 'Moss Golem',
    grade: 'Rare',
    attribute: 'Ground',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Earth',
        amount: 3.8
      }
    ]
  },
  '20065': {
    name: 'Slum Porgo',
    grade: 'Rare',
    attribute: 'Poison',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Poison',
        amount: 3.8
      }
    ]
  },
  '20068': {
    name: 'Frozen Mohican',
    grade: 'Rare',
    attribute: 'Ice',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'Ice',
        amount: 3.8
      }
    ]
  },
  '20073': {
    name: 'Rice Cake Princess',
    grade: 'Rare',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'All',
        amount: 2.6
      }
    ]
  },
  '20074': {
    name: 'Gentleman Crocodile',
    grade: 'Rare',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Skill',
        amount: 3.8
      }
    ]
  },
  '20075': {
    name: 'Mira Fran',
    grade: 'Rare',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'All',
        amount: 2.6
      }
    ]
  },
  '20076': {
    name: 'Vampire Wizard',
    grade: 'Rare',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'Skill',
        amount: 3.8
      }
    ]
  },
  '20077': {
    name: 'Cute Cake',
    grade: 'Rare',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Ice',
        amount: 3.8
      }
    ]
  },
  '20078': {
    name: 'Bouncing Snowball',
    grade: 'Rare',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Ice',
        amount: 3.8
      }
    ]
  },
  '20079': {
    name: 'Tinker Bomb',
    grade: 'Rare',
    attribute: 'Plant',
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'Plant',
        amount: 3.8
      }
    ]
  },
  '20080': {
    name: 'Venom Cloud Argus',
    grade: 'Rare',
    attribute: 'Poison',
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Poison',
        amount: 3.8
      }
    ]
  },
  '20081': {
    name: 'Glacial Guard',
    grade: 'Rare',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Ice',
        amount: 3.8
      }
    ]
  },
  '20082': {
    name: 'Zephyr Guard',
    grade: 'Rare',
    attribute: 'Wind',
    buffs: [
      {
        type: 'Basic',
        amount: 5.5
      },
      {
        type: 'Wind',
        amount: 3.8
      }
    ]
  },
  '20083': {
    name: 'Charlie',
    grade: 'Rare',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Skill',
        amount: 3.8
      }
    ]
  },
  '20084': {
    name: 'Rosaline',
    grade: 'Rare',
    attribute: 'Ground',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'All',
        amount: 2.6
      }
    ]
  },
  '20085': {
    name: 'Foshimi',
    grade: 'Rare',
    attribute: 'Water',
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Water',
        amount: 3.8
      }
    ]
  },
  '20086': {
    name: 'Katoro',
    grade: 'Rare',
    attribute: 'Ground',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Earth',
        amount: 3.8
      }
    ]
  },
  '20087': {
    name: 'Tobi',
    grade: 'Rare',
    attribute: 'Poison',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Poison',
        amount: 3.8
      }
    ]
  },
  '20088': {
    name: 'Nureongi',
    grade: 'Rare',
    attribute: 'Light',
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Light',
        amount: 3.8
      }
    ]
  },
  '20089': {
    name: 'Torong',
    grade: 'Rare',
    attribute: 'Fire',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.3
      },
      {
        type: 'Fire',
        amount: 3.8
      }
    ]
  },
  '20090': {
    name: 'Lavio',
    grade: 'Rare',
    attribute: 'Electric',
    buffs: [
      {
        type: 'Melee',
        amount: 4.4
      },
      {
        type: 'Electric',
        amount: 3.8
      }
    ]
  },
  '30021': {
    name: 'Anubis',
    grade: 'Epic',
    attribute: 'Ground',
    season: 1,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Earth',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30022': {
    name: 'Insensitive Frang',
    grade: 'Epic',
    attribute: 'Poison',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Poison',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30023': {
    name: 'Furious Berserker',
    grade: 'Epic',
    attribute: 'Normal',
    season: 2,
    buffs: [
      {
        type: 'Basic',
        amount: 8.2
      },
      {
        type: 'All',
        amount: 3.8
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30024': {
    name: 'Tenacious Demolitionist',
    grade: 'Epic',
    attribute: 'Fire',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Fire',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30025': {
    name: 'Sleepy Tear Fairy',
    grade: 'Epic',
    attribute: 'Water',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Water',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30026': {
    name: 'Crow Priest',
    grade: 'Epic',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Dark',
        amount: 4.5
      },
      {
        type: 'Boss',
        amount: 5.1
      }
    ]
  },
  '30027': {
    name: 'Clumsy Apprentice Ninja',
    grade: 'Epic',
    attribute: 'Wind',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Wind',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30028': {
    name: 'Dark Mage Violet',
    grade: 'Epic',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Dark',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30029': {
    name: 'Positive Pumpkin Soldier',
    grade: 'Epic',
    attribute: 'Plant',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Plant',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30030': {
    name: 'Diver Duck',
    grade: 'Epic',
    attribute: 'Water',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Water',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30031': {
    name: 'Ice Prince',
    grade: 'Epic',
    attribute: 'Ice',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Ice',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30032': {
    name: 'Prototype - Alpha',
    grade: 'Epic',
    attribute: 'Electric',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Electric',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30033': {
    name: 'Gentle Chairman',
    grade: 'Epic',
    attribute: 'Normal',
    season: 2,
    buffs: [
      {
        type: 'Basic',
        amount: 8.2
      },
      {
        type: 'Skill',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30034': {
    name: 'Viking Intern',
    grade: 'Epic',
    attribute: 'Electric',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Electric',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30035': {
    name: 'Grumpy Teres',
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'All',
        amount: 3
      },
      {
        type: 'Boss',
        amount: 5.1
      }
    ]
  },
  '30036': {
    name: 'Hacker Cat',
    grade: 'Epic',
    attribute: 'Electric',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Electric',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30037': {
    name: 'Wandering Painter',
    grade: 'Epic',
    attribute: 'Water',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Water',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30038': {
    name: 'Dizzying Medusa',
    grade: 'Epic',
    attribute: 'Ground',
    season: 1,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Earth',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30039': {
    name: 'Chilly Snowman',
    grade: 'Epic',
    attribute: 'Ice',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Ice',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30040': {
    name: 'Carrot Rider',
    grade: 'Epic',
    attribute: 'Plant',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Plant',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30041': {
    name: 'Gentle Breeze Cat',
    grade: 'Epic',
    attribute: 'Wind',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Wind',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30042': {
    name: 'Angel Muscle',
    grade: 'Epic',
    attribute: 'Light',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Light',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30043': {
    name: 'Avian Warrior',
    grade: 'Epic',
    attribute: 'Wind',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Wind',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30044': {
    name: 'Venomous Chubby',
    grade: 'Epic',
    attribute: 'Poison',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Poison',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30045': {
    name: 'Mohican Bulldog',
    grade: 'Epic',
    attribute: 'Fire',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Fire',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30046': {
    name: 'Timid Ghost',
    grade: 'Epic',
    attribute: 'Light',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Light',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30047': {
    name: 'Suspicious Blacksmith',
    grade: 'Epic',
    attribute: 'Fire',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Fire',
        amount: 4.5
      },
      {
        type: 'Boss',
        amount: 5.1
      }
    ]
  },
  '30048': {
    name: 'Winter Witch',
    grade: 'Epic',
    attribute: 'Ice',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Ice',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30049': {
    name: 'Poisonous Moth',
    grade: 'Epic',
    attribute: 'Poison',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Poison',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30050': {
    name: 'Bizarre Shaman',
    grade: 'Epic',
    attribute: 'Plant',
    season: 1,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Plant',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30051': {
    name: 'Child Water Thief',
    grade: 'Epic',
    attribute: 'Water',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Water',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30052': {
    name: 'Cowardly Snake',
    grade: 'Epic',
    attribute: 'Poison',
    season: 1,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Poison',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30053': {
    name: 'Cuckoo',
    grade: 'Epic',
    attribute: 'Light',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Light',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30054': {
    name: 'Gloomy Cloud',
    grade: 'Epic',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Dark',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30055': {
    name: 'DJ. Duck',
    grade: 'Epic',
    attribute: 'Wind',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Wind',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30056': {
    name: 'Stubborn Moai',
    grade: 'Epic',
    attribute: 'Ground',
    season: 1,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Earth',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30057': {
    name: 'Devil Cat',
    grade: 'Epic',
    attribute: 'Dark',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Dark',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30058': {
    name: 'Shining Star',
    grade: 'Epic',
    attribute: 'Light',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Light',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30059': {
    name: "Glacier's Messenger",
    grade: 'Epic',
    attribute: 'Ice',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Ice',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30060': {
    name: 'Fire Ant',
    grade: 'Epic',
    attribute: 'Fire',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Fire',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30061': {
    name: 'Zombie Miner',
    grade: 'Epic',
    attribute: 'Ground',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Earth',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30062': {
    name: 'Pouch Goblin',
    grade: 'Epic',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Skill',
        amount: 4.5
      },
      {
        type: 'Boss',
        amount: 5.1
      }
    ]
  },
  '30063': {
    name: 'Festival Mask',
    grade: 'Epic',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'All',
        amount: 3
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30064': {
    name: 'Pale Ghost',
    grade: 'Epic',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Skill',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30065': {
    name: 'Scientist Victor',
    grade: 'Epic',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'All',
        amount: 3
      },
      {
        type: 'Boss',
        amount: 5.1
      }
    ]
  },
  '30066': {
    name: 'Mini Blumens',
    grade: 'Epic',
    attribute: 'Water',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Water',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30067': {
    name: 'Mini Betalanse',
    grade: 'Epic',
    attribute: 'Plant',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Plant',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30068': {
    name: 'Mini Cryo',
    grade: 'Epic',
    attribute: 'Ice',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Ice',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30069': {
    name: 'Mini Sporelex',
    grade: 'Epic',
    attribute: 'Plant',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Plant',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30070': {
    name: 'Mini Toxspore',
    grade: 'Epic',
    attribute: 'Poison',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Poison',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30071': {
    name: 'Mini Bristol',
    grade: 'Epic',
    attribute: 'Ground',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Earth',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30072': {
    name: 'Mini Pierrot',
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Boss',
        amount: 3.9
      },
      {
        type: 'Crit D.',
        amount: 4.5
      },
      {
        type: 'Boss',
        amount: 5.1
      }
    ]
  },
  '30073': {
    name: 'Polybear',
    grade: 'Epic',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Ice',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30074': {
    name: 'Kwonter',
    grade: 'Epic',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Ice',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30075': {
    name: 'Mini Veilian',
    grade: 'Epic',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Dark',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30076': {
    name: 'Mini Arque',
    grade: 'Epic',
    attribute: 'Electric',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Electric',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30077': {
    name: 'Mini Rootrus',
    grade: 'Epic',
    attribute: 'Fire',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Fire',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30078': {
    name: 'Blue Carbuncle',
    grade: 'Epic',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Ice',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30079': {
    name: 'Quiet Gray',
    grade: 'Epic',
    attribute: 'Dark',
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Dark',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30080': {
    name: 'Monkey Guard',
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Skill',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30081': {
    name: 'Wanderer Artist',
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'All',
        amount: 3
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30082': {
    name: "Lo'oong Cat",
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Skill',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30083': {
    name: 'Beat Peng',
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'All',
        amount: 3
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30084': {
    name: 'Cogni',
    grade: 'Epic',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Skill',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30085': {
    name: 'Carrotin Rampager',
    grade: 'Epic',
    attribute: 'Plant',
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Plant',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30086': {
    name: 'Warrior Redrick',
    grade: 'Epic',
    attribute: 'Fire',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Fire',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30087': {
    name: 'Piranha',
    grade: 'Epic',
    attribute: 'Water',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Water',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30088': {
    name: 'Bomb Bird',
    grade: 'Epic',
    attribute: 'Fire',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Fire',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30089': {
    name: 'Observer Gearbit',
    grade: 'Epic',
    attribute: 'Electric',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Electric',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30090': {
    name: 'Mini Sapphire blade',
    grade: 'Epic',
    attribute: 'Light',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Light',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30091': {
    name: 'Mini Coralisk',
    grade: 'Epic',
    attribute: 'Water',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Water',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30092': {
    name: 'Mini Breeze',
    grade: 'Epic',
    attribute: 'Wind',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Wind',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30093': {
    name: 'Ellie',
    grade: 'Epic',
    attribute: 'Water',
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Water',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30094': {
    name: 'Uni',
    grade: 'Epic',
    attribute: 'Light',
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Light',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30095': {
    name: 'Vincenzo',
    grade: 'Epic',
    attribute: 'Plant',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Plant',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30096': {
    name: 'PopCoco',
    grade: 'Epic',
    attribute: 'Normal',
    season: 3,
    buffs: [
      {
        type: 'Basic',
        amount: 8.2
      },
      {
        type: 'Skill',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30097': {
    name: 'Everlyn',
    grade: 'Epic',
    attribute: 'Plant',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Plant',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30098': {
    name: 'Clockwork Robot',
    grade: 'Epic',
    attribute: 'Normal',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'All',
        amount: 3.8
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30099': {
    name: 'Stitch Bunny',
    grade: 'Epic',
    attribute: 'Dark',
    season: 3,
    buffs: [
      {
        type: 'Basic',
        amount: 8.2
      },
      {
        type: 'Dark',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30100': {
    name: 'SanDiego',
    grade: 'Epic',
    attribute: 'Ground',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Earth',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30101': {
    name: 'Watermelon Trio',
    grade: 'Epic',
    attribute: 'Plant',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Plant',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30102': {
    name: 'Detonix',
    grade: 'Epic',
    attribute: 'Fire',
    season: 3,
    buffs: [
      {
        type: 'Basic',
        amount: 8.2
      },
      {
        type: 'Fire',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30103': {
    name: 'Stratus',
    grade: 'Epic',
    attribute: 'Wind',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Wind',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30104': {
    name: 'Candellus',
    grade: 'Epic',
    attribute: 'Dark',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Dark',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30105': {
    name: 'Bolteos',
    grade: 'Epic',
    attribute: 'Electric',
    season: 3,
    buffs: [
      {
        type: 'Basic',
        amount: 8.2
      },
      {
        type: 'Electric',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30106': {
    name: 'Pico the Chicken',
    grade: 'Epic',
    attribute: 'Fire',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Fire',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30107': {
    name: 'Winter Specter',
    grade: 'Epic',
    attribute: 'Ice',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Ice',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30108': {
    name: 'Belmot',
    grade: 'Epic',
    attribute: 'Dark',
    season: 3,
    buffs: [
      {
        type: 'Basic',
        amount: 8.2
      },
      {
        type: 'Dark',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30109': {
    name: 'Ringo',
    grade: 'Epic',
    attribute: 'Ground',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Earth',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30110': {
    name: 'Hydrix',
    grade: 'Epic',
    attribute: 'Water',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Water',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30111': {
    name: 'Gastron',
    grade: 'Epic',
    attribute: 'Wind',
    season: 3,
    buffs: [
      {
        type: 'Basic',
        amount: 8.2
      },
      {
        type: 'Wind',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30112': {
    name: 'Resonix',
    grade: 'Epic',
    attribute: 'Electric',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Electric',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30113': {
    name: 'Freezton',
    grade: 'Epic',
    attribute: 'Ice',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Ice',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30114': {
    name: 'Sludgic',
    grade: 'Epic',
    attribute: 'Poison',
    season: 3,
    buffs: [
      {
        type: 'Basic',
        amount: 8.2
      },
      {
        type: 'Poison',
        amount: 5.7
      },
      {
        type: 'Crit D.',
        amount: 6.4
      }
    ]
  },
  '30115': {
    name: 'Bazrad',
    grade: 'Epic',
    attribute: 'Poison',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 6.5
      },
      {
        type: 'Poison',
        amount: 5.7
      },
      {
        type: 'Crit %',
        amount: 2.2
      }
    ]
  },
  '30116': {
    name: 'Cosmorin',
    grade: 'Epic',
    attribute: 'Light',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.9
      },
      {
        type: 'Light',
        amount: 5.7
      },
      {
        type: 'Boss',
        amount: 6.4
      }
    ]
  },
  '30117': {
    name: 'Kaki',
    grade: 'Epic',
    attribute: 'Plant',
    buffs: [
      {
        type: 'Basic',
        amount: 6.5
      },
      {
        type: 'Plant',
        amount: 4.5
      },
      {
        type: 'Boss',
        amount: 5.1
      }
    ]
  },
  '30118': {
    name: 'Ogama',
    grade: 'Epic',
    attribute: 'Poison',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Poison',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30119': {
    name: 'Jeoseungdori',
    grade: 'Epic',
    attribute: 'Dark',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Dark',
        amount: 4.5
      },
      {
        type: 'Crit %',
        amount: 1.7
      }
    ]
  },
  '30120': {
    name: 'Kkami',
    grade: 'Epic',
    attribute: 'Water',
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Water',
        amount: 4.5
      },
      {
        type: 'Boss',
        amount: 5.1
      }
    ]
  },
  '30121': {
    name: 'Delvo',
    grade: 'Epic',
    attribute: 'Ground',
    buffs: [
      {
        type: 'Melee',
        amount: 5.2
      },
      {
        type: 'Earth',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '30122': {
    name: 'Optigon',
    grade: 'Epic',
    attribute: 'Electric',
    buffs: [
      {
        type: 'Ranged',
        amount: 3.9
      },
      {
        type: 'Electric',
        amount: 4.5
      },
      {
        type: 'Crit D.',
        amount: 5.1
      }
    ]
  },
  '40013': {
    name: 'Timid Gluttony',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 1,
    buffs: [
      {
        type: 'Skill',
        amount: 6
      },
      {
        type: 'Dark',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Dark',
        amount: 9
      }
    ]
  },
  '40014': {
    name: 'Elegant Lucy',
    grade: 'Legendary',
    attribute: 'Light',
    season: 1,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Light',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Light',
        amount: 9
      }
    ]
  },
  '40015': {
    name: 'Otakun',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 1,
    buffs: [
      {
        type: 'Basic',
        amount: 10
      },
      {
        type: 'All',
        amount: 4.6
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Boss',
        amount: 9
      }
    ]
  },
  '40016': {
    name: 'Victorious Blackcat',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 2,
    buffs: [
      {
        type: 'Basic',
        amount: 10
      },
      {
        type: 'Skill',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Boss',
        amount: 9
      }
    ]
  },
  '40017': {
    name: 'Pirate Octa',
    grade: 'Legendary',
    attribute: 'Water',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Water',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Water',
        amount: 9
      }
    ]
  },
  '40018': {
    name: 'Mad Alchemist',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Poison',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Poison',
        amount: 9
      }
    ]
  },
  '40019': {
    name: 'Racer Chili',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Fire',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Fire',
        amount: 9
      }
    ]
  },
  '40020': {
    name: 'Golden Gobking',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Earth',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Earth',
        amount: 9
      }
    ]
  },
  '40021': {
    name: 'Lightning-struck Gobking',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 2,
    buffs: [
      {
        type: 'Skill',
        amount: 6
      },
      {
        type: 'Electric',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Electric',
        amount: 9
      }
    ]
  },
  '40022': {
    name: 'Snooty Camilla',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Plant',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Plant',
        amount: 9
      }
    ]
  },
  '40023': {
    name: 'Relaxed Senior Ninja',
    grade: 'Legendary',
    attribute: 'Wind',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Wind',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Wind',
        amount: 9
      }
    ]
  },
  '40024': {
    name: 'Ferocious Ice Queen',
    grade: 'Legendary',
    attribute: 'Ice',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Ice',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Ice',
        amount: 9
      }
    ]
  },
  '40025': {
    name: 'Lava Turtle',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 2,
    buffs: [
      {
        type: 'Skill',
        amount: 6
      },
      {
        type: 'Fire',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Fire',
        amount: 9
      }
    ]
  },
  '40026': {
    name: 'Gaming Cat',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Electric',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Electric',
        amount: 9
      }
    ]
  },
  '40027': {
    name: 'Military Band Teres',
    grade: 'Legendary',
    attribute: 'Wind',
    season: 1,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Wind',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Wind',
        amount: 9
      }
    ]
  },
  '40028': {
    name: 'General Drago',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'All',
        amount: 4.6
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Boss',
        amount: 9
      }
    ]
  },
  '40029': {
    name: 'Contemplative Statue',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Earth',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Earth',
        amount: 9
      }
    ]
  },
  '40030': {
    name: 'Witch of Selfie',
    grade: 'Legendary',
    attribute: 'Light',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Light',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Light',
        amount: 9
      }
    ]
  },
  '40031': {
    name: 'Wave Riding Surfer',
    grade: 'Legendary',
    attribute: 'Water',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Water',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Water',
        amount: 9
      }
    ]
  },
  '40032': {
    name: 'Merciless Balrog',
    grade: 'Legendary',
    attribute: 'Ice',
    season: 1,
    buffs: [
      {
        type: 'Skill',
        amount: 6
      },
      {
        type: 'Ice',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Ice',
        amount: 9
      }
    ]
  },
  '40033': {
    name: 'Chimera Doctor',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 1,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Poison',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Poison',
        amount: 9
      }
    ]
  },
  '40034': {
    name: 'Masked Rabbit Ghost',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 1,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Dark',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Dark',
        amount: 9
      }
    ]
  },
  '40035': {
    name: 'Delicate Lotus Fairy',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Plant',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Plant',
        amount: 9
      }
    ]
  },
  '40036': {
    name: 'Dollmaker Mari',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 1,
    buffs: [
      {
        type: 'Basic',
        amount: 10
      },
      {
        type: 'Skill',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Boss',
        amount: 9
      }
    ]
  },
  '40037': {
    name: 'Lonely Hero',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Fire',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Fire',
        amount: 9
      }
    ]
  },
  '40038': {
    name: 'Moon Rabbit',
    grade: 'Legendary',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'All',
        amount: 3.7
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Skill',
        amount: 7.2
      }
    ]
  },
  '40039': {
    name: 'Rice Cake Tiger',
    grade: 'Legendary',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Skill',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'All',
        amount: 4.8
      }
    ]
  },
  '40040': {
    name: 'Cursed Durant',
    grade: 'Legendary',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'All',
        amount: 3.7
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Skill',
        amount: 7.2
      }
    ]
  },
  '40041': {
    name: 'Pumpkin Jack',
    grade: 'Legendary',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Skill',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'All',
        amount: 4.8
      }
    ]
  },
  '40042': {
    name: 'Petite Blumens',
    grade: 'Legendary',
    attribute: 'Water',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Water',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Water',
        amount: 7.2
      }
    ]
  },
  '40043': {
    name: 'Petite Betalanse',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Plant',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Plant',
        amount: 7.2
      }
    ]
  },
  '40044': {
    name: 'Petite Cryo',
    grade: 'Legendary',
    attribute: 'Ice',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Ice',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Ice',
        amount: 7.2
      }
    ]
  },
  '40045': {
    name: 'Petite Sporelex',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Plant',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Plant',
        amount: 7.2
      }
    ]
  },
  '40046': {
    name: 'Petite Toxspore',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Poison',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Poison',
        amount: 7.2
      }
    ]
  },
  '40047': {
    name: 'Petite Bristol',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Earth',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Earth',
        amount: 7.2
      }
    ]
  },
  '40048': {
    name: 'Petite Pierrot',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Boss',
        amount: 4.8
      },
      {
        type: 'Basic',
        amount: 9.2
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Skill',
        amount: 7.2
      }
    ]
  },
  '40049': {
    name: 'Wolfgang Crusher',
    grade: 'Legendary',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Ice',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Ice',
        amount: 7.2
      }
    ]
  },
  '40050': {
    name: 'Matchstick Wolf',
    grade: 'Legendary',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Ice',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Ice',
        amount: 7.2
      }
    ]
  },
  '40051': {
    name: 'Petite Veilian',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Dark',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Dark',
        amount: 7.2
      }
    ]
  },
  '40052': {
    name: 'Petite Arque',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Electric',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Electric',
        amount: 7.2
      }
    ]
  },
  '40053': {
    name: 'Petite Rootrus',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Fire',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Fire',
        amount: 7.2
      }
    ]
  },
  '40054': {
    name: 'Enyx',
    grade: 'Legendary',
    attribute: 'Fire',
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Fire',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Fire',
        amount: 7.2
      }
    ]
  },
  '40055': {
    name: 'Magros',
    grade: 'Legendary',
    attribute: 'Ground',
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Earth',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Earth',
        amount: 7.2
      }
    ]
  },
  '40056': {
    name: 'Despier',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Poison',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Poison',
        amount: 7.2
      }
    ]
  },
  '40057': {
    name: 'Lillian White',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Dark',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Dark',
        amount: 7.2
      }
    ]
  },
  '40058': {
    name: 'Chick Admiral',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Atk Spd',
        amount: 30
      },
      {
        type: 'All',
        amount: 3.7
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Skill',
        amount: 7.2
      }
    ]
  },
  '40059': {
    name: 'Vannes',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Dark',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Dark',
        amount: 7.2
      }
    ]
  },
  '40060': {
    name: 'Cobit',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Poison',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Poison',
        amount: 7.2
      }
    ]
  },
  '40061': {
    name: 'Shroud',
    grade: 'Legendary',
    attribute: 'Wind',
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Wind',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Wind',
        amount: 7.2
      }
    ]
  },
  '40062': {
    name: 'Vulcan',
    grade: 'Legendary',
    attribute: 'Fire',
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Fire',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Fire',
        amount: 7.2
      }
    ]
  },
  '40063': {
    name: 'Golly',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Earth',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Earth',
        amount: 7.2
      }
    ]
  },
  '40064': {
    name: 'Manok',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Skill',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'All',
        amount: 4.8
      }
    ]
  },
  '40065': {
    name: 'Petite Sapphire blade',
    grade: 'Legendary',
    attribute: 'Light',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Light',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Light',
        amount: 7.2
      }
    ]
  },
  '40066': {
    name: 'Petite Coralisk',
    grade: 'Legendary',
    attribute: 'Water',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Water',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Water',
        amount: 7.2
      }
    ]
  },
  '40067': {
    name: 'Petite Breeze',
    grade: 'Legendary',
    attribute: 'Wind',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Wind',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Wind',
        amount: 7.2
      }
    ]
  },
  '40068': {
    name: 'Hawkie',
    grade: 'Legendary',
    attribute: 'Wind',
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Wind',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Wind',
        amount: 7.2
      }
    ]
  },
  '40069': {
    name: 'Crepe Cat',
    grade: 'Legendary',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Basic',
        amount: 9.2
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'All',
        amount: 4.8
      }
    ]
  },
  '40070': {
    name: 'Deeric',
    grade: 'Legendary',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Ice',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Ice',
        amount: 7.2
      }
    ]
  },
  '40071': {
    name: 'Volcardon',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Fire',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Fire',
        amount: 9
      }
    ]
  },
  '40072': {
    name: 'Tidehorn',
    grade: 'Legendary',
    attribute: 'Water',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Water',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Water',
        amount: 9
      }
    ]
  },
  '40073': {
    name: 'Iron Hound',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Earth',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Earth',
        amount: 9
      }
    ]
  },
  '40074': {
    name: 'Rylie',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 3,
    buffs: [
      {
        type: 'Skill',
        amount: 6
      },
      {
        type: 'Electric',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Electric',
        amount: 9
      }
    ]
  },
  '40075': {
    name: 'Dazmir',
    grade: 'Legendary',
    attribute: 'Light',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Light',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Light',
        amount: 9
      }
    ]
  },
  '40076': {
    name: 'Belmordic',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Dark',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Dark',
        amount: 9
      }
    ]
  },
  '40077': {
    name: 'Arrose',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 3,
    buffs: [
      {
        type: 'Basic',
        amount: 10
      },
      {
        type: 'Plant',
        amount: 6.9
      },
      {
        type: 'Ranged',
        amount: 7.8
      },
      {
        type: 'Plant',
        amount: 9
      }
    ]
  },
  '40078': {
    name: 'Eryndra',
    grade: 'Legendary',
    attribute: 'Water',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Water',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Water',
        amount: 9
      }
    ]
  },
  '40079': {
    name: 'Corvalis',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Poison',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Poison',
        amount: 9
      }
    ]
  },
  '40080': {
    name: 'Galeon',
    grade: 'Legendary',
    attribute: 'Wind',
    season: 3,
    buffs: [
      {
        type: 'Basic',
        amount: 10
      },
      {
        type: 'Wind',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Wind',
        amount: 9
      }
    ]
  },
  '40081': {
    name: 'Avenhart',
    grade: 'Legendary',
    attribute: 'Ice',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Ice',
        amount: 6.9
      },
      {
        type: 'All',
        amount: 5.2
      },
      {
        type: 'Ice',
        amount: 9
      }
    ]
  },
  '40082': {
    name: 'Furyhog',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 3,
    buffs: [
      {
        type: 'Skill',
        amount: 6
      },
      {
        type: 'Electric',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Electric',
        amount: 9
      }
    ]
  },
  '40083': {
    name: 'Spirit Moki',
    grade: 'Legendary',
    attribute: 'Light',
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Light',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Light',
        amount: 7.2
      }
    ]
  },
  '40084': {
    name: 'Shadow Moki',
    grade: 'Legendary',
    attribute: 'Dark',
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Dark',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Dark',
        amount: 7.2
      }
    ]
  },
  '40085': {
    name: 'Nyx',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Dark',
        amount: 5.6
      },
      {
        type: 'Ranged',
        amount: 6.3
      },
      {
        type: 'Dark',
        amount: 7.2
      }
    ]
  },
  '40086': {
    name: 'Gentleman An',
    grade: 'Legendary',
    attribute: 'Electric',
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Electric',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Electric',
        amount: 7.2
      }
    ]
  },
  '40087': {
    name: 'Lady Yeo',
    grade: 'Legendary',
    attribute: 'Fire',
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Fire',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Fire',
        amount: 7.2
      }
    ]
  },
  '40088': {
    name: 'Radiant Bunny',
    grade: 'Legendary',
    attribute: 'Light',
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Light',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Light',
        amount: 7.2
      }
    ]
  },
  '40089': {
    name: 'Centigor',
    grade: 'Legendary',
    attribute: 'Poison',
    buffs: [
      {
        type: 'Skill',
        amount: 4.8
      },
      {
        type: 'Poison',
        amount: 5.6
      },
      {
        type: 'All',
        amount: 4.2
      },
      {
        type: 'Poison',
        amount: 7.2
      }
    ]
  },
  '40090': {
    name: 'Reno',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 0,
    buffs: [
      {
        type: 'Skill',
        amount: 4.8
      },
      {
        type: 'Electric',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Electric',
        amount: 7.2
      }
    ]
  },
  '40091': {
    name: 'Maron',
    grade: 'Legendary',
    attribute: 'Wind',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Wind',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Wind',
        amount: 7.2
      }
    ]
  },
  '40092': {
    name: 'Lurumi',
    grade: 'Legendary',
    attribute: 'Light',
    season: 0,
    buffs: [
      {
        type: 'Skill',
        amount: 4.8
      },
      {
        type: 'Light',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Light',
        amount: 7.2
      }
    ]
  },
  '40093': {
    name: 'Glakion',
    grade: 'Legendary',
    attribute: 'Ice',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Ice',
        amount: 5.6
      },
      {
        type: 'All',
        amount: 4.2
      },
      {
        type: 'Ice',
        amount: 7.2
      }
    ]
  },
  '40094': {
    name: 'Ifreon',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 6.4
      },
      {
        type: 'Fire',
        amount: 5.6
      },
      {
        type: 'Crit D.',
        amount: 6.3
      },
      {
        type: 'Fire',
        amount: 7.2
      }
    ]
  },
  '40095': {
    name: 'Bloomnia',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 4.8
      },
      {
        type: 'Plant',
        amount: 5.6
      },
      {
        type: 'All',
        amount: 4.2
      },
      {
        type: 'Plant',
        amount: 7.2
      }
    ]
  },
  '40096': {
    name: 'Petra',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Earth',
        amount: 5.6
      },
      {
        type: 'Crit %',
        amount: 2.1
      },
      {
        type: 'Earth',
        amount: 7.2
      }
    ]
  },
  '40097': {
    name: 'Radion',
    grade: 'Legendary',
    attribute: 'Light',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 8
      },
      {
        type: 'Light',
        amount: 5.6
      },
      {
        type: 'Boss',
        amount: 6.3
      },
      {
        type: 'Light',
        amount: 7.2
      }
    ]
  },
  '50011': {
    name: 'Protocol - Mechaville',
    grade: 'Mythic',
    attribute: 'Electric',
    season: 1,
    buffs: [
      {
        type: 'Melee',
        amount: 10
      },
      {
        type: 'Electric',
        amount: 8.7
      },
      {
        type: 'Crit D.',
        amount: 9.8
      },
      {
        type: 'Electric',
        amount: 11.3
      }
    ]
  },
  '50012': {
    name: 'Sentinel Leon',
    grade: 'Mythic',
    attribute: 'Fire',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 10
      },
      {
        type: 'Fire',
        amount: 8.7
      },
      {
        type: 'Crit %',
        amount: 3.3
      },
      {
        type: 'Fire',
        amount: 11.3
      }
    ]
  },
  '50013': {
    name: 'Necromancer',
    grade: 'Mythic',
    attribute: 'Ground',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 7.5
      },
      {
        type: 'Earth',
        amount: 8.7
      },
      {
        type: 'Boss',
        amount: 9.8
      },
      {
        type: 'Earth',
        amount: 11.3
      }
    ]
  },
  '50014': {
    name: 'Master of the Abyss',
    grade: 'Mythic',
    attribute: 'Dark',
    season: 1,
    buffs: [
      {
        type: 'Skill',
        amount: 7.5
      },
      {
        type: 'Dark',
        amount: 8.7
      },
      {
        type: 'Crit D.',
        amount: 9.8
      },
      {
        type: 'Dark',
        amount: 11.3
      }
    ]
  },
  '50015': {
    name: 'Angel King',
    grade: 'Mythic',
    attribute: 'Light',
    season: 2,
    buffs: [
      {
        type: 'Ranged',
        amount: 7.5
      },
      {
        type: 'Light',
        amount: 8.7
      },
      {
        type: 'Crit %',
        amount: 3.3
      },
      {
        type: 'Light',
        amount: 11.3
      }
    ]
  },
  '50016': {
    name: 'Tyrant Sharksa',
    grade: 'Mythic',
    attribute: 'Water',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 7.5
      },
      {
        type: 'Water',
        amount: 8.7
      },
      {
        type: 'Boss',
        amount: 9.8
      },
      {
        type: 'Water',
        amount: 11.3
      }
    ]
  },
  '50017': {
    name: 'Flora Fairy',
    grade: 'Mythic',
    attribute: 'Plant',
    season: 2,
    buffs: [
      {
        type: 'Skill',
        amount: 7.5
      },
      {
        type: 'Plant',
        amount: 8.7
      },
      {
        type: 'Crit D.',
        amount: 9.8
      },
      {
        type: 'Plant',
        amount: 11.3
      }
    ]
  },
  '50018': {
    name: 'Rebel King Glaesia',
    grade: 'Mythic',
    attribute: 'Ice',
    season: 2,
    buffs: [
      {
        type: 'Melee',
        amount: 10
      },
      {
        type: 'Ice',
        amount: 8.7
      },
      {
        type: 'Crit %',
        amount: 3.3
      },
      {
        type: 'Ice',
        amount: 11.3
      }
    ]
  },
  '50020': {
    name: 'Dragon Slayer',
    grade: 'Mythic',
    attribute: 'Normal',
    season: 1,
    buffs: [
      {
        type: 'Ranged',
        amount: 7.5
      },
      {
        type: 'All',
        amount: 5.8
      },
      {
        type: 'Boss',
        amount: 9.8
      },
      {
        type: 'Boss',
        amount: 11.3
      }
    ]
  },
  '50022': {
    name: 'Snow Rabbit',
    grade: 'Mythic',
    attribute: 'Normal',
    buffs: [
      {
        type: 'Basic',
        amount: 10
      },
      {
        type: 'Skill',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'All',
        amount: 6
      }
    ]
  },
  '50023': {
    name: 'Halloween Witch',
    grade: 'Mythic',
    attribute: 'Dark',
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Dark',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Dark',
        amount: 9
      }
    ]
  },
  '50024': {
    name: 'Wicked Punkhead',
    grade: 'Mythic',
    attribute: 'Poison',
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Poison',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Poison',
        amount: 9
      }
    ]
  },
  '50025': {
    name: 'Whisper',
    grade: 'Mythic',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Ice',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Ice',
        amount: 9
      }
    ]
  },
  '50026': {
    name: 'Ignis',
    grade: 'Mythic',
    attribute: 'Fire',
    buffs: [
      {
        type: 'Skill',
        amount: 6
      },
      {
        type: 'Fire',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Fire',
        amount: 9
      }
    ]
  },
  '50027': {
    name: 'Shadow Ninja',
    grade: 'Mythic',
    attribute: 'Wind',
    season: 2,
    buffs: [
      {
        type: 'Basic',
        amount: 12.5
      },
      {
        type: 'Wind',
        amount: 8.7
      },
      {
        type: 'Crit D.',
        amount: 9.8
      },
      {
        type: 'Wind',
        amount: 11.3
      }
    ]
  },
  '50028': {
    name: 'Celestial Dragon Argon',
    grade: 'Mythic',
    attribute: 'Electric',
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Electric',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Electric',
        amount: 9
      }
    ]
  },
  '50029': {
    name: 'Silver Heart',
    grade: 'Mythic',
    attribute: 'Wind',
    buffs: [
      {
        type: 'Basic',
        amount: 10
      },
      {
        type: 'Wind',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Wind',
        amount: 9
      }
    ]
  },
  '50030': {
    name: 'Elide',
    grade: 'Mythic',
    attribute: 'Light',
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Light',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Light',
        amount: 9
      }
    ]
  },
  '50031': {
    name: 'Vern',
    grade: 'Mythic',
    attribute: 'Plant',
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Plant',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Plant',
        amount: 9
      }
    ]
  },
  '50032': {
    name: 'Seira',
    grade: 'Mythic',
    attribute: 'Water',
    buffs: [
      {
        type: 'Basic',
        amount: 10
      },
      {
        type: 'Water',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Water',
        amount: 9
      }
    ]
  },
  '50033': {
    name: 'Windia',
    grade: 'Mythic',
    attribute: 'Wind',
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Wind',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Wind',
        amount: 9
      }
    ]
  },
  '50034': {
    name: 'Bellaris',
    grade: 'Mythic',
    attribute: 'Normal',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 10
      },
      {
        type: 'Skill',
        amount: 8.7
      },
      {
        type: 'Crit D.',
        amount: 9.8
      },
      {
        type: 'All',
        amount: 7.5
      }
    ]
  },
  '50035': {
    name: 'Arkelion',
    grade: 'Mythic',
    attribute: 'Ice',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 7.5
      },
      {
        type: 'Ice',
        amount: 8.7
      },
      {
        type: 'Skill',
        amount: 9.8
      },
      {
        type: 'Ice',
        amount: 11.3
      }
    ]
  },
  '50036': {
    name: 'Verdia',
    grade: 'Mythic',
    attribute: 'Plant',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 10
      },
      {
        type: 'Plant',
        amount: 8.7
      },
      {
        type: 'Boss',
        amount: 9.8
      },
      {
        type: 'Plant',
        amount: 11.3
      }
    ]
  },
  '50037': {
    name: 'Morvis',
    grade: 'Mythic',
    attribute: 'Poison',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 7.5
      },
      {
        type: 'Poison',
        amount: 8.7
      },
      {
        type: 'Crit D.',
        amount: 9.8
      },
      {
        type: 'Poison',
        amount: 11.3
      }
    ]
  },
  '50038': {
    name: 'Eris',
    grade: 'Mythic',
    attribute: 'Fire',
    season: 3,
    buffs: [
      {
        type: 'Ranged',
        amount: 7.5
      },
      {
        type: 'Fire',
        amount: 8.7
      },
      {
        type: 'Boss',
        amount: 9.8
      },
      {
        type: 'Fire',
        amount: 11.3
      }
    ]
  },
  '50039': {
    name: 'Aurobos',
    grade: 'Mythic',
    attribute: 'Ground',
    season: 3,
    buffs: [
      {
        type: 'Melee',
        amount: 10
      },
      {
        type: 'Earth',
        amount: 8.7
      },
      {
        type: 'All',
        amount: 6.5
      },
      {
        type: 'Earth',
        amount: 11.3
      }
    ]
  },
  '50040': {
    name: 'Etheria',
    grade: 'Mythic',
    attribute: 'Wind',
    season: 3,
    buffs: [
      {
        type: 'All',
        amount: 5
      },
      {
        type: 'Wind',
        amount: 8.7
      },
      {
        type: 'Crit D.',
        amount: 9.8
      },
      {
        type: 'Wind',
        amount: 11.3
      }
    ]
  },
  '50041': {
    name: 'Koyori',
    grade: 'Mythic',
    attribute: 'Light',
    season: 3,
    buffs: [
      {
        type: 'Skill',
        amount: 7.5
      },
      {
        type: 'Light',
        amount: 8.7
      },
      {
        type: 'Ranged',
        amount: 9.8
      },
      {
        type: 'Light',
        amount: 11.3
      }
    ]
  },
  '50042': {
    name: 'Oniki',
    grade: 'Mythic',
    attribute: 'Wind',
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Wind',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Wind',
        amount: 9
      }
    ]
  },
  '50043': {
    name: 'Borealis',
    grade: 'Mythic',
    attribute: 'Ice',
    buffs: [
      {
        type: 'Skill',
        amount: 6
      },
      {
        type: 'Ice',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Ice',
        amount: 9
      }
    ]
  },
  '50044': {
    name: 'Azure Serpent Dagon',
    grade: 'Mythic',
    attribute: 'Electric',
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Electric',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Electric',
        amount: 9
      }
    ]
  },
  '50045': {
    name: 'Lady Gam of the Mouse Family',
    grade: 'Mythic',
    attribute: 'Ground',
    buffs: [
      {
        type: 'Skill',
        amount: 6
      },
      {
        type: 'Earth',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Earth',
        amount: 9
      }
    ]
  },
  '50046': {
    name: 'Nereia',
    grade: 'Mythic',
    attribute: 'Water',
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Water',
        amount: 6.9
      },
      {
        type: 'Skill',
        amount: 7.8
      },
      {
        type: 'Water',
        amount: 9
      }
    ]
  },
  '50047': {
    name: 'Florian',
    grade: 'Mythic',
    attribute: 'Plant',
    buffs: [
      {
        type: 'Basic',
        amount: 10
      },
      {
        type: 'Plant',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Plant',
        amount: 9
      }
    ]
  },
  '50048': {
    name: 'Ragnos',
    grade: 'Mythic',
    attribute: 'Fire',
    season: 0,
    buffs: [
      {
        type: 'Melee',
        amount: 8
      },
      {
        type: 'Fire',
        amount: 6.9
      },
      {
        type: 'Boss',
        amount: 7.8
      },
      {
        type: 'Fire',
        amount: 9
      }
    ]
  },
  '50049': {
    name: 'Maribelle',
    grade: 'Mythic',
    attribute: 'Water',
    season: 0,
    buffs: [
      {
        type: 'Skill',
        amount: 6
      },
      {
        type: 'Water',
        amount: 6.9
      },
      {
        type: 'All',
        amount: 5.2
      },
      {
        type: 'Water',
        amount: 9
      }
    ]
  },
  '50050': {
    name: 'Belka',
    grade: 'Mythic',
    attribute: 'Poison',
    season: 0,
    buffs: [
      {
        type: 'Basic',
        amount: 10
      },
      {
        type: 'Poison',
        amount: 6.9
      },
      {
        type: 'Crit %',
        amount: 2.6
      },
      {
        type: 'Poison',
        amount: 9
      }
    ]
  },
  '50051': {
    name: 'Mortarex',
    grade: 'Mythic',
    attribute: 'Dark',
    season: 0,
    buffs: [
      {
        type: 'Ranged',
        amount: 6
      },
      {
        type: 'Dark',
        amount: 6.9
      },
      {
        type: 'Crit D.',
        amount: 7.8
      },
      {
        type: 'Dark',
        amount: 9
      }
    ]
  }
} as const;

export { TOYZ };
