import axios from 'axios';

const axiosIntance = axios.create({
  baseURL: 'https://fundacionseenart.org/wp-json/wp/v2/posts'
});

export default axiosIntance;
