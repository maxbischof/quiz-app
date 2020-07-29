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

let currentPage = 'Questions'

header(currentPage)
//main()
footer(currentPage, changePage)


function changePage(pageName){
  if(pageName==='questions') {
    quetions()
  }
  currentPage = pageName
  header(currentPage)
}