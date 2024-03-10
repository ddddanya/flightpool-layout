const MAX_DESTINATION = 200
const DESTINATION_BLOCK = "#destinations"

const MAX_PARTNERS = 50
const PARTNERS_BLOCK = "#partners"

const MAX_CHANCE = 99.99
const CHANCE_BLOCK = "#chance"

let int1;
let int2;
let int3;

const destinationIncrementAnimation = () => {
    const dest = document.querySelector(DESTINATION_BLOCK)
    let destination = parseInt(dest.innerHTML)
    if (destination < MAX_DESTINATION) {
        dest.innerHTML = destination + 1
    }
    if (destination == MAX_DESTINATION) {
        dest.innerHTML = MAX_DESTINATION + "+"
        clearInterval(int1)
    }
}

const partnersIncrementAnimation = () => {
    const partners = document.querySelector(PARTNERS_BLOCK)
    let destination = parseInt(partners.innerHTML)
    if (destination < MAX_PARTNERS) {
        partners.innerHTML = destination + 1
    }
    if (destination == MAX_PARTNERS) {
        partners.innerHTML = MAX_PARTNERS + "+"
        clearInterval(int2)
    }
}

const chanceIncrementAnimation = () => {
    const chance = document.querySelector(CHANCE_BLOCK)
    let destination = parseFloat(chance.innerHTML)
    if (destination < MAX_CHANCE) {
        chance.innerHTML = (destination + 0.21).toFixed(2)
    }
    if (destination >= MAX_CHANCE) {
        chance.innerHTML = MAX_CHANCE + "%"
        clearInterval(int3)
    }
}

window.onload = () => {
    int1 = setInterval(destinationIncrementAnimation, 1)
    int2 = setInterval(partnersIncrementAnimation, 10)
    int3 = setInterval(chanceIncrementAnimation, 0.001)
}