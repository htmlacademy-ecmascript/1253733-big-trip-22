import AbstractView from '../framework/view/abstract-view';

function createLogoTemplate() {
  return '<img class="page-header__logo" src="img/logo.png" width="42" height="42" alt="Trip logo">';
}

export default class LogoView extends AbstractView {
  get template() {
    return createLogoTemplate();
  }
}
