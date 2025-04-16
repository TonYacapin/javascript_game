let cash = localStorage.getItem('cash') ? parseFloat(localStorage.getItem('cash')) : 0;
let games = localStorage.getItem('games') ? parseInt(localStorage.getItem('games')) : 0;
let devs = localStorage.getItem('devs') ? parseInt(localStorage.getItem('devs')) : 0;
let gamePrice = localStorage.getItem('gamePrice') ? parseFloat(localStorage.getItem('gamePrice')) : 10;
let marketing = localStorage.getItem('marketing') ? parseInt(localStorage.getItem('marketing')) : 1;

const cashEl = document.getElementById("cash");
const gamesEl = document.getElementById("games");
const devsEl = document.getElementById("devs");
const priceEl = document.getElementById("price");
const messageEl = document.getElementById("message");

function updateDisplay() {
  cashEl.textContent = Math.floor(cash);
  gamesEl.textContent = Math.floor(games);
  devsEl.textContent = devs;
  priceEl.textContent = gamePrice;
  saveProgress();
}

function saveProgress() {
  localStorage.setItem('cash', cash);
  localStorage.setItem('games', games);
  localStorage.setItem('devs', devs);
  localStorage.setItem('gamePrice', gamePrice);
  localStorage.setItem('marketing', marketing);
}

document.getElementById("developBtn").addEventListener("click", () => {
  games += 1;
  cash += gamePrice * marketing;
  updateDisplay();
});

document.getElementById("hireBtn").addEventListener("click", () => {
  if (cash >= 100) {
    devs++;
    cash -= 100;
    updateDisplay();
  } else {
    showMessage("Not enough cash to hire!");
  }
});

document.getElementById("upgradePriceBtn").addEventListener("click", () => {
  if (cash >= 200) {
    gamePrice += 5;
    cash -= 200;
    updateDisplay();
  } else {
    showMessage("Not enough cash to upgrade price!");
  }
});

document.getElementById("marketingBtn").addEventListener("click", () => {
  if (cash >= 500) {
    marketing += 1;
    cash -= 500;
    showMessage("Marketing boost active! Earnings increased!");
    updateDisplay();
  } else {
    showMessage("Not enough cash for marketing!");
  }
});

function showMessage(msg) {
  messageEl.textContent = msg;
  setTimeout(() => (messageEl.textContent = ""), 2000);
}

setInterval(() => {
  if (devs > 0) {
    games += devs;
    cash += devs * gamePrice * marketing * 0.5;
    updateDisplay();
  }
}, 1000);

updateDisplay();
