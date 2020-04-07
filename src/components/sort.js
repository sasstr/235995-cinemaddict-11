
/**
 * Функция отрисовывает шаблон меню сортировки
 * @return {string} Шаблон меню сортировки
 */
const createSortTemplate = () => {
  return (`
  <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>
  `.trim());
};

export {createSortTemplate};
