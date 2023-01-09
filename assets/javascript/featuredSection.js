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
const heading = '<h2>Featured Performers</h2><hr class="hr1" />';
const divContainer = document.createElement('div');
const ul = document.createElement('ul');

divContainer.classList.add('container');
ul.classList.add('featured_performers', 'row');

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
  ul.appendChild(li);
}
section.innerHTML = heading;
divContainer.appendChild(ul);
section.appendChild(divContainer);
