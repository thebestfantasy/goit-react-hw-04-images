import { useState } from 'react';
import {
  SearchFormButtonStyled,
  SearchFormInputStyled,
  SearchFormStyled,
  SearchbarHeaderStyled,
} from './SearchbarStyled';
import { FaSearch } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = e => {
    setSearchQuery(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.length > 2) {
      onSubmit(searchQuery);
    } else {
      Notify.warning('Enter more than 2 symbols, please');
    }
  };

  return (
    <>
      <SearchbarHeaderStyled>
        <SearchFormStyled onSubmit={handleSubmit}>
          <SearchFormButtonStyled type="submit" className="button">
            <FaSearch />
          </SearchFormButtonStyled>

          <SearchFormInputStyled
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleSearch}
            value={searchQuery}
          />
        </SearchFormStyled>
      </SearchbarHeaderStyled>
    </>
  );
};

export default Searchbar;
