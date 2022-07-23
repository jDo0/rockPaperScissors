const selectionButtons = document.querySelectorAll('[data-selection]')

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection)
}

function randomNumber() {
    var randomNumber = Math.floor(Math.random()*3+1);
    console.log(randomNumber);
}

randomNumber()

