import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36982386-348bf5f111e16de042d4f4c47';
const SETTINGS = 'image_type=photo&orientation=horizontal&per_page=12';

export const getPhotosBySearch = async (query, page) => {
  const { data } = await axios(
    `?q=${query}&page=${page}&key=${KEY}&${SETTINGS}`
  );
  return data;
};
