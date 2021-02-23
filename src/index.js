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
  const formData = new FormData(event.target);
  const query = formData.get('search');
  helper.getImages(`https://api.unsplash.com/search/photos/?query=${query}`);
  event.preventDefault();

  const hist = [];
  if (window.localStorage.getItem('search') != null) {
    hist.push(...JSON.parse(window.localStorage.getItem('search')));
  }
  if (!hist.some(e => e === query)) {
    hist.push(query);
  }
  window.localStorage.setItem('search', JSON.stringify(hist));
});

focus.addEventListener('focus', () => {
  document.getElementById('datalist').innerHTML = '';
  if (window.localStorage.getItem('search') != null) {
    const searchArray = JSON.parse(window.localStorage.getItem('search'));
    searchArray.forEach(i => {
      const node = document.createElement('option');
      const val = document.createTextNode(i);
      node.appendChild(val);
      document.getElementById('datalist').appendChild(node);
    });
  }
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

