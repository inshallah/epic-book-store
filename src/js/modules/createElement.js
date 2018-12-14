

function createElement(data, template) {
  const card = document.createElement(template.tag);
  card.classList.add(template.tagClass);

  card.innerHTML = template.setContent(data);

  return card;
};

export default createElement;
