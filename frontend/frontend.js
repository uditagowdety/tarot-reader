// List of Major Arcana cards with interpretations
const tarotCards = [
    // Major Arcana
    { name: "The Fool", interpretation: "New beginnings, spontaneity, a free spirit." },
    { name: "The Magician", interpretation: "Manifestation, resourcefulness, power, inspired action." },
    { name: "The High Priestess", interpretation: "Intuition, sacred knowledge, divine feminine, the subconscious mind." },
    { name: "The Empress", interpretation: "Femininity, beauty, nature, nurturing, abundance." },
    { name: "The Emperor", interpretation: "Authority, establishment, structure, a father figure." },
    { name: "The Hierophant", interpretation: "Spiritual wisdom, religious beliefs, conformity, tradition." },
    { name: "The Lovers", interpretation: "Love, harmony, partnerships, values alignment." },
    { name: "The Chariot", interpretation: "Control, willpower, success, action, determination." },
    { name: "Strength", interpretation: "Courage, persuasion, influence, compassion." },
    { name: "The Hermit", interpretation: "Soul-searching, introspection, being alone, inner guidance." },
    { name: "Wheel of Fortune", interpretation: "Good luck, karma, life cycles, destiny, a turning point." },
    { name: "Justice", interpretation: "Fairness, truth, cause and effect, law." },
    { name: "The Hanged Man", interpretation: "Pause, surrender, letting go, new perspectives." },
    { name: "Death", interpretation: "Endings, change, transformation, transition." },
    { name: "Temperance", interpretation: "Balance, moderation, patience, purpose." },
    { name: "The Devil", interpretation: "Shadow self, attachment, addiction, restriction." },
    { name: "The Tower", interpretation: "Sudden change, upheaval, chaos, revelation." },
    { name: "The Star", interpretation: "Hope, faith, purpose, renewal, spirituality." },
    { name: "The Moon", interpretation: "Illusion, fear, anxiety, subconscious, intuition." },
    { name: "The Sun", interpretation: "Positivity, fun, warmth, success, vitality." },
    { name: "Judgement", interpretation: "Judgement, rebirth, inner calling, absolution." },
    { name: "The World", interpretation: "Completion, integration, accomplishment, travel." },

    // Minor Arcana - Wands
    { name: "Ace of Wands", interpretation: "Inspiration, new opportunities, growth, potential." },
    { name: "Two of Wands", interpretation: "Future planning, progress, decisions, discovery." },
    { name: "Three of Wands", interpretation: "Expansion, foresight, overseas opportunities." },
    { name: "Four of Wands", interpretation: "Celebration, harmony, home, community." },
    { name: "Five of Wands", interpretation: "Conflict, competition, tension, diversity." },
    { name: "Six of Wands", interpretation: "Success, public recognition, progress, self-confidence." },
    { name: "Seven of Wands", interpretation: "Challenge, competition, protection, perseverance." },
    { name: "Eight of Wands", interpretation: "Movement, fast-paced change, action, alignment." },
    { name: "Nine of Wands", interpretation: "Resilience, courage, persistence, test of faith, boundaries." },
    { name: "Ten of Wands", interpretation: "Burden, extra responsibility, hard work, completion." },
    { name: "Page of Wands", interpretation: "Enthusiasm, exploration, discovery, free spirit." },
    { name: "Knight of Wands", interpretation: "Energy, passion, inspired action, adventure, impulsiveness." },
    { name: "Queen of Wands", interpretation: "Courage, confidence, independence, social butterfly." },
    { name: "King of Wands", interpretation: "Natural leader, vision, entrepreneur, honor." },

    // Minor Arcana - Cups
    { name: "Ace of Cups", interpretation: "Love, new relationships, compassion, creativity." },
    { name: "Two of Cups", interpretation: "Unified love, partnership, mutual attraction." },
    { name: "Three of Cups", interpretation: "Celebration, friendship, creativity, collaborations." },
    { name: "Four of Cups", interpretation: "Meditation, contemplation, apathy, reevaluation." },
    { name: "Five of Cups", interpretation: "Regret, failure, disappointment, pessimism." },
    { name: "Six of Cups", interpretation: "Revisiting the past, childhood memories, innocence, joy." },
    { name: "Seven of Cups", interpretation: "Opportunities, choices, illusion, wishful thinking." },
    { name: "Eight of Cups", interpretation: "Disappointment, abandonment, withdrawal, escapism." },
    { name: "Nine of Cups", interpretation: "Contentment, satisfaction, gratitude, wish come true." },
    { name: "Ten of Cups", interpretation: "Divine love, blissful relationships, harmony, alignment." },
    { name: "Page of Cups", interpretation: "Creative opportunities, intuitive messages, curiosity." },
    { name: "Knight of Cups", interpretation: "Romantic, charm, imagination, beauty." },
    { name: "Queen of Cups", interpretation: "Compassionate, caring, emotionally stable, intuitive." },
    { name: "King of Cups", interpretation: "Emotionally balanced, compassionate, diplomatic." },

    // Minor Arcana - Swords
    { name: "Ace of Swords", interpretation: "Breakthroughs, new ideas, mental clarity, success." },
    { name: "Two of Swords", interpretation: "Difficult decisions, weighing options, an impasse." },
    { name: "Three of Swords", interpretation: "Heartbreak, emotional pain, sorrow, grief, hurt." },
    { name: "Four of Swords", interpretation: "Rest, relaxation, meditation, contemplation, recovery." },
    { name: "Five of Swords", interpretation: "Conflict, disagreements, competition, defeat, winning at all costs." },
    { name: "Six of Swords", interpretation: "Transition, change, rite of passage, releasing baggage." },
    { name: "Seven of Swords", interpretation: "Betrayal, deception, getting away with something, stealth." },
    { name: "Eight of Swords", interpretation: "Negative thoughts, self-imposed restriction, victim mentality." },
    { name: "Nine of Swords", interpretation: "Anxiety, worry, fear, depression, nightmares." },
    { name: "Ten of Swords", interpretation: "Painful endings, deep wounds, betrayal, loss, crisis." },
    { name: "Page of Swords", interpretation: "New ideas, curiosity, thirst for knowledge, new ways of communicating." },
    { name: "Knight of Swords", interpretation: "Ambitious, action-oriented, driven to succeed, fast-thinking." },
    { name: "Queen of Swords", interpretation: "Independent, unbiased judgement, clear boundaries, direct communication." },
    { name: "King of Swords", interpretation: "Mental clarity, intellectual power, authority, truth." },

    // Minor Arcana - Pentacles
    { name: "Ace of Pentacles", interpretation: "A new financial or career opportunity, manifestation, abundance." },
    { name: "Two of Pentacles", interpretation: "Multiple priorities, time management, prioritization, adaptability." },
    { name: "Three of Pentacles", interpretation: "Teamwork, collaboration, learning, implementation." },
    { name: "Four of Pentacles", interpretation: "Saving money, security, conservatism, scarcity, control." },
    { name: "Five of Pentacles", interpretation: "Financial loss, poverty, lack mindset, isolation, worry." },
    { name: "Six of Pentacles", interpretation: "Giving, receiving, sharing wealth, generosity, charity." },
    { name: "Seven of Pentacles", interpretation: "Long-term view, sustainable results, perseverance, investment." },
    { name: "Eight of Pentacles", interpretation: "Apprenticeship, repetitive tasks, mastery, skill development." },
    { name: "Nine of Pentacles", interpretation: "Abundance, luxury, self-sufficiency, financial independence." },
    { name: "Ten of Pentacles", interpretation: "Wealth, financial security, family, long-term success, contribution." },
    { name: "Page of Pentacles", interpretation: "Manifestation, financial opportunity, skill development." },
    { name: "Knight of Pentacles", interpretation: "Hard work, productivity, routine, conservatism." },
    { name: "Queen of Pentacles", interpretation: "Nurturing, practical, providing financially, a working parent." },
    { name: "King of Pentacles", interpretation: "Wealth, business, leadership, security, discipline, abundance." }
];

// Function to pick 3 random cards
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
    fetchCardInterpretation(selectedCards); // Fetch interpretation from the backend
}

// Function to display the selected cards
function displayCards(cards) {
    const cardsDisplay = document.getElementById('cards-display');
    const interpretationDisplay = document.getElementById('interpretation');
    cardsDisplay.innerHTML = ''; // Clear previous cards
    interpretationDisplay.innerHTML = ''; // Clear previous interpretation

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.textContent = card.name;

        cardElement.addEventListener('click', () => {
            interpretationDisplay.textContent = `${card.name}: ${card.interpretation}`;
        });

        cardsDisplay.appendChild(cardElement);
    });
}

// Function to send the selected cards to the backend
async function fetchCardInterpretation(cards) {
    const cardNames = cards.map(card => card.name).join(", ");

    try {
        const response = await fetch('http://localhost:3000/interpret', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cards: cardNames })
        });

        const data = await response.json();
        if (data.interpretation) {
            const interpretationDisplay = document.getElementById('interpretation');
            interpretationDisplay.innerHTML = `Interpretation: ${data.interpretation}`;
        } else {
            console.error("Error: ", data);
        }
    } catch (error) {
        console.error("Error fetching interpretation:", error);
    }
}

// Attach event listener to the button
document.getElementById('pick-cards').addEventListener('click', pickRandomCards);