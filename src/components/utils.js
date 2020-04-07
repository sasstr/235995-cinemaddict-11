/**
 * Функция вставляет шаблон в контейнер
 * @param {node} container контейнер куда будет вставлен шаблон
 * @param {string} template разметка для вставки
 * @param {string} place место куда будет вставлен шаблон
 * @return {void}
 */
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

/**
 * Функция отрисует карточку фильма
 * @param {node} conteiner контейнер куда надо добавить разметку
 * @param {number} amount кол-во карточек которые надо отрисовать
 * @param {string} card разметка карточки
 * @return {void}
 */
const renderCards = (conteiner, amount, card) => {
  for (let i = 0; i < amount; i++) {
    render(conteiner, card);
  }
};

const CardsAmount = {
  FILMS: 5,
  TOP_RATED: 2,
  MOST_COMMENTED: 2,
};

export {
  render,
  renderCards,
  CardsAmount
};
