import React, { useEffect, useState } from 'react';
import Searchbar from '../Searchbar';
import Loader from 'components/Loader/Loader';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import { fetchImages } from '../../services/HttpService';

import { GlobalStyle } from '../GlobalStyle';
import { Layout } from './App.styled';
import './App.styled.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImagesData = (query, page) => {
      fetchImages(query, page)
        .then(response => {
          if (response.data.hits.length === 0) {
            toast.error(`Sorry, no image for "${query}" request!`, {
              position: toast.POSITION.TOP_RIGHT,
            });
            return;
          }
          setImages(prevImages => [...prevImages, ...response.data.hits]);
          setShowBtn(page < Math.ceil(response.data.totalHits / 12));
        })
        .catch(error => {
          console.error('Error fetching images:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchImagesData(query, page);
  }, [query, page]);

  const handleSearchSubmit = submittedQuery => {
    setQuery(submittedQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onItemClick={handleImageClick} />
      {loading && <Loader />}
      {showBtn && !loading && (
        <Button onClick={handleLoadMore} label="Load more" />
      )}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
}
