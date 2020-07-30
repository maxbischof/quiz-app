import { header } from './header'
import { footer } from './footer'
import { questions } from './questions'
import { bookmarks } from './bookmarks'
import { form } from './form'

const cards = [
  {
    question: "What's the biggest animal in the world?",
    answer: 'The blue whale',
    tags: ['animals', 'nature', 'world record'],
  },
  {
    question: 'Which country is brie cheese originally from?',
    answer: 'France',
    tags: ['food', 'culture'],
  },
]

let currentPage = 'questions'

header(currentPage)
questions(cards)
footer(currentPage, changePage)

function changePage(pageName){
  document.body.innerHTML = ''
  header(pageName)
  if(pageName === 'questions') {
    questions(cards, invertBookmark)
  } else if(pageName === 'bookmarks') {
    bookmarks(cards, invertBookmark)
  }
  else if(pageName === 'create') {
    form(saveCard)
  }
  footer(pageName, changePage)
}

export function saveCard (question, answer, tags) {
  cards.push({question, answer, tags})
}

export function getCards () {
  return cards
}

function invertBookmark (index) {
  cards[index].bookmark == !cards[index].bookmark
}