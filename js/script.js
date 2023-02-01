const saveButton = document.querySelector('[data-save]')
const bookList = document.querySelector('.list')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const genre = document.querySelector('#genre')
const isbn = document.querySelector('#isbn')

const bookArray = []

function createBookObj(title, author, genre, isbn) {
	return {
		title,
		author,
		genre,
		isbn
	}
}

function render(books) {
	bookList.innerHTML = ''

	books.forEach( ({ title, author, genre, isbn }) => {
		const bookElement = document.createElement('div')
		const bookTitle = document.createElement('p')
		bookTitle.textContent = title
		const bookAuthor = document.createElement('p')
		bookAuthor.textContent = author
		const bookGenre = document.createElement('p')
		bookGenre.textContent = genre
		const bookIsbn = document.createElement('p')
		bookIsbn.textContent = isbn
		bookElement.classList.add('book')

		bookElement.appendChild(bookTitle)
		bookElement.appendChild(bookAuthor)
		bookElement.appendChild(bookGenre)
		bookElement.appendChild(bookIsbn)
		bookList.appendChild(bookElement)
	});
} 

saveButton.addEventListener('click', (e) => {
	e.preventDefault()
	bookArray.push(createBookObj(title.value, author.value, genre.value, isbn.value))
	render(bookArray)

	title.value = ''
	author.value = ''
	genre.value = ''
	isbn.value = ''
})



