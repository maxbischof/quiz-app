import { createElement } from "./utilities"
import homeIcon from '../../img/home.png'
import starIcon from '../../img/star.png'
import editIcon from '../../img/edit.png'
import womanIcon from '../../img/woman.png'

export function footer (page, changePage) {
  const {el} = createElement({type: 'footer'})
  el.innerHTML = `
    <img
      class="footer__icon footer__icon--active"
      src=${homeIcon}
      alt="home"
      data-js="questions"
    />
    <img
      class="footer__icon"
      src=${starIcon}
      alt="bookmarks"
      data-js="bookmarks"
    />
    <img
      class="footer__icon"
      src=${editIcon}
      alt="create_question"
      data-js="create"
    />
    <img
      class="footer__icon"
      src=${womanIcon}
      alt="profil"
      data-js="profile"
    />
  `

  el.addEventListener('click', event => {
    changePage(event.target.dataset.js)
  }) 
}