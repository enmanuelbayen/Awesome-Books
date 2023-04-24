let bookList = [
    {   
        'title': 'Lorem Ipsum',
        'author': 'Testeroo testyy'   
    }
];


const add = document.querySelector('.addBttn');
const remove = document.querySelectorAll('.removeBttn');
const bookBody = document.querySelector('.bookList-container'); 
let title = document.querySelector('.book-title');
let author = document.querySelector('.book-author');

const printBooks = function() {
    bookBody.innerHTML=``;
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

add.addEventListener('click', function () {
    let newObj = {
        'title': title.value,
        'author': author.value,
    };
    
    bookList.push(newObj);
    printBooks();
    return bookList;
});



remove.addEventListener('click', () => {
    bookList.filter(bookList[i], -1);
    bookBody.removeChild(shelf);
})