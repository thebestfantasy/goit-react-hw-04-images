import React from 'react';
import {
  ImageGalleryImageStyled,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.Styled';

export const ImageGalleryItem = ({ webImage, tags, onClick }) => {
  return (
    <ImageGalleryItemStyled className="gallery-item" onClick={onClick}>
      <ImageGalleryImageStyled src={webImage} alt={tags} />
    </ImageGalleryItemStyled>
  );
};
