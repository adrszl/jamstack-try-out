const axios = require("axios");
require('dotenv').config();
const NEWS_API_KEY = process.env.API_KEY;

module.exports = async function () {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}&pageSize=5`
    );
    console.log(response);
    console.log(response.data.articles);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
