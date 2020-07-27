import {addCards} from './card'
import {get} from './utilities'

const cards = [
  {
    question: 'What\'s the biggest animal in the world?',
    answer: 'The blue whale',
    tags: ['animals', 'nature', 'world record']
  },
  {
    question: 'Which country is brie cheese originally from?',
    answer: 'France',
    tags: ['food', 'culture']
  }
]

function bookmarks () {
  const pageBookmarks = get('.page__bookmarks')
  addCards(cards, pageBookmarks)
}

export default bookmarks