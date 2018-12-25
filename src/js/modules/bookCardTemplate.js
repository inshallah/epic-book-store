// const bookCardTemplate = {

//   wrap: '.j-product-cards',
//   tag: 'a',
//   tagClass: 'product-card-mini-wrap',
//   setContent: function(data) {
//     return `<a class="product-card-mini-wrap" href="">
//     <article class="product-card-mini">
//     <h2 class="product-card-mini__title">${data.name}</h2>
//     <a class="product-card-mini__img-wrap">
//     <img class="product-card-mini__img" src="img/${data.uri}.png" alt="${data.name}">
//     </a>
//     <p class="product-card-mini__descr">${data.desc}</p>
//     <div class="product-card-mini__price">${data.price}</div>
//     </article>
//     </a>`
//   }
// };

// export default bookCardTemplate;


const bookCardTemplate = {

  wrap: '.j-product-cards',
  tag: 'article',
  tagClass: 'product-card-mini',
  setContent: function(data) {
    return `<article class="product-card-mini">
    <a class="product-card-mini__inner" href="#">
    <h2 class="product-card-mini__title">${data.name}</h2>
    <div class="product-card-mini__img-wrap">
    <img class="product-card-mini__img" src="img/book-ne-ochevidno.jpg" alt="${data.name}">
    </div>
    <p class="product-card-mini__descr">${data.desc}</p>
    </a>
    <span class="product-card-mini__price">${data.price}</span>
    </article>`
  }
};

export default bookCardTemplate;
