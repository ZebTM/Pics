import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3YCVNfzC4u28IxZ3txFOyU1pm9w3FdGicz4Nc0hIKBg'
    }
});


