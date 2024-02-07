export default function addMovies(elements) {
  const table = document.querySelector('.table');

  for (const el of elements) {
    table.insertAdjacentHTML('beforeEnd', `
      <tr class="movie" data-id="${el.id}" data-title="${el.title}" data-year="${el.year}" data-imdb="${el.imdb}">
        <td>#${el.id}</td>
        <td>${el.title}</td>
        <td>${el.year}</td>
        <td>${el.imdb}</td>
      </tr>
    `);
  }
}

addMovies(
  [
    {
      id: 26,
      title: 'Побег из Шоушенка',
      imdb: 9.30,
      year: 1994,
    },
    {
      id: 25,
      title: 'Крёстный отец',
      imdb: 9.20,
      year: 1972,
    },
    {
      id: 27,
      title: 'Крёстный отец 2',
      imdb: 9.00,
      year: 1974,
    },
    {
      id: 1047,
      title: 'Тёмный рыцарь',
      imdb: 9.00,
      year: 2008,
    },
    {
      id: 223,
      title: 'Криминальное чтиво',
      imdb: 8.90,
      year: 1994,
    },
  ],
);
