import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/bellakhalrania/book-list/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    getEvents () {
        return apiClient.get('/books');
    },
    getusers () {
        return apiClient.get('/users');
    },
    getarrivels () {
        return apiClient.get('/arrivals');
    },
    
    getEvent(id) {
        return apiClient.get('/books/'+ id)
    },
    getarrivals(id) {
        return apiClient.get('/arrivals/'+ id)
    }
}