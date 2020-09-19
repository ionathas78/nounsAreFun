const separator = "|";
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

// console.log(spans);
// console.log(infoBar);
sentences.forEach(currentSentence => {
    addListItem(currentSentence);
})

document.addEventListener("click", (event) => {
    if (spansArray.includes(event.target)) {
        // console.log(event.target);
        clickSpan(event.target);
    }
});

function clickSpan (target) {
    let spanColor = target.style.color;
    let spanClass = target.className;
    let spanText = target.textContent;

    target.style.color = "yellow";

    let message = spanText + ": " + spanClass;
    infoBar.textContent = message;

    target.style.color = spanColor;
}

function addListItem(sentenceIn) {
    let itemReturn = document.createElement("li");
    let words = sentenceIn.split(" ");

    for (let i = 0; i < words.length; i++) {
        let newSpan = document.createElement("span");
        let currentWord = words[i].trim();
        let currentType;

        let logEntry = currentWord + ": ";

        if (currentWord === null || currentWord == "") {
            currentWord = "";
            currentType = "";

        } else if (currentWord.length == 1 && !(currentWord.toLowerCase() == "a" || currentWord.toLowerCase() == "i")) {
            currentType = "punctuation";

        } else {
            let separatorPos = currentWord.indexOf(".");
            let typeToken = null;

            if (separatorPos > -1) {
                typeToken = currentWord.substring(separatorPos + 1).toUpperCase();
                currentWord = currentWord.substr(0, separatorPos);
                
            } else {
                for (const w of wordList) {
                    if (currentWord.toLowerCase() == w.word) {
                        typeToken = w.type;
                        break;
                    }
                }
            }

            console.log(typeToken);
            for (const t of wordTypes) {
                // console.log(t);
                if (typeToken == t.token) {
                    currentType = t.type;
                    break;
                }
            }
        }

        logEntry += currentWord + " (" + currentType + ")";
        
        newSpan.textContent = currentWord;
        newSpan.className = currentType;
        spansArray.push(newSpan);
        itemReturn.appendChild(newSpan);

        // console.log(logEntry);
    }

    spansSection.appendChild(itemReturn);
}