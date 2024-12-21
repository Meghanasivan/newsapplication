
const express = require("express");
const axios = require("axios");

const router = express.Router();
const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Fetch News
router.get("/", async (req, res) => {
  const { category } = req.query;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching news", error: error.message });
  }
});

module.exports = router;
