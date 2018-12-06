const bookCardTemplate = {

  wrap: '.j-product-cards',
  tag: 'a',
  tagClass: 'product-card-mini-wrap',
  setContent: function(data) {
    return `<a class="product-card-mini-wrap" href="">
    <article class="product-card-mini">
    <h2 class="product-card-mini__title">${data.title}</h2>
    <a class="product-card-mini__img-wrap">
    <img class="product-card-mini__img" src="${data.image}" alt="${data.title}">
    </a>
    <p class="product-card-mini__descr">${data.description}</p>
    <div class="product-card-mini__price">${data.price}</div>
    </article>
    </a>`
  }
};

export default bookCardTemplate;
