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
    image: "img/book/*jpg";
    description: "Головоломный путь к нестандартному мышлению";
    price: '500р';
    href: ;
  }, {
   title: "Латеральная логика",
   image: "img/book/*jpg";
   description: "Головоломный путь к нестандартному мышлению";
   price: '500р';
   href: ;
 }, {
   title: "Латеральная логика",
   image: "img/book/*jpg";
   description: "Головоломный путь к нестандартному мышлению";
   price: '500р';
   href: ;
 }, {
   title: "Латеральная логика",
   image: "img/book/*jpg";
   description: "Головоломный путь к нестандартному мышлению";
   price: '500р';
   href: ;
 } ,   {
  title: "Латеральная логика",
  image: "img/book/*jpg";
  description: "Головоломный путь к нестандартному мышлению";
  price: '500р';
  href: ;
}, {
 title: "Латеральная логика",
 image: "img/book/*jpg";
 description: "Головоломный путь к нестандартному мышлению";
 price: '500р';
 href: ;
}, {
 title: "Латеральная логика",
 image: "img/book/*jpg";
 description: "Головоломный путь к нестандартному мышлению";
 price: '500р';
 href: ;
}, {
 title: "Латеральная логика",
 image: "img/book/*jpg";
 description: "Головоломный путь к нестандартному мышлению";
 price: '500р';
 href: ;
}

]

};

const cards = document.querySelector('.j-product-cards');
const elements = cards.querySelectorAll('.product-card-mini');

function creareCards(data) {
  const booksArray = data.books;
  let cardSting = ``;

  booksArray.forEach(function(element) {
    cardSting = cardSting + `<a class="product-card-mini-wrap" href="">
    <article class="product-card-mini">
    <h2 class="product-card-mini__title">${books.title}</h2>
    <a class="product-card-mini__img-wrap">
    <img class="product-card-mini__img" src="img/book-pravilnyij-vyibor.jpg" alt="${books.title}">
    </a>
    <p class="product-card-mini__descr">${books.description}</p>
    <div class="product-card-mini__price">${books.price}</div>
    </article>
    </a>`
  })

  return cardSting;
};

function insertElements(data, wrap) {
  const html = createCards(data);
  wrap.innerHTML = html;
};

insertElements(data, cards);
