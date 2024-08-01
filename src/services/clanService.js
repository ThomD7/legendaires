// src/services/clanService.js
import axios from "axios";
import { clanTag, token } from "../config";

const baseUrl = 'https://api.clashofclans.com/v1';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.withCredentials = false;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// Function to test API accessibility
const testApiAccess = async (url) => {
    const testURL = url;
    const myInit = {
        method: 'HEAD',
        mode: 'no-cors',
    };

    const myRequest = new Request(testURL, myInit);

    try {
        const response = await fetch(myRequest);
        console.log(response);
        return true;  // API is accessible
    } catch (error) {
        console.error('Error testing API access:', error);
        return false;  // API is not accessible
    }
};

export const getClan = async () => {
    const isAccessible = await testApiAccess(`${baseUrl}/clans/${encodeURIComponent(clanTag)}`);
    if (!isAccessible) {
        console.error('API is not accessible');
        return;
    }

    try {
        const response = await axios.get(`${baseUrl}/clans/${encodeURIComponent(clanTag)}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching clan data:", error);
    }
};

export const getClanMembers = async (playerTag) => {
    const isAccessible = await testApiAccess(`${baseUrl}/players/${encodeURIComponent('#' + playerTag)}`);
    if (!isAccessible) {
        console.error('API is not accessible');
        return;
    }

    try {
        const response = await axios.get(`${baseUrl}/players/${encodeURIComponent('#' + playerTag)}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching player data:", error);
    }
}

export const fetchFaviconUrl = async () => {
    const isAccessible = await testApiAccess(`${baseUrl}/clans/${encodeURIComponent(clanTag)}`);
    if (!isAccessible) {
        console.error('API is not accessible');
        return;
    }

    try {
        const response = await axios.get(`${baseUrl}/clans/${encodeURIComponent(clanTag)}`);
        return response.data.badgeUrls.small;
    } catch (error) {
        console.error("Error fetching favicon URL:", error);
    }
};
