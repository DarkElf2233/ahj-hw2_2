import addElements from './base';

function getElementsInArray() {
  const elements = [...document.querySelectorAll('.movie')];
  const res = [];

  for (const el of elements) {
    res.fill({
      id: el.dataset.id,
      title: el.dataset.title,
      imdb: el.dataset.imdb,
      year: el.dataset.year,
    });
  }
  return res;
}

function sortElements(elements, attr, sortReverse) {
  if (sortReverse) {
    return elements.sort((a, b) => a[attr] - b[attr]);
  }
  return elements.sort((a, b) => b[attr] - a[attr]);
}

setInterval(() => {
  const elements = getElementsInArray();
  const sortedElements = sortElements(elements, 'id', false);
  addElements(sortedElements);
}, 2000);
