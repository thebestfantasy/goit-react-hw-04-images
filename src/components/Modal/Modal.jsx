import { ModalStyled, Overlay } from './Modal.Styled';
import { useEffect } from 'react';

const Modal = ({ imgURL, alt, closeModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleKeyDown = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) closeModal();
  };

  return (
    <Overlay onClick={handleBackDropClick}>
      <ModalStyled>
        <img src={imgURL} alt={alt} />
      </ModalStyled>
    </Overlay>
  );
};

export default Modal;
