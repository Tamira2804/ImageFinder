import React from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onItemClick }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onItemClick={() => onItemClick(image.largeImageURL)}
        />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;
