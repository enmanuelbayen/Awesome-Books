let bookList = [
    {
        'title': 'Lorem Ipsum',
        'author': 'Testeroo testyy'   
    },
    {
        'title': 'Lorem Ipsum2',
        'author': 'Testeroo testyy' 
    },
    {
        'title': 'Lorem Ipsum3',
        'author': 'Testeroo testyy'
    }
];

// const addBook = function (title, author) {
//     bookList.push({
//         'title': title,
//         'author': author
//     });
// };

const addBook = document.querySelector('.addBttn');
const remove = document.querySelectorAll('.removeBttn');
const bookBody = document.querySelector('.bookList-container'); 

addBook.addEventListener('click', () => {
    const shelf = document.createElement('div');
    shelf.className = 'shelfBox';
    shelf.innerHTML = `
    <div class="book-title-box">
        <h2 class="book-title">${bookList[i].title}</h2>
    </div>
    <div class="author-box">
        <h2 class="book-author">${bookList[i].author}</h2>
    </div>
    <button class="removeBttn">Remove</button>
    `;

    bookBody.appendChild(shelf);
})

// const removeButtons = document.querySelectorAll('.remove');
// const removeBook = function() {
//     bookList.filter(bookList[1], -1);
// }

//remove.addEventListener('click', () => {
    //bookList.filter(bookList[i], -1);
    //bookBody.removeChild(shelf);
//})


const printBooks = function() {
    for (let i=0; i<bookList.length; i+=1){
        const shelf = document.createElement('div');
        shelf.className = 'shelfBox';
        shelf.innerHTML = 
        `<div class="book-title-box">
            <h2 class="book-title">${bookList[i].title}</h2>
        </div>
        <div class="author-box">
            <h2 class="book-author">${bookList[i].author}</h2>
        </div>
        <button class="removeBttn">Remove</button>`;

    bookBody.appendChild(shelf);
    }
}

printBooks();