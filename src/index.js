import './styles/main';
import './helper';

const helper = require('./helper');

const form = document.getElementById('form');
const focus = document.querySelector('input[type="text"]');
const firstButton = document.querySelector('.first-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const lastButton = document.querySelector('.last-button');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const search = formData.get('search');
  const url = `https://api.unsplash.com/search/photos/?query=${search}`;
  helper.getImages(url);
  helper.setHistory(window.localStorage, search);
});

focus.addEventListener('focus', () => {
  helper.setDatalist(window.localStorage);
});

firstButton.addEventListener('click', () => {
  helper.getImages(firstButton.value);
});

prevButton.addEventListener('click', () => {
  helper.getImages(prevButton.value);
});

nextButton.addEventListener('click', () => {
  helper.getImages(nextButton.value);
});

lastButton.addEventListener('click', () => {
  helper.getImages(lastButton.value);
});
