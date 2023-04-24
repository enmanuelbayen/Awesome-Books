

if(localStorage.getItem('formData')){
    const checkData = JSON.parse(localStorage.getItem('formData'))
}


let bookList = [];

const form = document.querySelector('.bookForm');
const add = document.querySelector('.addBttn');
const remove = document.querySelectorAll('.removeBttn');
const bookBody = document.querySelector('.bookList-container'); 
let title = document.querySelector('.book-title');
let author = document.querySelector('.book-author');

// Function to add to the html and object array

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

// Remove function

// Attach a click event listener to the bookBody container instead of the remove buttons
bookBody.addEventListener('click', (event) => {
  // Check if the clicked element is a remove button
  if (event.target.classList.contains('removeBttn')) {
    // Get the index of the book to remove based on the button's parent element
    const indexToRemove = Array.from(bookBody.children).indexOf(event.target.parentElement);
    // Remove the book from the bookList array
    bookList.splice(indexToRemove, 1);
    // Remove the book element from the DOM
    event.target.parentElement.remove();
  }
});

// localstorage

function saveData() {
    // this is the object required
    const data = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };
  
    localStorage.setItem('formData', JSON.stringify(data));
  }
  
  function loadData() {
    const formData = JSON.parse(localStorage.getItem('formData'));
  
    if (formData) {
      nameInput.value = formData.name;
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  }
  
  emailInput.addEventListener('input', saveData);
  nameInput.addEventListener('input', saveData);
  messageInput.addEventListener('input', saveData);
  loadData();
  
  form.addEventListener('submit', () => {
    localStorage.removeItem('formData');
  });