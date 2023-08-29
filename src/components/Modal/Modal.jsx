import React, { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export default function Modal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape' || event.target === event.currentTarget) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleClose}>
      <ModalWindow>
        <img src={image} alt="" />
      </ModalWindow>
    </Overlay>
  );
}
