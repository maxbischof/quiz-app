import { header } from './header'
import { footer } from './footer'

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
//main()
footer(currentPage, changePage)

function changePage(pageName){
  header(pageName)
  footer(pageName, changePage)
}