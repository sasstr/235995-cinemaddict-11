import {render, renderCards, CardsAmount} from './components/utils';
import {createUserRankTemplate} from './components/user-rank';
import {createMenuTemplate} from './components/menu';
import {createSortTemplate} from './components/sort';
import {createFilmCardTemplate} from './components/film-card';
import {createFilmsContainerTemplate} from './components/films-container';
import {createTopRatedTemplate} from './components/top-rated';
import {createMostCommentedTemplate} from './components/most-commented';
import {createShowMoreBtnTemplate} from './components/show-more-button';

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

render(header, createUserRankTemplate());
render(main, createMenuTemplate());
render(main, createSortTemplate());


render(main, createFilmsContainerTemplate());
render(main, createTopRatedTemplate());
render(main, createMostCommentedTemplate());

const films = document.querySelector(`.films`);
const filmsListContainer = document.querySelector(`.films .films-list__container`);
const filmsListExtraContainers = document.querySelectorAll(`.films-list--extra .films-list__container`);

renderCards(filmsListContainer, CardsAmount.FILMS, createFilmCardTemplate());
render(films, createShowMoreBtnTemplate());

renderCards(filmsListExtraContainers[0], CardsAmount.TOP_RATED, createFilmCardTemplate());
renderCards(filmsListExtraContainers[1], CardsAmount.MOST_COMMENTED, createFilmCardTemplate());
