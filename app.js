const wordBox = document.querySelector("input[type=text]");
const addingButton = document.querySelector("#addWord");
const pickingButton = document.querySelector("#pickWord");
const clearWinners = document.querySelector("#clear-winners");
const clearWords = document.querySelector("#clear-words");
const list = document.querySelector("#word-list");
const winnerList = document.querySelector("#winner-list");

addingButton.addEventListener("click", function() {
    let newLI = document.createElement("li");
    newLI.innerHTML = wordBox.value;
    list.appendChild(newLI);
})

wordBox.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        let newLI = document.createElement("li");
        newLI.innerHTML = wordBox.value;
        list.appendChild(newLI);
    }
})

pickingButton.addEventListener("click", function() {
    let words = document.querySelectorAll("#word-list li");
    let winner = Math.floor(Math.random() * words.length);
    let newLI = document.createElement("li");
    newLI.innerHTML = words[winner].innerText;
    winnerList.appendChild(newLI);
})

clearWinners.addEventListener("click", function() {
    let child = winnerList.lastElementChild;
    while (child) {
        winnerList.removeChild(child);
        child = winnerList.lastElementChild;
    }
})

clearWords.addEventListener("click", function() {
    let child = list.lastElementChild;
    while(child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }
})