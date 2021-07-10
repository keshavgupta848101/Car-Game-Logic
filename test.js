const runButton = document.getElementById('runButton');
const startButton = document.getElementById('startButton');
const div = document.getElementById('div');
const ul = document.getElementById('ul');

runButton.style.display = "none"

let startCounter = 1;
let petrol = 50;
let kmRemaining = 100;
let kmTravel = 0;
let petrolused = 0;
const mileage = 0.5;
let pp1 = 10;
let pp2 = 27;
let pp3 = 37;
let pp4 = 39;
let pp5 = 62;
let pp6 = 75;
let counter = 0;

startButton.addEventListener('click', () => {
    if (startCounter == 2) {
        console.log("Andar location relode");
        location.reload();
    }
    else {
        console.log(startCounter);
        runButton.style.display = ""
        startCounter += 1;
    }
})


runButton.addEventListener('click', () => {
    if (kmTravel != kmRemaining && petrol >= 0) {
        let randomNum = Math.floor(Math.random() * 7);
        petrolUsed = randomNum / mileage;
        petrol = petrol - petrolUsed;
        kmTravel = kmTravel + randomNum;
        if (kmTravel === pp1 || kmTravel === pp2 || kmTravel === pp3 || kmTravel === pp4 || kmTravel === pp5 || kmTravel === pp6) {
            petrol += 30;
        }
        if (petrol < 0) {
            petrol = 0;
            let li = document.createElement("li")
            let textnode = document.createTextNode(`Move ${counter = counter + 1} - car at ${kmTravel}, Petrol remaining ${petrol}`);     // Create a text node
            li.appendChild(textnode)
            ul.appendChild(li);
            endGame();
        }
        else {
            var li = document.createElement("li")
            var textnode = document.createTextNode(`Move ${counter = counter + 1} - car at ${kmTravel}, Petrol remaining ${petrol}`);     // Create a text node
            li.appendChild(textnode)
            ul.appendChild(li);
        }       
    }   
});

function endGame() {
    const ul = document.getElementById('ul');
    petrol = 0;
    var li = document.createElement("li");
    var textnode = document.createTextNode("Game Over");     // Create a text node
    // Create a <h1> element
    li.appendChild(textnode);
    ul.appendChild(li);
    runButton.style.display = "none";
    return false;
}