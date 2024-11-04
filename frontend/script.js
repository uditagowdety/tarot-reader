// List of tarot card names (sample data)
const tarotCards = [
    // Major Arcana
    "The Fool", "The Magician", "The High Priestess", "The Empress", 
    "The Emperor", "The Hierophant", "The Lovers", "The Chariot", 
    "Strength", "The Hermit", "Wheel of Fortune", "Justice", 
    "The Hanged Man", "Death", "Temperance", "The Devil", 
    "The Tower", "The Star", "The Moon", "The Sun", 
    "Judgement", "The World",

    // Minor Arcana - Wands
    "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", 
    "Five of Wands", "Six of Wands", "Seven of Wands", "Eight of Wands", 
    "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", 
    "Queen of Wands", "King of Wands",

    // Minor Arcana - Cups
    "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", 
    "Five of Cups", "Six of Cups", "Seven of Cups", "Eight of Cups", 
    "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", 
    "Queen of Cups", "King of Cups",

    // Minor Arcana - Swords
    "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", 
    "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", 
    "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords", 
    "Queen of Swords", "King of Swords",

    // Minor Arcana - Pentacles
    "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", 
    "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", 
    "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", 
    "Queen of Pentacles", "King of Pentacles"
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
