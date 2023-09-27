import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import { ImageGalleryStyled } from './imageGallery.Styled';

import React from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <ImageGalleryStyled>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webImage={image.webformatURL}
            tags={image.tags}
            onClick={() => openModal(image)}
          ></ImageGalleryItem>
        ))}
      </ImageGalleryStyled>
      {selectedImage && (
        <Modal
          imgURL={selectedImage.largeImageURL}
          alt={selectedImage.tags}
          closeModal={closeModal}
        >
          children
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;
