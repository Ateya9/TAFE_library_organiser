const saveButton = document.querySelector('')

const book = document.createElement('div')
const title = document.createElement('p')
const author = document.createElement('p')
const genre = document.createElement('p')
const isbn = document.createElement('p')

book.classList.add('book')

book.appendChild(title)
book.appendChild(author)
book.appendChild(genre)
book.appendChild(isbn)