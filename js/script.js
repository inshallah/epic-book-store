function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  console.log('DOM ready');
});


const data = {
  books: [
  {
    title: "Латеральная логика",
    image: "img/book/*jpg",
    description: "Головоломный путь к нестандартному мышлению",
    price: '500р'
    // href:
  }, {
    title: "Латеральная логика",
    image: "img/book/*jpg",
    description: "Головоломный путь к нестандартному мышлению",
    price: '500р'
    // href:
  }, {
    title: "Латеральная логика",
    image: "img/book/*jpg",
    description: "Головоломный путь к нестандартному мышлению",
    price: '500р'
    // href:
  }, {
    title: "Латеральная логика",
    image: "img/book/*jpg",
    description: "Головоломный путь к нестандартному мышлению",
    price: '500р'
    // href:
  } ,   {
    title: "Латеральная логика",
    image: "img/book/*jpg",
    description: "Головоломный путь к нестандартному мышлению",
    price: '500р'
    // href:
  }, {
    title: "Латеральная логика",
    image: "img/book/*jpg",
    description: "Головоломный путь к нестандартному мышлению",
    price: '500р'
    // href:
  }, {
    title: "Латеральная логика",
    image: "img/book/*jpg",
    description: "Головоломный путь к нестандартному мышлению",
    price: '500р'
    // href:
  }, {
    title: "Латеральная логика",
    image: "img/book/*jpg",
    description: "Головоломный путь к нестандартному мышлению",
    price: '500р'
    // href:
  }

  ]

};

const cards = document.querySelector('.j-product-cards');
const elements = cards.querySelectorAll('.product-card-mini');

function createCards(data) {
  const booksArray = data.books;
  let cardString = ``;

  booksArray.forEach(function(book) {
    cardString = cardString + `<a class="product-card-mini-wrap" href="">
    <article class="product-card-mini">
    <h2 class="product-card-mini__title">${book.title}</h2>
    <a class="product-card-mini__img-wrap">
    <img class="product-card-mini__img" src="${book.src}" alt="${book.title}">
    </a>
    <p class="product-card-mini__descr">${book.description}</p>
    <div class="product-card-mini__price">${book.price}</div>
    </article>
    </a>`
  })

  return cardString;
};

function insertElements(data, wrap) {
  const html = createCards(data);
  wrap.innerHTML = html;
};


if(cards) {
  insertElements(data, cards);
};

