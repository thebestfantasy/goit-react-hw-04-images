import React from 'react';
import { Vortex } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.Styled';

const Loader = () => {
  return (
    <LoaderStyled>
      <Vortex
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
      />
    </LoaderStyled>
  );
};

export default Loader;
