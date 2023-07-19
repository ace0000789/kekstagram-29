import { openModal } from './modal.js';
import {createThumbnails} from './get-pictures.js';

// Глобальные переменные
const container = document.querySelector('.pictures');

const renderModal = (evt, pictures) => {
  const target = evt.target.closest('[data-id]');
  if (!target) {
    return;
  }
  const picture = pictures.find((item) => item.id === Number(target.dataset.id));
  openModal(picture);
};

/** Создание галереи */
const renderGallery = (data) => {
  container.addEventListener('click', (evt) => {
    renderModal(evt, data);
  });
  createThumbnails(data);
};

export { renderGallery };
