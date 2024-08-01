// src/services/clanService.js
import { clanTag, token } from "../config";

const baseUrl = 'https://api.clashofclans.com/v1';
const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
};

export const getClan = async () => {
    try {
        const response = await fetch(`${baseUrl}/clans/${encodeURIComponent(clanTag)}`, {
            method: 'GET',
            headers: headers,
            credentials: false,
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching clan data:", error);
    }
};

export const getClanMembers = async (playerTag) => {
    try {
        const response = await fetch(`${baseUrl}/players/${encodeURIComponent('#' + playerTag)}`, {
            method: 'GET',
            headers: headers,
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching player data:", error);
    }
};

export const fetchFaviconUrl = async () => {
    try {
        const response = await fetch(`${baseUrl}/clans/${encodeURIComponent(clanTag)}`, {
            method: 'GET',
            headers: headers,
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data.badgeUrls.small;
    } catch (error) {
        console.error("Error fetching favicon URL:", error);
    }
};
