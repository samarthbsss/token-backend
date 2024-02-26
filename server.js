const express = require('express');
const app = express();

// JSON data
const tokens = [
    {
        img: "http://example.com/img1.jpg",
        tokenName: "AlphaToken",
        symbol: "ALP",
        decimals: 18,
        marketcap: 1000000,
        chain: "Ethereum",
    },
    {
        img: "http://example.com/img2.jpg",
        tokenName: "BetaToken",
        symbol: "BET",
        decimals: 12,
        marketcap: 500000,
        chain: "Ethereum",
    },
    {
        img: "http://example.com/img3.jpg",
        tokenName: "GammaToken",
        symbol: "GAM",
        decimals: 8,
        marketcap: 2000000,
        chain: "Binance Smart Chain",
    },
    {
        img: "http://example.com/img4.jpg",
        tokenName: "DeltaToken",
        symbol: "DEL",
        decimals: 6,
        marketcap: 800000,
        chain: "Solana",
    },
    {
        img: "http://example.com/img5.jpg",
        tokenName: "EpsilonToken",
        symbol: "EPS",
        decimals: 10,
        marketcap: 1200000,
        chain: "Polygon",
    },
    {
        img: "http://example.com/img6.jpg",
        tokenName: "ZetaToken",
        symbol: "ZET",
        decimals: 18,
        marketcap: 300000,
        chain: "Ethereum",
    },
];

// Route to get all tokens
app.get('/tokens', (req, res) => {
    res.json(tokens);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
