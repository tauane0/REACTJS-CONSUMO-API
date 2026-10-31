import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080' // Define a URL base para as requisições da API
});

export default api;