// Word sets definition
const determiners = ["No", "Some", "Many", "Every"]
const singular_aminals = ["dog", "cat", "elefant", "horse", "sheep", "fish", "sloth", "cow", "whale", "chicken"];
const plural_animals = ["dogs", "cats", "elefants", "horses", "sheep", "fish", "sloths", "cows", "whales", "chickens"];
const verbs = ["run", "bark", "sing", "eat", "pee", "poo", "graze", "fight", "steal", "talk", "sound", "hug", "live", "shine", "yell", "code"];
const adverbs = ["quickly", "slowly", "happily", "safely", "innocently", "eagerly", "angryly", "wildly"];

// Group animal singulars and plurals into single structure
const animalFactory = (singular, plural) => {
    return {
        _singular: singular,
        _plural: plural,
        get singular() {
            return this._singular;
        },
        get plural() {
            return this._plural;
        }
    }
}

// Create array of animals with factory function
animals = [];
for (let i = 0; i < singular_aminals.length; i++) {
    animals.push(animalFactory(singular_aminals[i], plural_animals[i]));
}

// Create messages
function generateMessage() {
    const randomIndex = (lim) => Math.floor(Math.random() * lim);
    const randDeterminer = determiners[randomIndex(determiners.length)];
    const plural = randDeterminer == "Some" || randDeterminer == "Many";
    const randAnimalObject = animals[randomIndex(animals.length)];
    const randAnimal = plural ? randAnimalObject.plural : randAnimalObject.singular;
    const randVerb = verbs[randomIndex(verbs.length)];
    const randAdverb = adverbs[randomIndex(adverbs.length)];
    const messageArray = [randDeterminer, randAnimal, "can", randVerb, randAdverb];
    return messageArray.join(' ') + '.';
}

// Ouput message
console.log(generateMessage());
