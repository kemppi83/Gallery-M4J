const gallery = document.querySelector('.gallery');

const firstButton = document.querySelector('.first-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const lastButton = document.querySelector('.last-button');

const disableButtons = () => {
  lastButton.disabled = true;
  nextButton.disabled = true;
  prevButton.disabled = true;
  firstButton.disabled = true;
};

const populateButton = links => {
  disableButtons();
  links.forEach(link => {
    if (/last/.test(link)) {
      const bLink = link.match(/(?<=<)(.*)(?=>)/)[0];
      lastButton.value = bLink;
      lastButton.disabled = false;
    }

    if (/next/.test(link)) {
      const bLink = link.match(/(?<=<)(.*)(?=>)/)[0];
      nextButton.value = bLink;
      nextButton.disabled = false;
    }

    if (/prev/.test(link)) {
      const bLink = link.match(/(?<=<)(.*)(?=>)/)[0];
      prevButton.value = bLink;
      prevButton.disabled = false;
    }

    if (/first/.test(link)) {
      const bLink = link.match(/(?<=<)(.*)(?=>)/)[0];
      firstButton.value = bLink;
      firstButton.disabled = false;
    }
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
    populateButton(links);
    return res.json();
  }).then(data => {
    data.results.forEach(item => {
      const imageElement = document.createElement('img');
      imageElement.src = item.urls.thumb;
      gallery.append(imageElement);
    });
  });
};

module.exports.getImages = getImages;
module.exports.populateButton = populateButton;
module.exports.disableButtons = disableButtons;

