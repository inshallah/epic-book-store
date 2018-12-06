
import insertElements from './modules/insertElements.js';
import dataBooks from './modules/dataBooks.js';
import bookCardTemplate from './modules/bookCardTemplate.js';



function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  if (document.querySelector(bookCardTemplate.wrap)) {
    const wrap = document.querySelector(bookCardTemplate.wrap);
    insertElements(dataBooks.books, bookCardTemplate);
  }
});


// const data = {
//   books: [
//   {
//     title: "Латеральная логика",
//     image: "img/book/*jpg",
//     description: "Головоломный путь к нестандартному мышлению",
//     price: '500р'
//     // href:
//   }, {
//     title: "Латеральная логика",
//     image: "img/book/*jpg",
//     description: "Головоломный путь к нестандартному мышлению",
//     price: '500р'
//     // href:
//   }, {
//     title: "Латеральная логика",
//     image: "img/book/*jpg",
//     description: "Головоломный путь к нестандартному мышлению",
//     price: '500р'
//     // href:
//   }, {
//     title: "Латеральная логика",
//     image: "img/book/*jpg",
//     description: "Головоломный путь к нестандартному мышлению",
//     price: '500р'
//     // href:
//   } ,   {
//     title: "Латеральная логика",
//     image: "img/book/*jpg",
//     description: "Головоломный путь к нестандартному мышлению",
//     price: '500р'
//     // href:
//   }, {
//     title: "Латеральная логика",
//     image: "img/book/*jpg",
//     description: "Головоломный путь к нестандартному мышлению",
//     price: '500р'
//     // href:
//   }, {
//     title: "Латеральная логика",
//     image: "img/book/*jpg",
//     description: "Головоломный путь к нестандартному мышлению",
//     price: '500р'
//     // href:
//   }, {
//     title: "Латеральная логика",
//     image: "img/book/*jpg",
//     description: "Головоломный путь к нестандартному мышлению",
//     price: '500р'
//     // href:
//   }

//   ]

// };

// const cards = document.querySelector('.j-product-cards');
// const elements = cards.querySelectorAll('.product-card-mini');

// function createCards(data) {
//   const booksArray = data.books;
//   let cardString = ``;

// booksArray.forEach(function(book) {
//   cardString = cardString + `<a class="product-card-mini-wrap" href="">
//   <article class="product-card-mini">
//   <h2 class="product-card-mini__title">${book.title}</h2>
//   <a class="product-card-mini__img-wrap">
//   <img class="product-card-mini__img" src="${book.src}" alt="${book.title}">
//   </a>
//   <p class="product-card-mini__descr">${book.description}</p>
//   <div class="product-card-mini__price">${book.price}</div>
//   </article>
//   </a>`
// })

//   return cardString;
// };

// function insertElements(data, wrap) {
//   const html = createCards(data);
//   wrap.innerHTML = html;
// };


// if(cards) {
//   insertElements(data, cards);
// };

// const cardsWrap = document.querySelector('.j-member-cards');

// function createElement(member) {
//   const card = document.createElement('div');
//   card.classList.add('member-card');

//   card.innerHTML = `<a class="product-card-mini-wrap" href="">
//   <article class="product-card-mini">
//   <h2 class="product-card-mini__title">${book.title}</h2>
//   <a class="product-card-mini__img-wrap">
//   <img class="product-card-mini__img" src="${book.src}" alt="${book.title}">
//   </a>
//   <p class="product-card-mini__descr">${book.description}</p>
//   <div class="product-card-mini__price">${book.price}</div>
//   </article>
//   </a>`;

//   return card;
// };

// function insertElements(obj, wrap) {
//   const membersArr = obj.members;

//   membersArr.forEach((member) => {
//     const card = createElement(member);

//     wrap.appendChild(card);
//   })
// };

// if (cardsWrap) {
//   insertElements(data, cardsWrap);
// };
