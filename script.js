const selectionButtons = document.querySelectorAll('[data-selection]')

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
});

function makeSelection(selection) {
    console.log(selection)
};

function randomNumber() {
    var randomNumber = Math.floor(Math.random()*3+1);
    return randomNumber;
};

var RN = randomNumber()

function RPS() {
    if (RN==1){
        return "rock"
    }   else if (RN==2){
        return "paper"
    }   else if (RN==3){
        return ("scissors")
    }
};
var RPSTest = RPS();

console.log(RPSTest);