const gallery = document.querySelector('.gallery');

const disableButtons = buttons => {
  const changeButtons = { ...buttons };
  changeButtons.first.className = 'first-button disabled';
  changeButtons.first.value = '';
  changeButtons.prev.className = 'prev-button disabled';
  changeButtons.prev.value = '';
  changeButtons.next.className = 'next-button disabled';
  changeButtons.next.value = '';
  changeButtons.last.className = 'last-button disabled';
  changeButtons.last.value = '';
};

const createBoxes = () => {
  const flipBox = document.createElement('div');
  flipBox.className = 'flip-box';
  const flipBoxInner = document.createElement('div');
  flipBoxInner.className = 'flip-box-inner';
  const flipBoxFront = document.createElement('div');
  flipBoxFront.className = 'flip-box-front';
  const flipBoxBack = document.createElement('div');
  flipBoxBack.className = 'flip-box-back';

  flipBoxInner.append(flipBoxBack);
  flipBoxInner.append(flipBoxFront);
  flipBox.append(flipBoxInner);
  gallery.append(flipBox);

  return [flipBoxFront, flipBoxBack];
};

const populateButton = (links, buttons) => {
  disableButtons(buttons);
  links.forEach(link => {
    const rel = link.match(/(?<=rel=")(.*)(?=")/)[0];
    const button = buttons[rel];
    const url = link.match(/(?<=<)(.*)(?=>)/)[0];
    button.value = url;
    button.className = `${rel}-button button`;
  });
};

const getImages = url => {
  gallery.textContent = '';
  fetch(url, {
    method: 'get',
    headers: new Headers({
      Authorization: 'Client-ID 7jyECUn10SXnlPckNM81J2cgCIo_X6_t1YLkJ1yfoH4',
    }),
  }).then(res => {
    const links = res.headers.get('Link').split(',');
    const buttons = {
      first: document.querySelector('.first-button'),
      prev: document.querySelector('.prev-button'),
      next: document.querySelector('.next-button'),
      last: document.querySelector('.last-button'),
    };
    populateButton(links, buttons);
    return res.json();
  }).then(data => {
    data.results.forEach(item => {
      const [flipBoxFront, flipBoxBack] = createBoxes();

      const imageElement = document.createElement('img');
      imageElement.src = item.urls.small;
      imageElement.alt = item.alt_description;
      flipBoxFront.append(imageElement);

      const imageAuthor = document.createElement('a');
      imageAuthor.className = 'author';
      imageAuthor.innerHTML = `by ${item.user.name}`;
      imageAuthor.target = '_blank';
      imageAuthor.href = item.user.portfolio_url;

      const imageDescription = document.createElement('p');
      imageDescription.className = 'description';
      imageDescription.innerHTML = item.description;

      const imageDownload = document.createElement('a');
      imageDownload.target = '_blank';
      imageDownload.className = 'button download';
      imageDownload.href = item.links.download;
      imageDownload.innerHTML = 'Download';

      flipBoxBack.append(imageAuthor, imageDescription, imageDownload);
    });
  });
};

const setHistory = (storage, search) => {
  const hist = [];
  if (storage.getItem('search') != null) {
    hist.push(...JSON.parse(storage.getItem('search')));
  }
  if (!hist.some(e => e === search)) {
    hist.unshift(search);
  }
  storage.setItem('search', JSON.stringify(hist));
};

const setDatalist = storage => {
  document.getElementById('datalist').innerHTML = '';
  if (storage.getItem('search') != null) {
    const searchArray = JSON.parse(storage.getItem('search'));
    searchArray.forEach(i => {
      const node = document.createElement('option');
      const val = document.createTextNode(i);
      node.appendChild(val);
      document.getElementById('datalist').appendChild(node);
    });
  }
};

module.exports.getImages = getImages;
module.exports.populateButton = populateButton;
module.exports.disableButtons = disableButtons;
module.exports.setHistory = setHistory;
module.exports.setDatalist = setDatalist;
