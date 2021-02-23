import {
    forEach
  } from 'methods'
  import example from './images/design.jpg'
  import exampleSvg from './images/Freesample.svg'
  import logo from './images/m4j.jpg'
  import './styles/main';
  
  // Create a class property without a constructor
  class Game {
    name = 'Violin Charades'
  }
  const myGame = new Game()
  // Create paragraph node
  const p = document.createElement('p')
  p.textContent = `I like ${myGame.name}.`
  
  // Create heading node
  const heading = document.createElement('h1')
  heading.textContent = 'Interesting!'
  
  // Append SVG and heading nodes to the DOM
  const app = document.querySelector('#root')
  const gallery = document.querySelector('.gallery')
  
  app.append(heading, p)
  
  const form = document.getElementById('form');
  const focus = document.querySelector('input[type="text"]');
  
  const getImages = query => {
    gallery.textContent = '';
    fetch(`https://api.unsplash.com/search/photos/?query=${query}`, {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Client-ID 7jyECUn10SXnlPckNM81J2cgCIo_X6_t1YLkJ1yfoH4',
      }),
      }).then(res => res.json())
      .then(data => {
        data.results.forEach(item => {
          let imageElement = document.createElement('img');
          imageElement.src = item.urls.thumb;
          gallery.append(imageElement);
        })
    });
  };
  
  
  form.addEventListener('submit', event => {
    const formData = new FormData(event.target);
    console.log(typeof formData.get('search'));
    const query = formData.get('search');
    getImages(query);
    event.preventDefault();
    
    const hist = [];
    if (window.localStorage.getItem('search') != null) {
      hist.push( ...JSON.parse(window.localStorage.getItem('search')));
    }
    if(!hist.some(e => e === query)) {
      hist.push(query);
    }
    window.localStorage.setItem('search', JSON.stringify(hist));
  });
  
  focus.addEventListener('focus', (event) => {
    console.log(window.localStorage.getItem('search'), window.localStorage.getItem('search') == null, '&&&&&');
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

