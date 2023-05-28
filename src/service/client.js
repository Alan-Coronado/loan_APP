import axios from "axios";

const client = axios.create({
    baseURL:'https://ac-api-loan.onrender.com/'
});


export default client;