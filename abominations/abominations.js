
const Goblin = {
    id: 1,
    name: 'Goblin',
    description: 'Short and gangly, a green tinted creature looks up at you through filmy, yellow eyes. It smells worse than it looks and is looking ready to pounce on you with a crude dagger!',
    atk: 6,
    ac: 5,
    gold: 2,
    image: 'goblin.png',
};

const Wolf = {
    id: 2,
    name: 'Savage Wolf',
    description: 'A dire wolf native to the Barheim region. It seems to be driven to a frenzy by some strange magics!',
    atk: 7,
    ac: 10,
    gold: 5,
    image: 'wolf.jpg',
};

const DarkWizard = {
    id: 3,
    name: 'Karl the Unpleasant',
    description: 'A Wizard! But not the good kind. I mean come on, look at that fake png. He says he has been working for some powerful creature in the woods!',
    atk: 20,
    ac: 7,
    gold: 25, 
    image: 'darkwizard.png',
};

const ButtSpider = {
    id: 4,
    name: 'Tookus, Munger™ of Butts',
    description: 'A gluteus arachnisgiganticus; aka the Giant Buttspider! Its dummy-thicc thorax leaves nothing to the imagination.',
    atk: 9,
    ac: 9,
    gold: 15,  
    image: 'buttspider.jpg',
};

const Wyvern = {
    id: 5,
    name: 'Wyley Wyvern',
    description: 'Terror of the Skies, this offshoot of true dragons is still nothing to scoff at! Its infamous venom melts flesh and piercing cries shatter ears.',
    atk: 12,
    ac: 10,
    gold: 20,
    image: 'wyvern.png',
};

const abominations = [Goblin, Wolf, DarkWizard, ButtSpider, Wyvern];

export default abominations;