import axios from 'axios';

const apiKey = '37970704-9a867c05051ad7b7bfc1fb55a';

const fetchImages = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export { fetchImages };
