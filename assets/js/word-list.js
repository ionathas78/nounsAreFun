const wordList = [
    {
        word: "template",
        type: "N",
        definition: "Something that establishes or serves as a pattern.",
        data: "singular"
    },

    {
        word: "action",
        type: "N",
        definition: "Something someone does.",
        data: "singular"
    },
    {
        word: "actor",
        type: "N",
        definition: "Someone that does or performs something.",
        data: "singular"
    },
    {
        word: "add",
        type: "V",
        definition: "To include or combine.",
        data: "present tense"
    },
    {
        word: "appears",
        type: "V",
        definition: "To come into sight",
        data: "present tense"
    },
    {
        word: "are",
        type: "V",
        definition: "To be.",
        data: "present tense"
    },
    {
        word: "arrive",
        type: "V",
        definition: "To reach a destination.",
        data: "present tense"
    },
    {
        word: "ball",
        type: "N",
        definition: "A spherical object or toy.",
        data: "singular"
    },
    {
        word: "beginning",
        type: "N",
        definition: "A start or commencement.",
        data: "singular"
    },
    {
        word: "called",
        type: "V",
        definition: "To speak in a loud voice to be heard.",
        data: "past tense"
    },
    {
        word: "can",
        type: "V",
        definition: "To be able or capable.",
        data: "present tense"
    },
    {
        word: "can't",
        type: "V",
        definition: "Contraction of 'can not'; to be unable or incapable.",
        data: "present tense"
    },
    {
        word: "cannot",
        type: "V",
        definition: "To be unable or incapable.",
        data: "present tense"
    },
    {
        word: "day",
        type: "N",
        definition: "A 24-hour period of time during which the earth rotates fully on its axis.",
        data: "singular"
    },
    {
        word: "describes",
        type: "V",
        definition: "To explain or spell out.",
        data: "present tense"
    },
    {
        word: "dinner",
        type: "N",
        definition: "A meal eaten in the middle or later part of the day.",
        data: "singular"
    },
    {
        word: "direct",
        type: "ADJ",
        definition: "Straight, unswerving.",
        data: ""
    },
    {
        word: "doesn't",
        type: "V",
        definition: "Contraction of 'does not'; not to act.",
        data: "present tense"
    },
    {
        word: "dog",
        type: "N",
        definition: "A four-legged canine creature.",
        data: "singular"
    },
    {
        word: "example",
        type: "N",
        definition: "A typical specimen.",
        data: "singular"
    },
    {
        word: "expand",
        type: "V",
        definition: "To open or enlarge.",
        data: "present tense"
    },
    {
        word: "extremely",
        type: "ADV",
        definition: "To a high degree.",
        data: ""
    },
    {
        word: "every",
        type: "ADJ",
        definition: "Each individual piece or member.",
        data: ""
    },
    {
        word: "finish",
        type: "V",
        definition: "To complete or end.",
        data: "present tense"
    },
    {
        word: "grass",
        type: "N",
        definition: "A plant that covers the ground.",
        data: "singular"
    },
    {
        word: "group",
        type: "N",
        definition: "A collection or conglomerate.",
        data: "singular"
    },
    {
        word: "has",
        type: "V",
        definition: "To possess.",
        data: "present tense"
    },
    {
        word: "how",
        type: "ADV",
        definition: "In what manner.",
        data: ""
    },
    {
        word: "its",
        type: "ADJ",
        definition: "Belonging to it.",
        data: "Descriptive form of singular neutral personal pronoun."
    },
    {
        word: "identifying",
        type: "ADJ",
        definition: "Distinguishing.",
        data: "Participle of 'identify'"
    },
    {
        word: "indirect",
        type: "ADJ",
        definition: "Not straight; oblique.",
        data: ""
    },
    {
        word: "intransitive",
        type: "ADJ",
        definition: "Not able to take a direct object.",
        data: ""
    },
    {
        word: "is",
        type: "V",
        definition: "To be.",
        data: "present tense"
    },
    {
        word: "jack",
        type: "N",
        definition: "A unisex name.",
        data: "proper noun"
    },
    {
        word: "jenny",
        type: "N",
        definition: "A girl's name.",
        data: "proper noun"
    },
    {
        word: "kelly",
        type: "N",
        definition: "A unisex name.",
        data: "proper noun"
    },
    {
        word: "kick",
        type: "V",
        definition: "To strike with a leg or foot.",
        data: "present tense"
    },
    {
        word: "known",
        type: "ADJ",
        definition: "Recognized or quantified.",
        data: ""
    },
    {
        word: "line",
        type: "N",
        definition: "A bounded ray connecting two points in space.",
        data: "singular"
    },
    {
        word: "make",
        type: "V",
        definition: "To form or create.",
        data: "present tense"
    },
    {
        word: "means",
        type: "V",
        definition: "To intend or signify.",
        data: "present tense"
    },
    {
        word: "noun",
        type: "N",
        definition: "A word that represents a person, place, or thing.",
        data: "singular"
    },
    {
        word: "nouns",
        type: "N",
        definition: "Words that represent persons, places, or things.",
        data: "plural"
    },
    {
        word: "object",
        type: "N",
        definition: "A generic entity or element.",
        data: "singular"
    },
    {
        word: "objects",
        type: "N",
        definition: "Generic entities or elements.",
        data: "plural"
    },
    {
        word: "often",
        type: "ADV",
        definition: "Happening frequently.",
        data: ""
    },
    {
        word: "performs",
        type: "V",
        definition: "To do or act.",
        data: "present tense"
    },
    {
        word: "person",
        type: "N",
        definition: "A living creature.",
        data: "singular"
    },
    {
        word: "phrase",
        type: "N",
        definition: "A group of words that form a syntactic unit.",
        data: "singular"
    },
    {
        word: "place",
        type: "N",
        definition: "A location.",
        data: "singular"
    },
    {
        word: "preposition",
        type: "N",
        definition: "A word that marks the beginning of a descriptive phrase.",
        data: "singular"
    },
    {
        word: "prepositional",
        type: "ADJ",
        definition: "Regarding or belonging to a word beginning a descriptive phrase.",
        data: ""
    },
    {
        word: "races",
        type: "V",
        definition: "To compete in a competition of speed.",
        data: "present tense"
    },
    {
        word: "receives",
        type: "V",
        definition: "To take or accept.",
        data: "present tense"
    },
    {
        word: "say",
        type: "V",
        definition: "To speak or tell.",
        data: "present tense"
    },
    {
        word: "sense",
        type: "N",
        definition: "A method for experience outside events or stimuli.",
        data: "singular"
    },
    {
        word: "sentence",
        type: "N",
        definition: "A group of words that forms a complete thought or idea.",
        data: "singular"
    },
    {
        word: "signifies",
        type: "V",
        definition: "To mean or portend.",
        data: "present tense"
    },
    {
        word: "sister",
        type: "N",
        definition: "A daughter of the same father or mother.",
        data: "singular"
    },
    {
        word: "slithers",
        type: "V",
        definition: "To slide along the ground, usually in a serpentine fashion.",
        data: "present tense"
    },
    {
        word: "snake",
        type: "N",
        definition: "A legless, scaled creature from the class Reptilia.",
        data: "singular"
    },
    {
        word: "subject",
        type: "N",
        definition: "A person or object of primary importance.",
        data: "singular"
    },
    {
        word: "take",
        type: "V",
        definition: "To grasp or gain possession.",
        data: "present tense"
    },
    {
        word: "target",
        type: "N",
        definition: "The focus or recipient of an action.",
        data: "singular"
    },
    {
        word: "test",
        type: "N",
        definition: "A benchmark or other method for measurement.",
        data: "singular"
    },
    {
        word: "thing",
        type: "N",
        definition: "A generic entity or element.",
        data: "singular"
    },
    {
        word: "throws",
        type: "V",
        definition: "To cast or propel through the air.",
        data: "present"
    },
    {
        word: "transitive",
        type: "ADJ",
        definition: "Accepting a direct object.",
        data: ""
    },
    {
        word: "useful",
        type: "ADJ",
        definition: "Helpful, making a task easier.",
        data: ""
    },
    {
        word: "verb",
        type: "N",
        definition: "A word that signifies an action.",
        data: "singular"
    },
    {
        word: "verbs",
        type: "N",
        definition: "Words that signify actions.",
        data: "plural"
    },
    {
        word: "use",
        type: "V",
        definition: "To employ or apply.",
        data: "present tense"
    },
    {
        word: "uses",
        type: "V",
        definition: "To employ or apply.",
        data: "present tense"
    },
    {
        word: "went",
        type: "V",
        definition: "To move or travel toward a destination.",
        data: "past tense"
    },
    {
        word: "when",
        type: "ADV",
        definition: "At or during which time.",
        data: ""
    },
    {
        word: "where",
        type: "ADV",
        definition: "At or in which place.",
        data: ""
    },
    {
        word: "why",
        type: "ADV",
        definition: "For what reason or purpose.",
        data: ""
    },
    {
        word: "word",
        type: "N",
        definition: "A group of letters that signifies an entity, action, or concept",
        data: "singular"
    },
    {
        word: "words",
        type: "N",
        definition: "Groups of letters that signify entities, actions, or concepts.",
        data: "plural"
    },
    {
        word: "zoo",
        type: "N",
        definition: "A menagerie of creatures, usually collected for the purpose of display or exhibition.",
        data: "singular"
    },

    {
        word: "a",
        type: "ART",
        definition: "",
        data: ""
    },
    {
        word: "an",
        type: "ART",
        definition: "",
        data: ""
    },
    {
        word: "the",
        type: "ART",
        definition: "",
        data: ""
    },
    {
        word: "i",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "me",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "my",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "we",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "us",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "our",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "you",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "your",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "he",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "him",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "his",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "she",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "her",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "hers",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "it",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "its",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "they",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "them",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "their",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "another",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "other",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "others",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "some",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "this",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "these",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "that",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "those",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "which",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "who",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "what",
        type: "PRON",
        definition: "",
        data: ""
    },
    {
        word: "and",
        type: "CONJ",
        definition: "",
        data: ""
    },
    {
        word: "but",
        type: "CONJ",
        definition: "",
        data: ""
    },
    {
        word: "if",
        type: "CONJ",
        definition: "",
        data: ""
    },
    {
        word: "or",
        type: "CONJ",
        definition: "",
        data: ""
    },
    {
        word: "aboard",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "about",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "above",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "across",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "after",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "against",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "along",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "amid",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "among",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "anti",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "around",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "as",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "at",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "before",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "behind",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "below",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "beneath",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "beside",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "between",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "beyond",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "by",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "despite",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "down",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "during",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "except",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "for",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "from",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "in",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "inside",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "into",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "like",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "near",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "of",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "off",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "on",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "onto",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "opposite",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "outside",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "over",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "past",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "per",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "since",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "than",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "through",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "to",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "toward",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "under",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "underneath",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "unlike",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "until",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "up",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "upon",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "versus",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "via",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "with",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "within",
        type: "PREP",
        definition: "",
        data: ""
    },
    {
        word: "without",
        type: "PREP",
        definition: "",
        data: ""
    }
];
