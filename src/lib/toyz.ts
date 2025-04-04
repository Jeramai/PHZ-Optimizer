type Attribute =
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
type Grade = 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
export type Buff = 'Atk Spd' | 'Melee' | 'Ranged' | 'Basic' | 'Boss' | 'Skill' | 'All';

export interface ToyZData {
  name: string;
  grade: Grade;
  attribute: Attribute;
  buff: Buff;
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
    buff: 'Atk Spd'
  },
  '10001': {
    name: 'Brown Bear',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '10002': {
    name: 'White Bear',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '10003': {
    name: 'Black Bear',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '10004': {
    name: 'Orange Fox',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '10005': {
    name: 'White Fox',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '10006': {
    name: 'Yellow Fox',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '10007': {
    name: 'Brown Cat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '10008': {
    name: 'White Cat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '10009': {
    name: 'Black Cat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '10010': {
    name: 'Pink Rabbit',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '10011': {
    name: 'White Rabbit',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '10012': {
    name: 'Black Rabbit',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '10013': {
    name: 'Orange Tiger',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '10014': {
    name: 'White Tiger',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '10015': {
    name: 'Black Tiger',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '10016': {
    name: 'Brown Rat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '10017': {
    name: 'White Rat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '10018': {
    name: 'Black Rat',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '10019': {
    name: 'Brown Squirrel',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '10020': {
    name: 'White Squirrel',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '10021': {
    name: 'Hedgehog',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '10022': {
    name: 'Mallard',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '10023': {
    name: 'Yellow Duck',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '10024': {
    name: 'White Duck',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '10025': {
    name: 'Green Crocodile',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '10026': {
    name: 'Orange Crocodile',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '10027': {
    name: 'Turquoise Crocodile',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '10028': {
    name: 'Red Dragon',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '10029': {
    name: 'Orange Dragon',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '10030': {
    name: 'Blue Dragon',
    grade: 'Common',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '20031': {
    name: 'Rice Ball Ddongle',
    grade: 'Rare',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '20032': {
    name: 'Dancing Cat',
    grade: 'Rare',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '20033': {
    name: 'Bug-eaten Apple',
    grade: 'Rare',
    attribute: 'Plant',
    season: 0,
    buff: 'Ranged'
  },
  '20034': {
    name: 'Black Drop Grass',
    grade: 'Rare',
    attribute: 'Dark',
    season: 0,
    buff: 'Basic'
  },
  '20035': {
    name: 'Tangle Pudding',
    grade: 'Rare',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '20036': {
    name: 'Half-cooked Soldier',
    grade: 'Rare',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '20040': {
    name: 'Melted Cone',
    grade: 'Rare',
    attribute: 'Ice',
    season: 0,
    buff: 'Basic'
  },
  '20041': {
    name: 'Little Spark',
    grade: 'Rare',
    attribute: 'Electric',
    season: 0,
    buff: 'Melee'
  },
  '20045': {
    name: 'Spicy Octopus',
    grade: 'Rare',
    attribute: 'Fire',
    season: 0,
    buff: 'Ranged'
  },
  '20049': {
    name: 'Star Cheerleader',
    grade: 'Rare',
    attribute: 'Light',
    season: 0,
    buff: 'Basic'
  },
  '20052': {
    name: 'Swamp Witch',
    grade: 'Rare',
    attribute: 'Poison',
    season: 0,
    buff: 'Melee'
  },
  '20055': {
    name: 'Zombie Clerk',
    grade: 'Rare',
    attribute: 'Poison',
    season: 0,
    buff: 'Ranged'
  },
  '20056': {
    name: 'Hot Choco Mug',
    grade: 'Rare',
    attribute: 'Fire',
    season: 0,
    buff: 'Basic'
  },
  '20057': {
    name: 'Two-faced Black Sheep',
    grade: 'Rare',
    attribute: 'Dark',
    season: 0,
    buff: 'Melee'
  },
  '20060': {
    name: 'Lion Flower',
    grade: 'Rare',
    attribute: 'Plant',
    season: 0,
    buff: 'Ranged'
  },
  '20063': {
    name: 'Mohican Bull',
    grade: 'Rare',
    attribute: 'Ground',
    season: 0,
    buff: 'Basic'
  },
  '20064': {
    name: 'Moss Golem',
    grade: 'Rare',
    attribute: 'Ground',
    season: 0,
    buff: 'Melee'
  },
  '20065': {
    name: 'Slum Porgo',
    grade: 'Rare',
    attribute: 'Poison',
    season: 0,
    buff: 'Ranged'
  },
  '20068': {
    name: 'Frozen Mohican',
    grade: 'Rare',
    attribute: 'Ice',
    season: 0,
    buff: 'Basic'
  },
  '20073': {
    name: 'Rice Cake Princess',
    grade: 'Rare',
    attribute: 'Normal',
    buff: 'Basic'
  },
  '20074': {
    name: 'Gentleman Crocodile',
    grade: 'Rare',
    attribute: 'Normal',
    buff: 'Melee'
  },
  '20075': {
    name: 'Mira Fran',
    grade: 'Rare',
    attribute: 'Normal',
    buff: 'Ranged'
  },
  '20076': {
    name: 'Vampire Wizard',
    grade: 'Rare',
    attribute: 'Normal',
    buff: 'Basic'
  },
  '20077': {
    name: 'Cute Cake',
    grade: 'Rare',
    attribute: 'Ice',
    buff: 'Melee'
  },
  '20078': {
    name: 'Bouncing Snowball',
    grade: 'Rare',
    attribute: 'Ice',
    buff: 'Ranged'
  },
  '20079': {
    name: 'Tinker Bomb',
    grade: 'Rare',
    attribute: 'Plant',
    buff: 'Basic'
  },
  '20080': {
    name: 'Venom Cloud Argus',
    grade: 'Rare',
    attribute: 'Poison',
    buff: 'Melee'
  },
  '20081': {
    name: 'Glacial Guard',
    grade: 'Rare',
    attribute: 'Ice',
    buff: 'Ranged'
  },
  '20082': {
    name: 'Zephyr Guard',
    grade: 'Rare',
    attribute: 'Wind',
    buff: 'Basic'
  },
  '20083': {
    name: 'Charlie',
    grade: 'Rare',
    attribute: 'Normal',
    buff: 'Melee'
  },
  '20084': {
    name: 'Rosaline',
    grade: 'Rare',
    attribute: 'Ground',
    buff: 'Ranged'
  },
  '20085': {
    name: 'Foshimi',
    grade: 'Rare',
    attribute: 'Water',
    buff: 'Melee'
  },
  '20086': {
    name: 'Katoro',
    grade: 'Rare',
    attribute: 'Ground',
    buff: 'Ranged'
  },
  '20087': {
    name: 'Tobi',
    grade: 'Rare',
    attribute: 'Poison',
    buff: 'Ranged'
  },
  '20088': {
    name: 'Nureongi',
    grade: 'Rare',
    attribute: 'Light',
    buff: 'Melee'
  },
  '20089': {
    name: 'Torong',
    grade: 'Rare',
    attribute: 'Fire',
    buff: 'Ranged'
  },
  '20090': {
    name: 'Lavio',
    grade: 'Rare',
    attribute: 'Electric',
    buff: 'Melee'
  },
  '30021': {
    name: 'Anubis',
    grade: 'Epic',
    attribute: 'Ground',
    season: 1,
    buff: 'Melee'
  },
  '30022': {
    name: 'Insensitive Frang',
    grade: 'Epic',
    attribute: 'Poison',
    season: 1,
    buff: 'Ranged'
  },
  '30023': {
    name: 'Furious Berserker',
    grade: 'Epic',
    attribute: 'Normal',
    season: 2,
    buff: 'Basic'
  },
  '30024': {
    name: 'Tenacious Demolitionist',
    grade: 'Epic',
    attribute: 'Fire',
    season: 2,
    buff: 'Melee'
  },
  '30025': {
    name: 'Sleepy Tear Fairy',
    grade: 'Epic',
    attribute: 'Water',
    season: 2,
    buff: 'Ranged'
  },
  '30026': {
    name: 'Crow Priest',
    grade: 'Epic',
    attribute: 'Dark',
    season: 0,
    buff: 'Melee'
  },
  '30027': {
    name: 'Clumsy Apprentice Ninja',
    grade: 'Epic',
    attribute: 'Wind',
    season: 0,
    buff: 'Ranged'
  },
  '30028': {
    name: 'Dark Mage Violet',
    grade: 'Epic',
    attribute: 'Dark',
    season: 0,
    buff: 'Melee'
  },
  '30029': {
    name: 'Positive Pumpkin Soldier',
    grade: 'Epic',
    attribute: 'Plant',
    season: 2,
    buff: 'Ranged'
  },
  '30030': {
    name: 'Diver Duck',
    grade: 'Epic',
    attribute: 'Water',
    season: 2,
    buff: 'Melee'
  },
  '30031': {
    name: 'Ice Prince',
    grade: 'Epic',
    attribute: 'Ice',
    season: 2,
    buff: 'Ranged'
  },
  '30032': {
    name: 'Prototype - Alpha',
    grade: 'Epic',
    attribute: 'Electric',
    season: 2,
    buff: 'Melee'
  },
  '30033': {
    name: 'Gentle Chairman',
    grade: 'Epic',
    attribute: 'Normal',
    season: 2,
    buff: 'Basic'
  },
  '30034': {
    name: 'Viking Intern',
    grade: 'Epic',
    attribute: 'Electric',
    season: 2,
    buff: 'Ranged'
  },
  '30035': {
    name: 'Grumpy Teres',
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '30036': {
    name: 'Hacker Cat',
    grade: 'Epic',
    attribute: 'Electric',
    season: 2,
    buff: 'Melee'
  },
  '30037': {
    name: 'Wandering Painter',
    grade: 'Epic',
    attribute: 'Water',
    season: 1,
    buff: 'Ranged'
  },
  '30038': {
    name: 'Dizzying Medusa',
    grade: 'Epic',
    attribute: 'Ground',
    season: 1,
    buff: 'Melee'
  },
  '30039': {
    name: 'Chilly Snowman',
    grade: 'Epic',
    attribute: 'Ice',
    season: 2,
    buff: 'Ranged'
  },
  '30040': {
    name: 'Carrot Rider',
    grade: 'Epic',
    attribute: 'Plant',
    season: 2,
    buff: 'Melee'
  },
  '30041': {
    name: 'Gentle Breeze Cat',
    grade: 'Epic',
    attribute: 'Wind',
    season: 2,
    buff: 'Ranged'
  },
  '30042': {
    name: 'Angel Muscle',
    grade: 'Epic',
    attribute: 'Light',
    season: 2,
    buff: 'Melee'
  },
  '30043': {
    name: 'Avian Warrior',
    grade: 'Epic',
    attribute: 'Wind',
    season: 1,
    buff: 'Ranged'
  },
  '30044': {
    name: 'Venomous Chubby',
    grade: 'Epic',
    attribute: 'Poison',
    season: 2,
    buff: 'Melee'
  },
  '30045': {
    name: 'Mohican Bulldog',
    grade: 'Epic',
    attribute: 'Fire',
    season: 1,
    buff: 'Ranged'
  },
  '30046': {
    name: 'Timid Ghost',
    grade: 'Epic',
    attribute: 'Light',
    season: 2,
    buff: 'Melee'
  },
  '30047': {
    name: 'Suspicious Blacksmith',
    grade: 'Epic',
    attribute: 'Fire',
    season: 0,
    buff: 'Ranged'
  },
  '30048': {
    name: 'Winter Witch',
    grade: 'Epic',
    attribute: 'Ice',
    season: 0,
    buff: 'Melee'
  },
  '30049': {
    name: 'Poisonous Moth',
    grade: 'Epic',
    attribute: 'Poison',
    season: 0,
    buff: 'Ranged'
  },
  '30050': {
    name: 'Bizarre Shaman',
    grade: 'Epic',
    attribute: 'Plant',
    season: 1,
    buff: 'Melee'
  },
  '30051': {
    name: 'Child Water Thief',
    grade: 'Epic',
    attribute: 'Water',
    season: 2,
    buff: 'Ranged'
  },
  '30052': {
    name: 'Cowardly Snake',
    grade: 'Epic',
    attribute: 'Poison',
    season: 1,
    buff: 'Melee'
  },
  '30053': {
    name: 'Cuckoo',
    grade: 'Epic',
    attribute: 'Light',
    season: 2,
    buff: 'Ranged'
  },
  '30054': {
    name: 'Gloomy Cloud',
    grade: 'Epic',
    attribute: 'Dark',
    season: 0,
    buff: 'Melee'
  },
  '30055': {
    name: 'DJ. Duck',
    grade: 'Epic',
    attribute: 'Wind',
    season: 1,
    buff: 'Ranged'
  },
  '30056': {
    name: 'Stubborn Moai',
    grade: 'Epic',
    attribute: 'Ground',
    season: 1,
    buff: 'Melee'
  },
  '30057': {
    name: 'Devil Cat',
    grade: 'Epic',
    attribute: 'Dark',
    season: 1,
    buff: 'Ranged'
  },
  '30058': {
    name: 'Shining Star',
    grade: 'Epic',
    attribute: 'Light',
    season: 2,
    buff: 'Melee'
  },
  '30059': {
    name: "Glacier's Messenger",
    grade: 'Epic',
    attribute: 'Ice',
    season: 1,
    buff: 'Ranged'
  },
  '30060': {
    name: 'Fire Ant',
    grade: 'Epic',
    attribute: 'Fire',
    season: 2,
    buff: 'Melee'
  },
  '30061': {
    name: 'Zombie Miner',
    grade: 'Epic',
    attribute: 'Ground',
    season: 0,
    buff: 'Ranged'
  },
  '30062': {
    name: 'Pouch Goblin',
    grade: 'Epic',
    attribute: 'Normal',
    buff: 'Basic'
  },
  '30063': {
    name: 'Festival Mask',
    grade: 'Epic',
    attribute: 'Normal',
    buff: 'Melee'
  },
  '30064': {
    name: 'Pale Ghost',
    grade: 'Epic',
    attribute: 'Normal',
    buff: 'Ranged'
  },
  '30065': {
    name: 'Scientist Victor',
    grade: 'Epic',
    attribute: 'Normal',
    buff: 'Basic'
  },
  '30066': {
    name: 'Mini Blumens',
    grade: 'Epic',
    attribute: 'Water',
    season: 0,
    buff: 'Basic'
  },
  '30067': {
    name: 'Mini Betalanse',
    grade: 'Epic',
    attribute: 'Plant',
    season: 0,
    buff: 'Melee'
  },
  '30068': {
    name: 'Mini Cryo',
    grade: 'Epic',
    attribute: 'Ice',
    season: 0,
    buff: 'Ranged'
  },
  '30069': {
    name: 'Mini Sporelex',
    grade: 'Epic',
    attribute: 'Plant',
    season: 0,
    buff: 'Basic'
  },
  '30070': {
    name: 'Mini Toxspore',
    grade: 'Epic',
    attribute: 'Poison',
    season: 0,
    buff: 'Melee'
  },
  '30071': {
    name: 'Mini Bristol',
    grade: 'Epic',
    attribute: 'Ground',
    season: 0,
    buff: 'Ranged'
  },
  '30072': {
    name: 'Mini Pierrot',
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buff: 'Boss'
  },
  '30073': {
    name: 'Polybear',
    grade: 'Epic',
    attribute: 'Ice',
    buff: 'Melee'
  },
  '30074': {
    name: 'Kwonter',
    grade: 'Epic',
    attribute: 'Ice',
    buff: 'Ranged'
  },
  '30075': {
    name: 'Mini Veilian',
    grade: 'Epic',
    attribute: 'Dark',
    season: 0,
    buff: 'Basic'
  },
  '30076': {
    name: 'Mini Arque',
    grade: 'Epic',
    attribute: 'Electric',
    season: 0,
    buff: 'Melee'
  },
  '30077': {
    name: 'Mini Rootrus',
    grade: 'Epic',
    attribute: 'Fire',
    season: 0,
    buff: 'Ranged'
  },
  '30078': {
    name: 'Blue Carbuncle',
    grade: 'Epic',
    attribute: 'Ice',
    buff: 'Basic'
  },
  '30079': {
    name: 'Quiet Gray',
    grade: 'Epic',
    attribute: 'Dark',
    buff: 'Melee'
  },
  '30080': {
    name: 'Monkey Guard',
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '30081': {
    name: 'Wanderer Artist',
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buff: 'Melee'
  },
  '30082': {
    name: "Lo'oong Cat",
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buff: 'Ranged'
  },
  '30083': {
    name: 'Beat Peng',
    grade: 'Epic',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '30084': {
    name: 'Cogni',
    grade: 'Epic',
    attribute: 'Normal',
    buff: 'Ranged'
  },
  '30085': {
    name: 'Carrotin Rampager',
    grade: 'Epic',
    attribute: 'Plant',
    buff: 'Basic'
  },
  '30086': {
    name: 'Warrior Redrick',
    grade: 'Epic',
    attribute: 'Fire',
    season: 0,
    buff: 'Melee'
  },
  '30087': {
    name: 'Piranha',
    grade: 'Epic',
    attribute: 'Water',
    season: 0,
    buff: 'Ranged'
  },
  '30088': {
    name: 'Bomb Bird',
    grade: 'Epic',
    attribute: 'Fire',
    season: 0,
    buff: 'Basic'
  },
  '30089': {
    name: 'Observer Gearbit',
    grade: 'Epic',
    attribute: 'Electric',
    season: 0,
    buff: 'Melee'
  },
  '30090': {
    name: 'Mini Sapphire blade',
    grade: 'Epic',
    attribute: 'Light',
    season: 0,
    buff: 'Ranged'
  },
  '30091': {
    name: 'Mini Coralisk',
    grade: 'Epic',
    attribute: 'Water',
    season: 0,
    buff: 'Basic'
  },
  '30092': {
    name: 'Mini Breeze',
    grade: 'Epic',
    attribute: 'Wind',
    season: 0,
    buff: 'Melee'
  },
  '30093': {
    name: 'Ellie',
    grade: 'Epic',
    attribute: 'Water',
    buff: 'Basic'
  },
  '30094': {
    name: 'Uni',
    grade: 'Epic',
    attribute: 'Light',
    buff: 'Melee'
  },
  '30095': {
    name: 'Vincenzo',
    grade: 'Epic',
    attribute: 'Plant',
    buff: 'Ranged'
  },
  '30096': {
    name: 'PopCoco',
    grade: 'Epic',
    attribute: 'Normal',
    season: 3,
    buff: 'Basic'
  },
  '30097': {
    name: 'Everlyn',
    grade: 'Epic',
    attribute: 'Plant',
    season: 3,
    buff: 'Melee'
  },
  '30098': {
    name: 'Clockwork Robot',
    grade: 'Epic',
    attribute: 'Normal',
    season: 3,
    buff: 'Ranged'
  },
  '30099': {
    name: 'Stitch Bunny',
    grade: 'Epic',
    attribute: 'Dark',
    season: 3,
    buff: 'Basic'
  },
  '30100': {
    name: 'SanDiego',
    grade: 'Epic',
    attribute: 'Ground',
    season: 3,
    buff: 'Melee'
  },
  '30101': {
    name: 'Watermelon Trio',
    grade: 'Epic',
    attribute: 'Plant',
    season: 3,
    buff: 'Ranged'
  },
  '30102': {
    name: 'Detonix',
    grade: 'Epic',
    attribute: 'Fire',
    season: 3,
    buff: 'Basic'
  },
  '30103': {
    name: 'Stratus',
    grade: 'Epic',
    attribute: 'Wind',
    season: 3,
    buff: 'Melee'
  },
  '30104': {
    name: 'Candellus',
    grade: 'Epic',
    attribute: 'Dark',
    season: 3,
    buff: 'Ranged'
  },
  '30105': {
    name: 'Bolteos',
    grade: 'Epic',
    attribute: 'Electric',
    season: 3,
    buff: 'Basic'
  },
  '30106': {
    name: 'Pico the Chicken',
    grade: 'Epic',
    attribute: 'Fire',
    season: 3,
    buff: 'Melee'
  },
  '30107': {
    name: 'Winter Specter',
    grade: 'Epic',
    attribute: 'Ice',
    season: 3,
    buff: 'Ranged'
  },
  '30108': {
    name: 'Belmot',
    grade: 'Epic',
    attribute: 'Dark',
    season: 3,
    buff: 'Basic'
  },
  '30109': {
    name: 'Ringo',
    grade: 'Epic',
    attribute: 'Ground',
    season: 3,
    buff: 'Melee'
  },
  '30110': {
    name: 'Hydrix',
    grade: 'Epic',
    attribute: 'Water',
    season: 3,
    buff: 'Ranged'
  },
  '30111': {
    name: 'Gastron',
    grade: 'Epic',
    attribute: 'Wind',
    season: 3,
    buff: 'Basic'
  },
  '30112': {
    name: 'Resonix',
    grade: 'Epic',
    attribute: 'Electric',
    season: 3,
    buff: 'Melee'
  },
  '30113': {
    name: 'Freezton',
    grade: 'Epic',
    attribute: 'Ice',
    season: 3,
    buff: 'Ranged'
  },
  '30114': {
    name: 'Sludgic',
    grade: 'Epic',
    attribute: 'Poison',
    season: 3,
    buff: 'Basic'
  },
  '30115': {
    name: 'Bazrad',
    grade: 'Epic',
    attribute: 'Poison',
    season: 3,
    buff: 'Melee'
  },
  '30116': {
    name: 'Cosmorin',
    grade: 'Epic',
    attribute: 'Light',
    season: 3,
    buff: 'Ranged'
  },
  '30117': {
    name: 'Kaki',
    grade: 'Epic',
    attribute: 'Plant',
    buff: 'Basic'
  },
  '30118': {
    name: 'Ogama',
    grade: 'Epic',
    attribute: 'Poison',
    buff: 'Ranged'
  },
  '30119': {
    name: 'Jeoseungdori',
    grade: 'Epic',
    attribute: 'Dark',
    buff: 'Ranged'
  },
  '30120': {
    name: 'Kkami',
    grade: 'Epic',
    attribute: 'Water',
    buff: 'Melee'
  },
  '30121': {
    name: 'Delvo',
    grade: 'Epic',
    attribute: 'Ground',
    buff: 'Melee'
  },
  '30122': {
    name: 'Optigon',
    grade: 'Epic',
    attribute: 'Electric',
    buff: 'Ranged'
  },
  '40013': {
    name: 'Timid Gluttony',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 1,
    buff: 'Skill'
  },
  '40014': {
    name: 'Elegant Lucy',
    grade: 'Legendary',
    attribute: 'Light',
    season: 1,
    buff: 'Melee'
  },
  '40015': {
    name: 'Otakun',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 1,
    buff: 'Basic'
  },
  '40016': {
    name: 'Victorious Blackcat',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 2,
    buff: 'Basic'
  },
  '40017': {
    name: 'Pirate Octa',
    grade: 'Legendary',
    attribute: 'Water',
    season: 2,
    buff: 'Ranged'
  },
  '40018': {
    name: 'Mad Alchemist',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 2,
    buff: 'Ranged'
  },
  '40019': {
    name: 'Racer Chili',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 2,
    buff: 'Melee'
  },
  '40020': {
    name: 'Golden Gobking',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 1,
    buff: 'Ranged'
  },
  '40021': {
    name: 'Lightning-struck Gobking',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 2,
    buff: 'Skill'
  },
  '40022': {
    name: 'Snooty Camilla',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 2,
    buff: 'Melee'
  },
  '40023': {
    name: 'Relaxed Senior Ninja',
    grade: 'Legendary',
    attribute: 'Wind',
    season: 1,
    buff: 'Ranged'
  },
  '40024': {
    name: 'Ferocious Ice Queen',
    grade: 'Legendary',
    attribute: 'Ice',
    season: 1,
    buff: 'Ranged'
  },
  '40025': {
    name: 'Lava Turtle',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 2,
    buff: 'Skill'
  },
  '40026': {
    name: 'Gaming Cat',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 2,
    buff: 'Ranged'
  },
  '40027': {
    name: 'Military Band Teres',
    grade: 'Legendary',
    attribute: 'Wind',
    season: 1,
    buff: 'Melee'
  },
  '40028': {
    name: 'General Drago',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 2,
    buff: 'Melee'
  },
  '40029': {
    name: 'Contemplative Statue',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 2,
    buff: 'Melee'
  },
  '40030': {
    name: 'Witch of Selfie',
    grade: 'Legendary',
    attribute: 'Light',
    season: 1,
    buff: 'Ranged'
  },
  '40031': {
    name: 'Wave Riding Surfer',
    grade: 'Legendary',
    attribute: 'Water',
    season: 2,
    buff: 'Ranged'
  },
  '40032': {
    name: 'Merciless Balrog',
    grade: 'Legendary',
    attribute: 'Ice',
    season: 1,
    buff: 'Skill'
  },
  '40033': {
    name: 'Chimera Doctor',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 1,
    buff: 'Melee'
  },
  '40034': {
    name: 'Masked Rabbit Ghost',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 1,
    buff: 'Melee'
  },
  '40035': {
    name: 'Delicate Lotus Fairy',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 2,
    buff: 'Ranged'
  },
  '40036': {
    name: 'Dollmaker Mari',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 1,
    buff: 'Basic'
  },
  '40037': {
    name: 'Lonely Hero',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 2,
    buff: 'Ranged'
  },
  '40038': {
    name: 'Moon Rabbit',
    grade: 'Legendary',
    attribute: 'Normal',
    buff: 'Basic'
  },
  '40039': {
    name: 'Rice Cake Tiger',
    grade: 'Legendary',
    attribute: 'Normal',
    buff: 'Melee'
  },
  '40040': {
    name: 'Cursed Durant',
    grade: 'Legendary',
    attribute: 'Normal',
    buff: 'Ranged'
  },
  '40041': {
    name: 'Pumpkin Jack',
    grade: 'Legendary',
    attribute: 'Normal',
    buff: 'Basic'
  },
  '40042': {
    name: 'Petite Blumens',
    grade: 'Legendary',
    attribute: 'Water',
    season: 0,
    buff: 'Basic'
  },
  '40043': {
    name: 'Petite Betalanse',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 0,
    buff: 'Melee'
  },
  '40044': {
    name: 'Petite Cryo',
    grade: 'Legendary',
    attribute: 'Ice',
    season: 0,
    buff: 'Ranged'
  },
  '40045': {
    name: 'Petite Sporelex',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 0,
    buff: 'Basic'
  },
  '40046': {
    name: 'Petite Toxspore',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 0,
    buff: 'Melee'
  },
  '40047': {
    name: 'Petite Bristol',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 0,
    buff: 'Ranged'
  },
  '40048': {
    name: 'Petite Pierrot',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 0,
    buff: 'Boss'
  },
  '40049': {
    name: 'Wolfgang Crusher',
    grade: 'Legendary',
    attribute: 'Ice',
    buff: 'Melee'
  },
  '40050': {
    name: 'Matchstick Wolf',
    grade: 'Legendary',
    attribute: 'Ice',
    buff: 'Ranged'
  },
  '40051': {
    name: 'Petite Veilian',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 0,
    buff: 'Basic'
  },
  '40052': {
    name: 'Petite Arque',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 0,
    buff: 'Melee'
  },
  '40053': {
    name: 'Petite Rootrus',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 0,
    buff: 'Ranged'
  },
  '40054': {
    name: 'Enyx',
    grade: 'Legendary',
    attribute: 'Fire',
    buff: 'Melee'
  },
  '40055': {
    name: 'Magros',
    grade: 'Legendary',
    attribute: 'Ground',
    buff: 'Ranged'
  },
  '40056': {
    name: 'Despier',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 0,
    buff: 'Basic'
  },
  '40057': {
    name: 'Lillian White',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 0,
    buff: 'Melee'
  },
  '40058': {
    name: 'Chick Admiral',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 0,
    buff: 'Atk Spd'
  },
  '40059': {
    name: 'Vannes',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 0,
    buff: 'Melee'
  },
  '40060': {
    name: 'Cobit',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 0,
    buff: 'Ranged'
  },
  '40061': {
    name: 'Shroud',
    grade: 'Legendary',
    attribute: 'Wind',
    buff: 'Basic'
  },
  '40062': {
    name: 'Vulcan',
    grade: 'Legendary',
    attribute: 'Fire',
    buff: 'Melee'
  },
  '40063': {
    name: 'Golly',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 0,
    buff: 'Ranged'
  },
  '40064': {
    name: 'Manok',
    grade: 'Legendary',
    attribute: 'Normal',
    season: 0,
    buff: 'Basic'
  },
  '40065': {
    name: 'Petite Sapphire blade',
    grade: 'Legendary',
    attribute: 'Light',
    season: 0,
    buff: 'Basic'
  },
  '40066': {
    name: 'Petite Coralisk',
    grade: 'Legendary',
    attribute: 'Water',
    season: 0,
    buff: 'Melee'
  },
  '40067': {
    name: 'Petite Breeze',
    grade: 'Legendary',
    attribute: 'Wind',
    season: 0,
    buff: 'Ranged'
  },
  '40068': {
    name: 'Hawkie',
    grade: 'Legendary',
    attribute: 'Wind',
    buff: 'Basic'
  },
  '40069': {
    name: 'Crepe Cat',
    grade: 'Legendary',
    attribute: 'Normal',
    buff: 'Ranged'
  },
  '40070': {
    name: 'Deeric',
    grade: 'Legendary',
    attribute: 'Ice',
    buff: 'Melee'
  },
  '40071': {
    name: 'Volcardon',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 3,
    buff: 'Melee'
  },
  '40072': {
    name: 'Tidehorn',
    grade: 'Legendary',
    attribute: 'Water',
    season: 3,
    buff: 'Melee'
  },
  '40073': {
    name: 'Iron Hound',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 3,
    buff: 'Ranged'
  },
  '40074': {
    name: 'Rylie',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 3,
    buff: 'Skill'
  },
  '40075': {
    name: 'Dazmir',
    grade: 'Legendary',
    attribute: 'Light',
    season: 3,
    buff: 'Melee'
  },
  '40076': {
    name: 'Belmordic',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 3,
    buff: 'Ranged'
  },
  '40077': {
    name: 'Arrose',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 3,
    buff: 'Basic'
  },
  '40078': {
    name: 'Eryndra',
    grade: 'Legendary',
    attribute: 'Water',
    season: 3,
    buff: 'Ranged'
  },
  '40079': {
    name: 'Corvalis',
    grade: 'Legendary',
    attribute: 'Poison',
    season: 3,
    buff: 'Melee'
  },
  '40080': {
    name: 'Galeon',
    grade: 'Legendary',
    attribute: 'Wind',
    season: 3,
    buff: 'Basic'
  },
  '40081': {
    name: 'Avenhart',
    grade: 'Legendary',
    attribute: 'Ice',
    season: 3,
    buff: 'Melee'
  },
  '40082': {
    name: 'Furyhog',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 3,
    buff: 'Skill'
  },
  '40083': {
    name: 'Spirit Moki',
    grade: 'Legendary',
    attribute: 'Light',
    buff: 'Ranged'
  },
  '40084': {
    name: 'Shadow Moki',
    grade: 'Legendary',
    attribute: 'Dark',
    buff: 'Basic'
  },
  '40085': {
    name: 'Nyx',
    grade: 'Legendary',
    attribute: 'Dark',
    season: 0,
    buff: 'Basic'
  },
  '40086': {
    name: 'Gentleman An',
    grade: 'Legendary',
    attribute: 'Electric',
    buff: 'Ranged'
  },
  '40087': {
    name: 'Lady Yeo',
    grade: 'Legendary',
    attribute: 'Fire',
    buff: 'Basic'
  },
  '40088': {
    name: 'Radiant Bunny',
    grade: 'Legendary',
    attribute: 'Light',
    buff: 'Melee'
  },
  '40089': {
    name: 'Centigor',
    grade: 'Legendary',
    attribute: 'Poison',
    buff: 'Skill'
  },
  '40090': {
    name: 'Reno',
    grade: 'Legendary',
    attribute: 'Electric',
    season: 0,
    buff: 'Skill'
  },
  '40091': {
    name: 'Maron',
    grade: 'Legendary',
    attribute: 'Wind',
    season: 0,
    buff: 'Ranged'
  },
  '40092': {
    name: 'Lurumi',
    grade: 'Legendary',
    attribute: 'Light',
    season: 0,
    buff: 'Skill'
  },
  '40093': {
    name: 'Glakion',
    grade: 'Legendary',
    attribute: 'Ice',
    season: 0,
    buff: 'Melee'
  },
  '40094': {
    name: 'Ifreon',
    grade: 'Legendary',
    attribute: 'Fire',
    season: 0,
    buff: 'Melee'
  },
  '40095': {
    name: 'Bloomnia',
    grade: 'Legendary',
    attribute: 'Plant',
    season: 0,
    buff: 'Ranged'
  },
  '40096': {
    name: 'Petra',
    grade: 'Legendary',
    attribute: 'Ground',
    season: 0,
    buff: 'Basic'
  },
  '40097': {
    name: 'Radion',
    grade: 'Legendary',
    attribute: 'Light',
    season: 0,
    buff: 'Basic'
  },
  '50011': {
    name: 'Protocol - Mechaville',
    grade: 'Mythic',
    attribute: 'Electric',
    season: 1,
    buff: 'Melee'
  },
  '50012': {
    name: 'Sentinel Leon',
    grade: 'Mythic',
    attribute: 'Fire',
    season: 2,
    buff: 'Melee'
  },
  '50013': {
    name: 'Necromancer',
    grade: 'Mythic',
    attribute: 'Ground',
    season: 2,
    buff: 'Ranged'
  },
  '50014': {
    name: 'Master of the Abyss',
    grade: 'Mythic',
    attribute: 'Dark',
    season: 1,
    buff: 'Skill'
  },
  '50015': {
    name: 'Angel King',
    grade: 'Mythic',
    attribute: 'Light',
    season: 2,
    buff: 'Ranged'
  },
  '50016': {
    name: 'Tyrant Sharksa',
    grade: 'Mythic',
    attribute: 'Water',
    season: 1,
    buff: 'Ranged'
  },
  '50017': {
    name: 'Flora Fairy',
    grade: 'Mythic',
    attribute: 'Plant',
    season: 2,
    buff: 'Skill'
  },
  '50018': {
    name: 'Rebel King Glaesia',
    grade: 'Mythic',
    attribute: 'Ice',
    season: 2,
    buff: 'Melee'
  },
  '50020': {
    name: 'Dragon Slayer',
    grade: 'Mythic',
    attribute: 'Normal',
    season: 1,
    buff: 'Ranged'
  },
  '50022': {
    name: 'Snow Rabbit',
    grade: 'Mythic',
    attribute: 'Normal',
    buff: 'Basic'
  },
  '50023': {
    name: 'Halloween Witch',
    grade: 'Mythic',
    attribute: 'Dark',
    buff: 'Ranged'
  },
  '50024': {
    name: 'Wicked Punkhead',
    grade: 'Mythic',
    attribute: 'Poison',
    buff: 'Ranged'
  },
  '50025': {
    name: 'Whisper',
    grade: 'Mythic',
    attribute: 'Ice',
    buff: 'Melee'
  },
  '50026': {
    name: 'Ignis',
    grade: 'Mythic',
    attribute: 'Fire',
    buff: 'Skill'
  },
  '50027': {
    name: 'Shadow Ninja',
    grade: 'Mythic',
    attribute: 'Wind',
    season: 2,
    buff: 'Basic'
  },
  '50028': {
    name: 'Celestial Dragon Argon',
    grade: 'Mythic',
    attribute: 'Electric',
    buff: 'Ranged'
  },
  '50029': {
    name: 'Silver Heart',
    grade: 'Mythic',
    attribute: 'Wind',
    buff: 'Basic'
  },
  '50030': {
    name: 'Elide',
    grade: 'Mythic',
    attribute: 'Light',
    buff: 'Ranged'
  },
  '50031': {
    name: 'Vern',
    grade: 'Mythic',
    attribute: 'Plant',
    buff: 'Melee'
  },
  '50032': {
    name: 'Seira',
    grade: 'Mythic',
    attribute: 'Water',
    buff: 'Basic'
  },
  '50033': {
    name: 'Windia',
    grade: 'Mythic',
    attribute: 'Wind',
    buff: 'Melee'
  },
  '50034': {
    name: 'Bellaris',
    grade: 'Mythic',
    attribute: 'Normal',
    season: 3,
    buff: 'Melee'
  },
  '50035': {
    name: 'Arkelion',
    grade: 'Mythic',
    attribute: 'Ice',
    season: 3,
    buff: 'Ranged'
  },
  '50036': {
    name: 'Verdia',
    grade: 'Mythic',
    attribute: 'Plant',
    season: 3,
    buff: 'Melee'
  },
  '50037': {
    name: 'Morvis',
    grade: 'Mythic',
    attribute: 'Poison',
    season: 3,
    buff: 'Ranged'
  },
  '50038': {
    name: 'Eris',
    grade: 'Mythic',
    attribute: 'Fire',
    season: 3,
    buff: 'Ranged'
  },
  '50039': {
    name: 'Aurobos',
    grade: 'Mythic',
    attribute: 'Ground',
    season: 3,
    buff: 'Melee'
  },
  '50040': {
    name: 'Etheria',
    grade: 'Mythic',
    attribute: 'Wind',
    season: 3,
    buff: 'All'
  },
  '50041': {
    name: 'Koyori',
    grade: 'Mythic',
    attribute: 'Light',
    season: 3,
    buff: 'Skill'
  },
  '50042': {
    name: 'Oniki',
    grade: 'Mythic',
    attribute: 'Wind',
    buff: 'Ranged'
  },
  '50043': {
    name: 'Borealis',
    grade: 'Mythic',
    attribute: 'Ice',
    buff: 'Skill'
  },
  '50044': {
    name: 'Azure Serpent Dagon',
    grade: 'Mythic',
    attribute: 'Electric',
    buff: 'Ranged'
  },
  '50045': {
    name: 'Lady Gam of the Mouse Family',
    grade: 'Mythic',
    attribute: 'Ground',
    buff: 'Skill'
  },
  '50046': {
    name: 'Nereia',
    grade: 'Mythic',
    attribute: 'Water',
    buff: 'Melee'
  },
  '50047': {
    name: 'Florian',
    grade: 'Mythic',
    attribute: 'Plant',
    buff: 'Basic'
  },
  '50048': {
    name: 'Ragnos',
    grade: 'Mythic',
    attribute: 'Fire',
    season: 0,
    buff: 'Melee'
  },
  '50049': {
    name: 'Maribelle',
    grade: 'Mythic',
    attribute: 'Water',
    season: 0,
    buff: 'Skill'
  },
  '50050': {
    name: 'Belka',
    grade: 'Mythic',
    attribute: 'Poison',
    season: 0,
    buff: 'Basic'
  },
  '50051': {
    name: 'Mortarex',
    grade: 'Mythic',
    attribute: 'Dark',
    season: 0,
    buff: 'Ranged'
  }
} as const;

export { TOYZ };
