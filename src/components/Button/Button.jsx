import React from 'react';
import { LoadButton, LoadContainer } from './Button.Styled';

const Button = ({ onClick }) => {
  return (
    <LoadContainer>
      <LoadButton type="button" onClick={onClick}>
        Load More
      </LoadButton>
    </LoadContainer>
  );
};

export default Button;
