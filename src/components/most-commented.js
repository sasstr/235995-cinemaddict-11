
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

export {createMostCommentedTemplate};
