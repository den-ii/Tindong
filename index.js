// Remember to import the data and Dog class!

import dogs from './data.js'
import Dog from './Dog.js'
document.getElementById('cross').addEventListener('click', no)
document.getElementById('heart').addEventListener('click', yes)

//on click swipe to the nextle
let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex])
const size = Object.keys(dogs).length;
console.log(size)
render()
function render() {
    
    if (currentDogIndex < size) {
    document.getElementById('main').innerHTML = currentDog.getDogHtml();
    }
    else {
        document.getElementById('main').innerHTML = `
        <div class="none">
        <h2> No More For Today </h2>
        </div>`
        document.getElementById('cross').style.display = 'none'
        document.getElementById('heart').style.display = 'none'
    }
}
function getNewDog() {
currentDogIndex += 1;
currentDog = new Dog(dogs[currentDogIndex])
setTimeout(render, 1500)
}

function yes() {
    currentDog.setMatchStatus(true)
    getNewDog()
    document.getElementById('like').style.display = 'block';
    setTimeout(() => {
        document.getElementById('like').style.display = 'none';
    }, 1500)
}
function no() {
    currentDog.setMatchStatus(false)
    getNewDog()
    document.getElementById('nope').style.display = 'block';
    setTimeout(() => {
        document.getElementById('nope').style.display = 'none';
    },1500)
}
