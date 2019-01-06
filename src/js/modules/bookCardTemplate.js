
const bookCardTemplate = {

  wrap: '.j-product-cards',
  tag: 'a',
  tagClass: 'product-card-mini',
  setContent: function(data) {
    return `<a class="product-card-mini" href="${data.uri}">
    <h2 class="product-card-mini__title">${data.name}</h2>
    <div class="product-card-mini__img-wrap">
    <img class="product-card-mini__img" src="img/${data.uri}.jpg" alt="${data.name}">
    </div>
    <p class="product-card-mini__descr">${data.desc}</p>
    <span class="product-card-mini__price">${data.price}</span>
    </a>`
  }
};

export default bookCardTemplate;

