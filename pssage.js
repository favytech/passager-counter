

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// console.log(countEl)
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}




// PRACTICE
let myPoints = 3

function add3Point() {
    myPoints +=3
}
function removelPoints() {
    myPoints -= 1
}
