import axios from "axios";

axios.defaults.baseURL = "https://192.168.0.18:5000";

const responseBody = (response) => response.data;

const requests = {
   get: (url) => axios.get(url).then(responseBody),
   post: (url, body) => axios.post(url, body).then(responseBody),
   put: (url, body) => axios.put(url, body).then(responseBody),
   del: (url) => axios.delete(url).then(responseBody)
};

const Test = {
   testRequest: () => requests.get('/api/test')
}

export default {
   Test
}