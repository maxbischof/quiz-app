import {createElement} from './utilities'
import profileIMG from '../../img/max_rec.jpg'

function profile () {
  const {el} = createElement({type: 'main'})
  el.innerHTML = /*html*/`<div class="card pad-20">
  <img class="profile__img--circle" src=${profileIMG} alt="max" />
  <h2>Max</h2>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur a
    sunt praesentium ea sit soluta corporis, facere tenetur velit aut
    necessitatibus ullam quasi corrupti vitae ratione quis qui? Vitae,
    earum?
  </p>

  <h2>Skills</h2>
  <div class="mar-bot-30">
    <span class="card__tag pad-5">Tag1</span>
    <span class="card__tag pad-5">Tag2</span>
    <span class="card__tag pad-5">Tag3</span>
  </div>

  <button class="button bg-salmon">Log out</button>
</div>`
}

export default profile 