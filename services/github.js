const axios = require('axios');
require('dotenv').config();

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'troner14'; // Default to troner14 if not set
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Accept: 'application/vnd.github.v3+json',
        ...(GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {})
    }
});
/**
 * Fetches user profile data
 */
async function getUserProfile() {
    try {
        const response = await githubApi.get(`/users/${GITHUB_USERNAME}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error.message);
        return null; // Return null to handle gracefully in UI
    }
}

/**
 * Fetches user repositories, sorted by updated date
 */
async function getRepositories() {
    try {
        // Fetch public repos, sort by updated, limit to 10
        const response = await githubApi.get(`/users/${GITHUB_USERNAME}/repos`, {
            params: {
                sort: 'updated',
                direction: 'desc',
                per_page: 12
            }
        });
        return response.data.filter(repo => !repo.fork && repo.name !== 'portfolio'); // Filter out forks and self-repo
    } catch (error) {
        console.error('Error fetching repositories:', error.message);
        return [];
    }
}

module.exports = {
    getUserProfile,
    getRepositories,
    GITHUB_USERNAME
};
