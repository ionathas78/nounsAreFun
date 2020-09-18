let sentences = [
    "This.pron sentence.n is.v a.art test.n sentence.n .",
    "Every.n dog.n has.v his.pron day.n ."
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

        if (currentWord.length == 1) {
            currentType = "punctuation";
        } else {
            let separatorPos = currentWord.indexOf(".");
            let typeToken = currentWord.substring(separatorPos + 1);
            currentWord = currentWord.substr(0, separatorPos);

            switch (typeToken.toUpperCase()) {
                case "N":
                    currentType = "noun";
                    break;
                case "V":
                    currentType = "verb";
                    break;
                case "PREP":
                    currentType = "preposition";
                    break;
                case "PRON":
                    currentType = "pronoun";
                    break;
                case "ADJ":
                    currentType = "adjective";
                    break;
                case "ADV":
                    currentType = "adverb";
                    break;
                case "CONJ":
                    currentType = "conjunction";
                    break;
                case "ART":
                    currentType = "article";
                    break;
                default:
                    currentType = "";
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