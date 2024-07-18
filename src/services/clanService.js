import axios from "axios";
import { clanTag, token } from "../config";

axios.defaults.baseURL = "https://api.clashofclans.com/v1";
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const getClan = async () => {
    try {
        const response = await axios.get(`/clans/${encodeURIComponent(clanTag)}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching clan data:", error);
    }
};

export const getClanMembers = async (playerTag) => {
    try {
        const response = await axios.get(`/players/${encodeURIComponent('#' + playerTag)}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching player data:", error);
    }
}