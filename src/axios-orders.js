import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-32c73.firebaseio.com/'
});

export default instance;