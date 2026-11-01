import axios from "axios";

// -----------------
// Base da API - usa o proxy do Vite para evitar CORS durante o desenvolvimento.
// -----------------
const api = axios.create({
    baseURL: '/api'
});

export default api;