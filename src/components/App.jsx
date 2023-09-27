import React, { useEffect, useState } from 'react';
import { getPhotosBySearch } from './API/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { AppStyled } from './App.Styled';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const apiQuery = async () => {
      try {
        setIsLoading(true);
        const data = await getPhotosBySearch(query, page);

        setImages(prevImages => [...prevImages, ...data.hits]);
        setLoadMore(page < Math.ceil(data.totalHits / 12));

        Notify.success(`Total: ${data.totalHits}`);
      } catch (error) {
        setError(error.message);
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (query !== '') apiQuery();
  }, [query, page]);

  const increasePage = () => {
    setPage(prev => prev + 1);
  };

  const handleSubmit = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
  };

  return (
    <AppStyled>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && loadMore && <Button onClick={increasePage} />}
    </AppStyled>
  );
};

export default App;
