const featuredPerformers = [
  {
    artist: 'Protoje',
    highlight: 'Reggae singer from the future',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    image: 'protoje.jpg',
  },
  {
    artist: 'Sara Lugo',
    highlight: 'Germany\'s most famous reggae singer',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    image: 'saralugo.jpg',
  },
  {
    artist: 'Sevana',
    highlight: 'Jamaican Goodness',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    image: 'sevana.jpg',
  },
  {
    artist: 'Alborosie',
    highlight: 'Italian Reggae singer',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    image: 'alborosie.jpg',
  },
  {
    artist: 'Collie Buddz',
    highlight: 'Bermuda Triangle Reggae singer',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    image: 'collie.jpg',
  },
  {
    artist: 'Amber Mark',
    highlight: 'Experimental music performer',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    image: 'amber_mark.jpg',
  },
];

const section = document.querySelector('.featured_performers');
const heading = '<h2 class="featured_performers">Featured Performers</h2><hr class="hr1" />';
const divContainer = document.createElement('div');
const ul = document.createElement('ul');
const moreBtn = document.createElement('div');
const lessBtn = document.createElement('div');
const moreDiv = document.createElement('div');

divContainer.classList.add('container');
ul.classList.add('featured_performers', 'row');
moreBtn.classList.add('more', 'moreBtn');
moreBtn.innerHTML = '<p>MORE</p><img src="./assets/images/down.png" alt="down arrow" />';
lessBtn.innerHTML = '<p>LESS</p><img src="./assets/images/up.png" alt="up arrow" />';
moreDiv.classList.add('moreDiv', 'row', 'no_show');
lessBtn.classList.add('more', 'no_show');

for (let i = 0; i < featuredPerformers.length; i += 1) {
  const li = document.createElement('li');
  li.classList.add('col-sm-12', 'col-md-6');
  const divImg = `<div>
                    <img src="./assets/images/${featuredPerformers[i].image}" alt="${featuredPerformers[i].artist}" />
                  </div>`;
  const divContent = `<div>
                        <h3>${featuredPerformers[i].artist}</h3>
                        <p>${featuredPerformers[i].highlight}</p>
                        <hr class="hr1" />
                        <p>${featuredPerformers[i].description}</p>
                    </div>`;
  li.innerHTML = divImg + divContent;
  if (i === 2) {
    moreDiv.appendChild(li);
    ul.appendChild(moreBtn);
    ul.appendChild(moreDiv);
    ul.appendChild(lessBtn);
  } else if (i > 2) {
    moreDiv.appendChild(li);
  } else {
    ul.appendChild(li);
  }
}
section.innerHTML = heading;
divContainer.appendChild(ul);
section.appendChild(divContainer);

// Events
moreBtn.addEventListener('click', () => {
  moreDiv.classList.add('show');
  moreDiv.classList.remove('no_show');
  // moreDiv.classList.add('grow');
  lessBtn.classList.add('show');
  lessBtn.classList.remove('no_show');
  lessBtn.classList.add('moreBtn');
  moreBtn.classList.add('no_show');
  moreBtn.classList.remove('moreBtn');
  moreBtn.classList.remove('show');
  const screnHeigth = document.body.scrollHeight / 2 + 400;
  window.scrollTo(0, screnHeigth);
});

lessBtn.addEventListener('click', () => {
  moreDiv.classList.remove('show');
  moreDiv.classList.add('no_show');
  lessBtn.classList.remove('show');
  lessBtn.classList.add('no_show');
  lessBtn.classList.remove('moreBtn');
  moreBtn.classList.remove('no_show');
  moreBtn.classList.add('moreBtn');
  moreBtn.classList.add('show');
});
