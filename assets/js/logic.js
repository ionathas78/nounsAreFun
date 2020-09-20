const separator = "|";
const targetType = "noun";

const wordTypes = [
    {
        type: "adjective",
        token: "ADJ"
    },
    {
        type: "adverb",
        token: "ADV"
    },
    {
        type: "article",
        token: "ART"
    },
    {
        type: "conjunction",
        token: "CONJ"
    },
    {
        type: "noun",
        token: "N"
    },
    {
        type: "preposition",
        token: "PREP"
    },
    {
        type: "pronoun",
        token: "PRON"
    },
    {
        type: "punctuation",
        token: "PUNC"
    },
    {
        type: "verb",
        token: "V"
    }
];

let spans = document.querySelectorAll("span");
let spansArray = Array.from(spans);
let infoBar = document.getElementById("info-bar");
let spansSection = document.getElementById("list-section");
let spanType = document.getElementById("find-type");
let spanCount = document.getElementById("find-count");
let spanTotal = document.getElementById("find-total");

let currentCount = 0;
let totalCount = 0;

spanType.textContent = targetType;
spanType.className = targetType + " active";
spanCount.textContent = currentCount;

sentences.forEach(currentSentence => {
    addListItem(currentSentence);
})

document.addEventListener("click", (event) => {
    if (spansArray.includes(event.target)) {
        clickSpan(event.target);
    }
});

function clickSpan (target) {
    let spanClass = target.className;
    let spanText = target.textContent;
    let message, spanWord;

    if (spanClass.indexOf("word") > -1) {
        spanClass = spanClass.replace("word", "").trim();
    } else {
        return;
    }

    if (spanClass.indexOf("active") > -1) {
        spanClass = spanClass.replace("active", "").trim();
    }

    if (spanClass.indexOf(" ") > -1) {
        return;
    }

    resetActive();
    setActive(target);

    if (spanClass == targetType) {
        target.className += " correct";
        currentCount++;
        spanCount.textContent = currentCount;
        message = "Correct,"

    } else {
        target.className += " wrong";
        message = "Oops,"
    }

    message += " '" + spanText + "' is a";
    if ("aeiou".indexOf(spanClass.substr(0,1).toLowerCase()) > -1) {
        message += "n";
    }
    message += " " + spanClass + ".";

    spanWord = getWordFromList(spanText);
    if (spanWord && spanWord.definition) {
        message += " " + spanText.substr(0, 1).toUpperCase() + spanText.substr(1).toLowerCase() + ": ";

        if (spanWord.data) {
            message += " (" + spanWord.data + ")";
        }
        if (spanWord.definition) {
            message += " " + spanWord.definition;
        }
    }

    infoBar.textContent = message;
}

function resetActive () {
    let activeTags = document.querySelectorAll(".active");
    let activeArray = Array.from(activeTags);

    activeArray.forEach(tag => {
        if (tag !== spanType) {
            tag.className = tag.className.replace("active", "").trim();
        }
    })
}

function setActive (tagToSet) {
    if (tagToSet.className.indexOf("active") < 0) {
        tagToSet.className = tagToSet.className + " active";
    }
}

function addListItem(sentenceIn) {
    let itemReturn = document.createElement("li");
    let words = sentenceIn.split(" ");

    for (let i = 0; i < words.length; i++) {
        let newSpan = document.createElement("span");
        let currentWord = words[i].trim();
        let currentType;

        if (currentWord === null || currentWord == "") {
            currentWord = "";
            currentType = "";

        } else if (currentWord.length == 1 && !(currentWord.toLowerCase() == "a" || currentWord.toLowerCase() == "i")) {
            currentType = "punctuation";

        } else {
            let separatorPos = currentWord.indexOf(separator);
            let typeToken = null;

            if (separatorPos > -1) {
                typeToken = currentWord.substring(separatorPos + 1).toUpperCase();
                currentWord = currentWord.substr(0, separatorPos);
                
            } else {
                let wordFromList = getWordFromList(currentWord);
                console.log(currentWord, wordFromList);
                if (wordFromList) {
                    typeToken = wordFromList.type;
                }
            }

            for (const t of wordTypes) {
                if (typeToken == t.token) {
                    currentType = t.type;
                    break;
                }
            }
        }

        if (currentType == targetType) {
            totalCount++;
        }
        
        newSpan.textContent = currentWord;
        newSpan.className = "word " + currentType;
        spansArray.push(newSpan);
        itemReturn.appendChild(newSpan);
    }

    spanTotal.textContent = totalCount;
    spansSection.appendChild(itemReturn);
}

function getWordFromList (targetWord) {
    let returnString = null;
    let lowerWord = targetWord.toLowerCase();

    for (const w of wordList) {
        if (lowerWord == w.word) {
            returnString = w;
            break;
        }
    }

    return returnString;
}