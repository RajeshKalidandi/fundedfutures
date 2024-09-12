require('dotenv').config({ path: '.env.local' });
const axios = require('axios');
const puppeteer = require('puppeteer');
const RSSParser = require('rss-parser');
const { TwitterApi } = require('twitter-api-v2');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const GOOGLE_NEWS_API_KEY = process.env.GOOGLE_NEWS_API_KEY;
const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

const twitterClient = new TwitterApi(TWITTER_BEARER_TOKEN);
const rssParser = new RSSParser();

async function getGoogleNewsStartups() {
  const url = `https://newsapi.org/v2/everything?q=startup+funding&apiKey=${GOOGLE_NEWS_API_KEY}&language=en&sortBy=publishedAt`;
  try {
    const response = await axios.get(url);
    return response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt
    }));
  } catch (error) {
    console.error('Error fetching data from Google News API:', error);
    return [];
  }
}

// ... existing code for getTwitterStartups and getCrunchbaseStartups ...

async function scrapeCompanyJobs(browser, companyUrl, companyId) {
  // ... existing code ...

  // Insert job listings into the database
  for (const job of jobs) {
    const { error: jobError } = await supabase
      .from('jobs')
      .insert({
        company_id: companyId,
        title: job.title,
        description: job.description,
        location: job.location,
        application_url: job.applicationUrl,
        source_url: careerLink,
        posted_date: new Date().toISOString().split('T')[0]
      });

    if (jobError) {
      console.error('Error inserting job listing:', jobError);
    }
  }

  // ... existing code ...
}

async function main() {
  const browser = await puppeteer.launch({ headless: "new" });
  try {
    // ... existing code ...
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await browser.close();
  }
}

main();