const wordList = [
    {
        word: "template",
        type: "N"
    },

    {
        word: "action",
        type: "N"
    },
    {
        word: "actor",
        type: "N"
    },
    {
        word: "add",
        type: "V"
    },
    {
        word: "appears",
        type: "V"
    },
    {
        word: "are",
        type: "V"
    },
    {
        word: "arrive",
        type: "V"
    },
    {
        word: "ball",
        type: "N"
    },
    {
        word: "beginning",
        type: "N"
    },
    {
        word: "called",
        type: "V"
    },
    {
        word: "can",
        type: "V"
    },
    {
        word: "can't",
        type: "V"
    },
    {
        word: "cannot",
        type: "V"
    },
    {
        word: "day",
        type: "N"
    },
    {
        word: "describes",
        type: "V"
    },
    {
        word: "dinner",
        type: "N"
    },
    {
        word: "direct",
        type: "ADJ"
    },
    {
        word: "doesn't",
        type: "V"
    },
    {
        word: "dog",
        type: "N"
    },
    {
        word: "example",
        type: "N"
    },
    {
        word: "expand",
        type: "V"
    },
    {
        word: "extremely",
        type: "ADV"
    },
    {
        word: "every",
        type: "ADJ"
    },
    {
        word: "finish",
        type: "V"
    },
    {
        word: "grass",
        type: "N"
    },
    {
        word: "group",
        type: "N"
    },
    {
        word: "has",
        type: "V"
    },
    {
        word: "how",
        type: "ADV"
    },
    {
        word: "its",
        type: "ADJ"
    },
    {
        word: "identifying",
        type: "ADJ"
    },
    {
        word: "indirect",
        type: "ADJ"
    },
    {
        word: "intransitive",
        type: "ADJ"
    },
    {
        word: "is",
        type: "V"
    },
    {
        word: "jack",
        type: "N"
    },
    {
        word: "jenny",
        type: "N"
    },
    {
        word: "kelly",
        type: "N"
    },
    {
        word: "kick",
        type: "V"
    },
    {
        word: "known",
        type: "V"
    },
    {
        word: "line",
        type: "N"
    },
    {
        word: "make",
        type: "V"
    },
    {
        word: "means",
        type: "V"
    },
    {
        word: "noun",
        type: "N"
    },
    {
        word: "nouns",
        type: "N"
    },
    {
        word: "object",
        type: "N"
    },
    {
        word: "objects",
        type: "N"
    },
    {
        word: "often",
        type: "ADV"
    },
    {
        word: "performs",
        type: "V"
    },
    {
        word: "person",
        type: "N"
    },
    {
        word: "phrase",
        type: "N"
    },
    {
        word: "place",
        type: "N"
    },
    {
        word: "preposition",
        type: "N"
    },
    {
        word: "prepositional",
        type: "ADJ"
    },
    {
        word: "races",
        type: "V"
    },
    {
        word: "receives",
        type: "V"
    },
    {
        word: "say",
        type: "V"
    },
    {
        word: "sense",
        type: "N"
    },
    {
        word: "sentence",
        type: "N"
    },
    {
        word: "signifies",
        type: "V"
    },
    {
        word: "sister",
        type: "N"
    },
    {
        word: "slithers",
        type: "V"
    },
    {
        word: "snake",
        type: "N"
    },
    {
        word: "subject",
        type: "N"
    },
    {
        word: "take",
        type: "V"
    },
    {
        word: "target",
        type: "N"
    },
    {
        word: "test",
        type: "N"
    },
    {
        word: "thing",
        type: "N"
    },
    {
        word: "throws",
        type: "V"
    },
    {
        word: "transitive",
        type: "ADJ"
    },
    {
        word: "useful",
        type: "ADJ"
    },
    {
        word: "verb",
        type: "N"
    },
    {
        word: "verbs",
        type: "N"
    },
    {
        word: "use",
        type: "V"
    },
    {
        word: "uses",
        type: "V"
    },
    {
        word: "went",
        type: "V"
    },
    {
        word: "when",
        type: "ADV"
    },
    {
        word: "where",
        type: "ADV"
    },
    {
        word: "why",
        type: "N"
    },
    {
        word: "word",
        type: "N"
    },
    {
        word: "words",
        type: "N"
    },
    {
        word: "zoo",
        type: "N"
    },

    {
        word: "a",
        type: "ART"
    },
    {
        word: "an",
        type: "ART"
    },
    {
        word: "the",
        type: "ART"
    },
    {
        word: "i",
        type: "PRON"
    },
    {
        word: "me",
        type: "PRON"
    },
    {
        word: "my",
        type: "PRON"
    },
    {
        word: "we",
        type: "PRON"
    },
    {
        word: "us",
        type: "PRON"
    },
    {
        word: "our",
        type: "PRON"
    },
    {
        word: "you",
        type: "PRON"
    },
    {
        word: "your",
        type: "PRON"
    },
    {
        word: "he",
        type: "PRON"
    },
    {
        word: "him",
        type: "PRON"
    },
    {
        word: "his",
        type: "PRON"
    },
    {
        word: "she",
        type: "PRON"
    },
    {
        word: "her",
        type: "PRON"
    },
    {
        word: "hers",
        type: "PRON"
    },
    {
        word: "it",
        type: "PRON"
    },
    {
        word: "its",
        type: "PRON"
    },
    {
        word: "they",
        type: "PRON"
    },
    {
        word: "them",
        type: "PRON"
    },
    {
        word: "their",
        type: "PRON"
    },
    {
        word: "another",
        type: "PRON"
    },
    {
        word: "other",
        type: "PRON"
    },
    {
        word: "others",
        type: "PRON"
    },
    {
        word: "some",
        type: "PRON"
    },
    {
        word: "this",
        type: "PRON"
    },
    {
        word: "these",
        type: "PRON"
    },
    {
        word: "that",
        type: "PRON"
    },
    {
        word: "those",
        type: "PRON"
    },
    {
        word: "which",
        type: "PRON"
    },
    {
        word: "who",
        type: "PRON"
    },
    {
        word: "what",
        type: "PRON"
    },
    {
        word: "and",
        type: "CONJ"
    },
    {
        word: "but",
        type: "CONJ"
    },
    {
        word: "if",
        type: "CONJ"
    },
    {
        word: "or",
        type: "CONJ"
    },
    {
        word: "aboard",
        type: "PREP"
    },
    {
        word: "about",
        type: "PREP"
    },
    {
        word: "above",
        type: "PREP"
    },
    {
        word: "across",
        type: "PREP"
    },
    {
        word: "after",
        type: "PREP"
    },
    {
        word: "against",
        type: "PREP"
    },
    {
        word: "along",
        type: "PREP"
    },
    {
        word: "amid",
        type: "PREP"
    },
    {
        word: "among",
        type: "PREP"
    },
    {
        word: "anti",
        type: "PREP"
    },
    {
        word: "around",
        type: "PREP"
    },
    {
        word: "as",
        type: "PREP"
    },
    {
        word: "at",
        type: "PREP"
    },
    {
        word: "before",
        type: "PREP"
    },
    {
        word: "behind",
        type: "PREP"
    },
    {
        word: "below",
        type: "PREP"
    },
    {
        word: "beneath",
        type: "PREP"
    },
    {
        word: "beside",
        type: "PREP"
    },
    {
        word: "between",
        type: "PREP"
    },
    {
        word: "beyond",
        type: "PREP"
    },
    {
        word: "by",
        type: "PREP"
    },
    {
        word: "despite",
        type: "PREP"
    },
    {
        word: "down",
        type: "PREP"
    },
    {
        word: "during",
        type: "PREP"
    },
    {
        word: "except",
        type: "PREP"
    },
    {
        word: "for",
        type: "PREP"
    },
    {
        word: "from",
        type: "PREP"
    },
    {
        word: "in",
        type: "PREP"
    },
    {
        word: "inside",
        type: "PREP"
    },
    {
        word: "into",
        type: "PREP"
    },
    {
        word: "like",
        type: "PREP"
    },
    {
        word: "near",
        type: "PREP"
    },
    {
        word: "of",
        type: "PREP"
    },
    {
        word: "off",
        type: "PREP"
    },
    {
        word: "on",
        type: "PREP"
    },
    {
        word: "onto",
        type: "PREP"
    },
    {
        word: "opposite",
        type: "PREP"
    },
    {
        word: "outside",
        type: "PREP"
    },
    {
        word: "over",
        type: "PREP"
    },
    {
        word: "past",
        type: "PREP"
    },
    {
        word: "per",
        type: "PREP"
    },
    {
        word: "since",
        type: "PREP"
    },
    {
        word: "than",
        type: "PREP"
    },
    {
        word: "through",
        type: "PREP"
    },
    {
        word: "to",
        type: "PREP"
    },
    {
        word: "toward",
        type: "PREP"
    },
    {
        word: "under",
        type: "PREP"
    },
    {
        word: "underneath",
        type: "PREP"
    },
    {
        word: "unlike",
        type: "PREP"
    },
    {
        word: "until",
        type: "PREP"
    },
    {
        word: "up",
        type: "PREP"
    },
    {
        word: "upon",
        type: "PREP"
    },
    {
        word: "versus",
        type: "PREP"
    },
    {
        word: "via",
        type: "PREP"
    },
    {
        word: "with",
        type: "PREP"
    },
    {
        word: "within",
        type: "PREP"
    },
    {
        word: "without",
        type: "PREP"
    }
];
