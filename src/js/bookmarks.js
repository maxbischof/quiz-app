import { get } from './utilities'
import { card } from './card'

function bookmarks() {
  const pageBookmarks = get('[data-js=\'bookmarks\']')
  card(pageBookmarks)
}

export default bookmarks
