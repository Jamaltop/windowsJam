const cardboard = document.querySelector(".card-container");
const scorePoint = document.querySelector("#score-point");

const heard = document.querySelector(".heard-left");
let cards = [];
let pickedcard = [];
let score = 0;
let heardLeftt = 3;

const heroes = [
    'card-1.png', 'card-2.png', 'card-3.png', 'card-4.png',
    'card-1.png', 'card-2.png', 'card-3.png', 'card-4.png'
];

let unluck = new Audio('../audio/unlock.wav');
let welldone = new Audio('../audio/well-done.wav');
let exselent = new Audio('../audio/exselent.wav');

heroes.sort(() => 0.5 - Math.random());

heroes.forEach((value) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.info = value;
    card.innerHTML = '?';
    cards.push(card);
    cardboard.appendChild(card);
    card.addEventListener("click", handlepick);
});

function handlepick() {
    // Запрет клика на уже открытую карту или повторный клик на ту же
    if (
        pickedcard.length < 2 &&
        !this.classList.contains("active") &&
        pickedcard[0] !== this
    ) {
        this.innerHTML = `<img src="../img/${this.dataset.info}">`;
        pickedcard.push(this);

        if (pickedcard.length === 2) {
            setTimeout(chekMatch, 1000);
        }
    }
}

function chekMatch() {
    if (pickedcard[0].dataset.info === pickedcard[1].dataset.info) {
        pickedcard[0].classList.add("active");
        pickedcard[1].classList.add("active");
        welldone.play();
       
        score++;
        scorePoint.innerHTML = score;
        if (score === 4) {
            window.money++;
            localStorage.setItem('jamcoins', window.money); 
            window.location.href= "main.html"
            alert("You Won");
            setTimeout(() => exselent.play(), 2000);
        }
    } else {
        pickedcard[0].innerHTML = "?";
        pickedcard[1].innerHTML = "?";
        unluck.play();
        heardLeftt--;
        heard.innerHTML = heardLeftt;
        if (heardLeftt === 0) {
            alert("You Lose");
            cards.forEach(card => card.removeEventListener("click", handlepick));
        }
    }
    pickedcard = [];
}
