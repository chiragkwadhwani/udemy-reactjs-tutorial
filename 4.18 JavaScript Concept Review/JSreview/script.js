const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


// Descructuring

const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;

console.log(author, title, genres);

const primaryGenre = genres[0];
const secondaryGenre = genres[1];

// REST OPERATOR
const [firstGenre, secondGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// SPREAD OPERATOR
const newGenres = [...genres, "epic fantasy"]
newGenres;

// SPREAD OPERATOR - ADDING AND UPDATING PROPERTIES 
const updatedBook = {...book, moviePublicationDate: "2001-12-19", pages: 2000};
updatedBook;

// ARROW FUNCTIONS
const getYear = (str) => str.split("-")[0];
// function getYear(str) {
//   return str.split("-")[0];
// }
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(publicationDate)}, The book has ${hasMovieAdaptation ? "" : "not"} been adapted into a movie`;
summary;

// TERNARY OPERATOR
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
console.log(`The book ${title} has ${pagesRange} pages`);

// SHORT CIRCUITING
console.log(true && "Hello");
console.log(false && "Hello");
// SHORT CIRCUITING AND && Operator with Falsy Values - 0, "", null, false, undefined, NaN
console.log("jonas" && "Hello");
console.log(0 && "Hello");
// SHORT CIRCUITING OR || Operator with Falsy Values - 0, "", null, false, undefined, NaN
console.log(true || "Hello");
console.log(false || "Hello");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "No translation available";
spanishTranslation;

// NULLISH COALESCING OPERATOR
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "No reviews available";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "No reviews available";
// count;

// CHAINING OPERATOR
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  {goodreads} {librarything};
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));


// ARRAY METHODS

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((num) => num * 2);
x;

const titles_list = books.map((book) => book.title);
titles_list;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}))
essentialData;


const longBooksWithMovie = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books.filter((book) => book.genres.includes("adventure")).map((book) => book.title);
adventureBooks;


const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;


const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
arr;
sorted;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;


// Working with Immutable Arrays

// add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
}
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// update book object in array
const booksAfterUpdate = booksAfterDelete.map((book) => book.id === 1 ? {...book, pages: 1210} : book);
booksAfterUpdate;


// javascript promises / fetch api
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("jonas1");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();

const todos = getTodos();
console.log(1, todos);

console.log("jonas2");