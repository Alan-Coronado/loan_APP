import axios from "axios";

const client = axios.create({
    baseURL:'https://loan-api-coronado.herokuapp.com'
});


export default client;