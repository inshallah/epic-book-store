
import insertElements from '../../node_modules/jquery/dist/jquery.js';
import insertElements from './modules/insertElements.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import sendRequest from './modules/sendRequest.js';
import sendRequest from '../../node_modules/slick-carousel/slick/slick.js';

const data = {
  page: 1,
  perPage: 8,
  type: ''
};

const wrap = document.querySelector(bookCardTemplate.wrap);

if (wrap) {
  const dataAjax = createDataAjax();

  sendRequest(dataAjax, function(responseText){
    console.log(responseText);

    if (wrap.children) {
      wrap.innerHTML = '';
    }

    insertElements(responseText.items, bookCardTemplate);
  });
}



//Вешаем слушатель на табы
const tabWrap = document.querySelector('.j-tabs');
const tabsItemArray = Array.from(tabWrap.children);

tabsItemArray.forEach(function(tab) {
  const link = tab.firstElementChild;

  link.addEventListener('click', function(event) {
    event.preventDefault();
    data.type = event.target.dataset.type;

    if (window.matchMedia("(min-width: 768px)").matches) {
      data.perPage = 8;
    } else {
      data.perPage = 3;
    };

    const dataAjax = createDataAjax();

    sendRequest(dataAjax, function(responseText){
      console.log(responseText);

      if (wrap.children) {
        wrap.innerHTML = '';
      }

      insertElements(responseText.items, bookCardTemplate);
    });
  });
});

//Функция подготовки урла для  GET-запроса
function createDataAjax() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    data.perPage = 8;
  } else {
    data.perPage = 3;
  };

  return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
};


// function sendRequest(data) {
//   let xhr = new XMLHttpRequest;

//   xhr.open('GET', data);
//   xhr.send();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const request = JSON.parse(xhr.responseText);

//       const wrap = document.querySelector(bookCardTemplate.wrap);
//       if (wrap.children) {
//         wrap.innerHTML = '';
//       }



//       if (document.querySelector(bookCardTemplate.wrap)) {
//         console.log(request)

//         insertElements(request.items, bookCardTemplate);
//       };

//     } else {
//       console.log(`Жду загрузки: ${xhr.readyState}`)
//     }

//   };

// };

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
