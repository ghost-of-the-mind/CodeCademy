
//// Lists of nouns and adjectives that are going to be used for the random spell generator.

const sourceNouns = [ // Add nouns to increase the range of potential sources, incasing them with '' and seperating with , . 
    'jesus', 'satan', 'blind pig', 'chad', 'STEMlord', 'gentlemans', 'pimp', 'grandma', 'Arch-demon', 'boomer', 'pikachu', 'hitler', 'hannibal', 'jeff', 'red-neck', 
    'spaghetti monster', 'anime girl', 'gundalf', 'dumblidor', 'puppet master', 'feminist'
];
const adjectives = [ // Add adjectives to increase the range of potential qualities, incasing them with '' and seperating with , .
    'festering', 'divine', 'furious', 'gigantic', 'filthy', 'hideous', 'sadistic', 'cocky', 'out-of-control', 'duck-like', 'forbidden', 'heartbreaking', 'corruptive', 
    'slimy', 'sticky', 'unholy', 'frisky', 'greedy', 'drunken', 'indecent', 'godawful', 'maniacal', 'vengeful', 'green', 'long-range', 'pulsating',  'sinister', 
    'shivering', 'offensive', 'disgusting', 'rebellious', 'underhanded', 'mischievous', 'soul-draining', 'trobing', 'unstable', 'charming', 'humiliating', 'healing',
    'cruel-hearted', 'bloodcurdling', 'sinful'
];
const effectNouns = [ // Add nouns to increase the range of potential spell effects, incasing them with '' and seperating with , .
    'whorenado', 'bitch slap', 'blood rage', 'sorority squat', 'sputnik strike', 'aberration', 'curse', 'blast', 'spirit bomb', 'arrow', 'perversion', 'deflection',    
    'breath', 'whisper', 'aura', 'golden shower', 'projection', 'meteor swarm', 'scream', 'elemental', 'maelstorm', 'banishing', 'flame', 'spanking', 'barrier', 'hole', 
    'exorcism', 'chaining', 'deception', 'rune', 'chanting', 'illusions', 'protection', 'vision', 'jinx', 'soulsteal', 'blessing', 'dagger', 'mask', 'nexus', 'interruption',
    'tears', 'brainwash', 'mark', 'cold turkey', 'armor', 'cloak', 'tentacles'
];

//// Empty lists were the formated nouns and adjectives will be stored after processing. 

const spellSource = [];
const spellQuality = [];
const spellEffect = [];
    
    /// Prepares the nouns to be used as spell sources.
    const createSpellSource = arr => { // Forms the nouns in possessive.
        for (i = 0; i < arr.length; i++) {
            if (arr[i].charAt(arr[i].length - 1) === "s") {
                arr[i] = arr[i] + "'"  
            } else if (arr[i].charAt(arr[i].length - 1) != "s") {
                arr[i] = arr[i] + "'s"}
        }

        for (i = 0; i < arr.length; i++) { // Changes each noun's first letter to upper case and keeps everything else in lower case.
            spellSource[i] = arr[i].toLowerCase() && arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
        }
    };
        createSpellSource(sourceNouns);
    /// Prepares the adjectives to be used as a spell's quality descriptors.
    const createSpellQuality = arr => {
        for (i = 0; i < arr.length; i++) { // Changes each adjectives's first letter to upper case and keeps everything else in lower case.
            spellQuality[i] = arr[i].toLowerCase() && arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
        }
    };
        createSpellQuality(adjectives);

    /// Prepares the last set of nouns to descibe a spell's effect.
    const createSpellEffect = arr => {
        for (i = 0; i < arr.length; i++) { // Changes each noun's first letter to upper case and keeps everything else in lower case.
            spellEffect[i] = arr[i].toLowerCase() && arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
        }
    };
        createSpellEffect(effectNouns);

//// Randomly choose one word from each list - spellSource, spellQuality, spellEffect - and combine them, returning a random spell

const generateRandomSpell = () => {
    const randomSource = spellSource[Math.floor(Math.random() * spellSource.length)];
    const randomQuality = spellQuality[Math.floor(Math.random() * spellQuality.length)];
    const randomEffect = spellEffect[Math.floor(Math.random() * spellEffect.length)];

    return console.log(randomSource + " " + randomQuality + " " + randomEffect);
};

//// Calls/enables the function to work and logs/prints the result

generateRandomSpell();