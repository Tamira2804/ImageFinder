import React from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onItemClick }) => {
  return (
    <GalleryItem onClick={onItemClick}>
      <GalleryItemImage src={image.webformatURL} alt="" />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
