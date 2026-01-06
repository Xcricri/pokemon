import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "https://pokeapi.co/api/v2/";

export const api =  axios.create({
    baseURL: baseURL.endsWith("/") ? baseURL : baseURL + "/",
    headers: {
        "Content-type": "application/json",
    },
});