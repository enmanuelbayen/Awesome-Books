let bookList = [];

if (localStorage.getItem('data')) {
  bookList = JSON.parse(localStorage.getItem('data'));
}

const add = document.querySelector('.addBttn');
const bookBody = document.querySelector('.bookList-container');
const title = document.querySelector('.book-title');
const author = document.querySelector('.book-author');

// Function to add to the html and object array

const printBooks = () => {
  bookBody.innerHTML = '';
  for (let i = 0; i < bookList.length; i += 1) {
    const shelf = document.createElement('div');
    shelf.className = 'shelfBox';
    shelf.innerHTML = `<div class="book-title-box">
            <h2 class="book-title">${bookList[i].title}</h2>
        </div>
        <div class="author-box">
            <h2 class="book-author">${bookList[i].author}</h2>
        </div>
        <button class="removeBttn">Remove</button>`;

    bookBody.appendChild(shelf);
  }
};

add.addEventListener('click', () => {
  const newObj = {
    title: title.value,
    author: author.value,
  };

  bookList.push(newObj);
  localStorage.setItem('data', JSON.stringify(bookList));
  printBooks();
});

// Remove function

bookBody.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeBttn')) {
    const indexToRemove = Array.from(bookBody.children).indexOf(event.target.parentElement);

    bookList.splice(indexToRemove, 1);
    localStorage.setItem('data', JSON.stringify(bookList));

    event.target.parentElement.remove();
  }
});

printBooks();
