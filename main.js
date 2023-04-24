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

const addBook = function (title, author) {
    bookList.push({
        'title': title,
        'author': author
    });
};

const removeButtons = document.querySelectorAll('.remove');
const removeBook = function() {
    bookList.filter()
}