import {
  forEach
} from 'methods'
import example from './images/design.jpg'
import exampleSvg from './images/Freesample.svg'
import logo from './images/m4j.jpg'
import './styles/main.scss'

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

fetch('https://api.unsplash.com/search/photos/?query=coffee', {
    method: 'get',
    headers: new Headers({
      'Authorization': 'Client-ID 7jyECUn10SXnlPckNM81J2cgCIo_X6_t1YLkJ1yfoH4',
    }),
  }).then(res => res.json())
  .then(data => {
    data.results.forEach(i => {
      let divContainer = document.createElement('div');
      let imageElement = document.createElement('img');
      imageElement.classList.add("gallery-image");

      imageElement.src = i.urls.thumb;
      divContainer.classList.add("gallery-item");
      gallery.append(divContainer);
      divContainer.append(imageElement);
    })

  })
