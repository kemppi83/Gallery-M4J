import {
  forEach
} from 'methods'
import example from './images/design.jpg'
import exampleSvg from './images/Freesample.svg'
import logo from './images/m4j.jpg'
import './styles/main';

class Game {
  name = 'Violin Charades'
}
const myGame = new Game()
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

const app = document.querySelector('#root')
const gallery = document.querySelector('.gallery')
const buttons = document.querySelector('.buttons')

app.append(heading, p)

const form = document.getElementById('form');
const focus = document.querySelector('input[type="text"]');

const getImages = query => {
  gallery.textContent = '';
  buttons.textContent = '';
  fetch(query, {
    method: 'get',
    headers: new Headers({
      'Authorization': 'Client-ID 7jyECUn10SXnlPckNM81J2cgCIo_X6_t1YLkJ1yfoH4',
    }),
  }).then(res => {
    const links = res.headers.get('Link').split(',');
    // console.log(links[0], '======0');
    links.forEach(link => {
    //   console.log(link)
      if (/last/.test(link)) {
        let lastButton = document.createElement('button');
        lastButton.classList.add('last-button');
        lastButton.innerHTML = 'Last';
        lastButton.value = link.match(/(?<=\<)(.*)(?=\>)/)[0];
        buttons.append(lastButton);
        const lastButtonSelector = document.querySelector('.last-button')
        lastButtonSelector.addEventListener('click',  event => {
          console.log(lastButtonSelector.value);
          getImages(lastButtonSelector.value);
        });
      }

      if (/next/.test(link)) {
        let nextButton = document.createElement('button');
        nextButton.classList.add('next-button');
        nextButton.innerHTML = 'Next';
        nextButton.value = link.match(/(?<=\<)(.*)(?=\>)/)[0];
        buttons.append(nextButton);
        const nextButtonSelector = document.querySelector('.next-button')
        nextButtonSelector.addEventListener('click',  event => {
          console.log(nextButtonSelector.value);
          getImages(nextButtonSelector.value);
        });
      }

      if (/prev/.test(link)) {
        let prevButton = document.createElement('button');
        prevButton.classList.add('prev-button');
        prevButton.innerHTML = 'Previous';
        prevButton.value = link.match(/(?<=\<)(.*)(?=\>)/)[0];
        buttons.append(prevButton);
        const prevButtonSelector = document.querySelector('.prev-button')
        prevButtonSelector.addEventListener('click',  event => {
          console.log(prevButtonSelector.value);
          getImages(prevButtonSelector.value);
        });
      }

      if (/first/.test(link)) {
        let firstButton = document.createElement('button');
        firstButton.classList.add('first-button');
        firstButton.innerHTML = 'First';
        firstButton.value = link.match(/(?<=\<)(.*)(?=\>)/)[0];
        buttons.append(firstButton);
        const firstButtonSelector = document.querySelector('.first-button')
        firstButtonSelector.addEventListener('click',  event => {
          console.log(firstButtonSelector.value);
          getImages(firstButtonSelector.value);
        });
      }

    })
    return res.json();
  }).then(data => {
    data.results.forEach(item => {
 
      let imageElement = document.createElement('img');
      imageElement.src = item.urls.thumb;
      gallery.append(imageElement);
    })
  });
};

form.addEventListener('submit', event => {
  const formData = new FormData(event.target);
  // console.log(typeof formData.get('search'));
  const query = formData.get('search');
  getImages(`https://api.unsplash.com/search/photos/?query=${query}`);
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

focus.addEventListener('focus', (event) => {
  // console.log(window.localStorage.getItem('search'), window.localStorage.getItem('search') == null, '&&&&&');
  document.getElementById('datalist').innerHTML = '';
  if (window.localStorage.getItem('search') != null) {
    const searchArray = JSON.parse(window.localStorage.getItem('search'));
    searchArray.forEach(i => {
      const node = document.createElement("option");
      const val = document.createTextNode(i);
      node.appendChild(val);
      document.getElementById("datalist").appendChild(node);
    });
  }
});
