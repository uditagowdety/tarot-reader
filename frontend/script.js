// List of tarot card names (sample data)
const tarotCards = [
    "The Fool", "The Magician", "The High Priestess", "The Empress", 
    "The Emperor", "The Hierophant", "The Lovers", "The Chariot",
    "Strength", "The Hermit", "Wheel of Fortune", "Justice", 
    "The Hanged Man", "Death", "Temperance", "The Devil",
    "The Tower", "The Star", "The Moon", "The Sun", 
    "Judgement", "The World"
];

// Function to pick 3 random tarot cards
function pickRandomCards() {
    const selectedCards = [];
    while (selectedCards.length < 3) {
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        const card = tarotCards[randomIndex];
        if (!selectedCards.includes(card)) {
            selectedCards.push(card);
        }
    }
    displayCards(selectedCards);
}

// Function to display the selected cards
function displayCards(cards) {
    const cardsDisplay = document.getElementById('cards-display');
    cardsDisplay.innerHTML = ''; // Clear previous cards
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = card;
        cardsDisplay.appendChild(cardElement);
    });
}

// Attach event listener to the button
document.getElementById('pick-cards').addEventListener('click', pickRandomCards);
