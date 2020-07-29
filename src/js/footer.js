import { createElement, getAll, get} from "./utilities"
import homeIcon from '../../img/home.png'
import starIcon from '../../img/star.png'
import editIcon from '../../img/edit.png'
import womanIcon from '../../img/woman.png'

export function footer (currentPage, changePage) {
  const {el} = createElement({type: 'footer'})
  el.innerHTML = `
    <img
      class="footer__icon"
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
  const icons = getAll('.footer__icon', el)
  
  setActiveFooterIcon(currentPage, icons)

  icons.forEach((button) => {
    button.addEventListener('click', () => {
      changePage(button.dataset.js)
    })
  })
}

function setActiveFooterIcon(activeClass, buttons) {
  buttons.forEach((button) => {
    button.classList.toggle(
      'footer__icon--active',
      button.dataset.js === activeClass
    )
  })
}