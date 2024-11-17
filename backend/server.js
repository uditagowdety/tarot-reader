require('dotenv').config(); // To load .env variables
const express = require('express');
const fetch = require('node-fetch'); // For making API calls
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Endpoint to handle tarot interpretation requests
app.post('/interpret', async (req, res) => {
    const { cards } = req.body;

    if (!cards) {
        return res.status(400).json({ error: "No cards provided" });
    }

    try {
        const response = await fetch('https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: `You are an expert in tarot reading. The selected tarot cards are: ${cards}. Please provide a concise interpretation of these cards.`
            })
        });

        const data = await response.json();
        if (data && data[0] && data[0].generated_text) {
            res.json({ interpretation: data[0].generated_text });
        } else {
            res.status(500).json({ error: "Invalid response from API", details: data });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error communicating with Hugging Face API" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
