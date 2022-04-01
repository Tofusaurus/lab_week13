//Part Clone 
const copybutton = document.querySelector('.copy-container')
const cloned_button = document.querySelectorAll('.original-container div')

function addClicks(event) {
    copybutton.insertAdjacentHTML('afterbegin', event)
}

cloned_button.forEach(element => element.addEventListener('click', (evt) => {
    addClicks(evt.currentTarget.outerHTML)
}))

//Part Delete

const del_button = document.querySelector('button')

function deleteClicks() {
    while (copybutton.firstChild) {
        copybutton.removeChild(copybutton.firstChild)}
}

del_button.addEventListener('click', deleteClicks)