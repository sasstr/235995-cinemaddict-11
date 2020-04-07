'use strict';

const CardsAmount = {
  FILMS: 5,
  TOP_RATED: 2,
  MOST_COMMENTED: 2,
};

/**
 * Функция отрисовывает шаблон profile
 * @return {string} Шаблон profile
 */
const createUserRankTemplate = () => {
  return (`
  <section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img  class="profile__avatar"
          src="images/bitmap@2x.png"
          alt="Avatar"
          width="35"
          height="35">
  </section>
  `.trim());
};

/**
 * Функция отрисовывает шаблон меню
 * @return {string} Шаблон меню
 */
const createMenuTemplate = () => {
  return (`
  <nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>
  `.trim());
};

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

/**
 * Функция отрисовывает шаблон меню сортировки
 * @return {string} Шаблон меню сортировки
 */
const createFilmCardTemplate = () => {
  return (`
  <article class="film-card">
      <h3 class="film-card__title">Popeye the Sailor Meets Sindbad the Sailor</h3>
      <p class="film-card__rating">6.3</p>
      <p class="film-card__info">
        <span class="film-card__year">1936</span>
        <span class="film-card__duration">16m</span>
        <span class="film-card__genre">Cartoon</span>
      </p>
      <img src="./images/posters/popeye-meets-sinbad.png" alt="" class="film-card__poster">
      <p class="film-card__description">In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…</p>
      <a class="film-card__comments">0 comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
      </form>
    </article>
  `.trim());
};

/**
 * Функция отрисовывает шаблон фильмов
 * @return {string} Шаблон фильмов
 */
const createFilmsTemplate = () => {
  return (`
  <section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

      <div class="films-list__container">

      </div>
    </section>
  `.trim());
};

/**
 * Функция отрисовывает шаблон лучших фильмов
 * @return {string} Шаблон лучших фильмов
 */
const createTopRatedTemplate = () => {
  return (`
  <section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>

      <div class="films-list__container">

      </div>
    </section>
  `.trim());
};

/**
 * Функция отрисовывает шаблон фильмов с наибольшем кол-ом комментариев
 * @return {string} Шаблон фильмов с наибольшем кол-ом комментариев
 */
const createMostCommentedTemplate = () => {
  return (`
  <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>

      <div class="films-list__container">

      </div>
    </section>
  `.trim());
};

const createShowMoreBtnTemplate = () => {
  return (`<button class="films-list__show-more">Show more</button>`.trim());
};

/**
 * Функция отрисует карточку фильма
 * @param {node} conteiner контейнер куда надо добавить разметку
 * @param {number} amount кол-во карточек которые надо отрисовать
 * @param {string} card разметка карточки
 * @return {void}
 */
const renderCards = (conteiner, amount, card = createFilmCardTemplate()) => {
  for (let i = 0; i < amount; i++) {
    render(conteiner, card);
  }
};

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

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

render(header, createUserRankTemplate());
render(main, createMenuTemplate());
render(main, createSortTemplate());


render(main, createFilmsTemplate());
render(main, createTopRatedTemplate());
render(main, createMostCommentedTemplate());

const films = document.querySelector(`.films`);
const filmsListContainer = document.querySelector(`.films .films-list__container`);
const filmsListExtraContainers = document.querySelectorAll(`.films-list--extra .films-list__container`);

renderCards(filmsListContainer, CardsAmount.FILMS);

render(films, createShowMoreBtnTemplate());

renderCards(filmsListExtraContainers[0], CardsAmount.TOP_RATED);
renderCards(filmsListExtraContainers[1], CardsAmount.MOST_COMMENTED);
