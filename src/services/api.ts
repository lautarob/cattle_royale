import axios from 'axios';

const API_KEY = process.env.REACT_APP_KEY;

const PixabayAPI = axios.create({
  baseURL: 'https://pixabay.com/api',
});

PixabayAPI.interceptors.request.use((config) => {
  if(!config.params){
    config.params = {};
  }
  config.params.key = API_KEY;
  config.params.image_type = 'photo';
  config.params.pretty = true;
  return config;
}, function (error) {
  return Promise.reject(error);
});

export const getHits = async(q:string) => await PixabayAPI.get('/', {params: {q}});