import {createElement} from '../../../utilities'

function bookmark (index, bookmarked, invertBookmark) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  
  el.setAttribute('class', 'card__bookmark')
  el.setAttribute('data-js', 'bookmark__button')
  el.setAttribute('viewBox', '0 0 512.019 512.019')
  el.setAttribute('style', 'enable-background:new 0 0 512.019 512.019;')
  el.setAttribute('x', '0px')
  el.setAttribute('y', '0px')
  el.setAttribute('version', '1.1')
  el.setAttribute('id', 'Capa_1')
  el.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  el.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
  el.setAttribute('xml:space', 'preserve')

  el.innerHTML = `<path d="M362.676,0H149.343C119.888,0,96.01,23.878,96.01,53.333v448
  c-0.011,5.891,4.757,10.675,10.648,10.686c2.84,0.005,5.565-1.123,7.571-3.134L256.01,367.083l141.781,141.781
  c4.16,4.171,10.914,4.179,15.085,0.019c2.006-2.001,3.133-4.717,3.134-7.55v-448C416.01,23.878,392.131,0,362.676,0z"/>`
  
  if (bookmarked === true) {
    el.classList.add('card__bookmark--active')
  } 
      
  el.addEventListener('click', () => {
    invertBookmark(index)
    el.classList.toggle('card__bookmark--active')
  })
  
  return el
}

export default bookmark

{/* <svg class="card__bookmark" data-js="bookmark__button" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 512.019 512.019" style="enable-background:new 0 0 512.019 512.019;" xml:space="preserve">
    <path d="M362.676,0H149.343C119.888,0,96.01,23.878,96.01,53.333v448
    c-0.011,5.891,4.757,10.675,10.648,10.686c2.84,0.005,5.565-1.123,7.571-3.134L256.01,367.083l141.781,141.781
    c4.16,4.171,10.914,4.179,15.085,0.019c2.006-2.001,3.133-4.717,3.134-7.55v-448C416.01,23.878,392.131,0,362.676,0z"/>
    </svg> */}