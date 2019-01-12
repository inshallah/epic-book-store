
const bookCardTemplate = {

  wrap: '.j-product-cards',
  tag: 'a',
  tagClass: 'product-card-mini',
  setContent: function(data) {
    return `<h2 class="product-card-mini__title">${data.name}</h2>
    <div class="product-card-mini__img-wrap">
    <img class="product-card-mini__img" src="img/books_all/${data.uri}.png" alt="${data.name}">
    </div>
    <p class="product-card-mini__descr">${data.desc}</p>
    <span class="product-card-mini__price">${data.price}₽</span>`
  }
};

export default bookCardTemplate;

