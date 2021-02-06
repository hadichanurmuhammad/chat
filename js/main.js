let inputElement = document.querySelector(`.formInput`);
let reciveButton = document.querySelector(`.recive`);
let sendButton = document.querySelector(`.send`);
let textElement = document.querySelector(`.textWrapper`)
let formElement = document.querySelector(`.form`)


function reciveMessage (value){
    reciveButton.addEventListener(`click`, value => {
        value.preventDefault()
        let newPiElement = document.createElement(`p`)
        newPiElement.classList.add(`resive`)
        textElement.appendChild(newPiElement)
        newPiElement.style.display = `block`
        newPiElement.style.width = `75%`
        newPiElement.textContent = inputElement.value
        inputElement.value = ``
    })
}

reciveMessage()

function sendMessage (value){
    sendButton.addEventListener(`click`, value => {
        value.preventDefault()
        let newPiElement = document.createElement(`p`)
        newPiElement.classList.add(`sent`)
        textElement.appendChild(newPiElement)
        newPiElement.style.display = `block`
        newPiElement.setAttribute(`id`, `++`)
        newPiElement.textContent = inputElement.value.trim()
        inputElement.value = ``
    })
}


sendMessage()