
function sendRequest(data, onSuccess) {
  let xhr = new XMLHttpRequest;

  xhr.open('GET', data);

  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {

      const responseObj = JSON.parse(xhr.responseText);

      onSuccess(responseObj);

      // const wrap = document.querySelector(bookCardTemplate.wrap);
      // if (wrap.children) {
      //   wrap.innerHTML = '';
      // }

      // if (document.querySelector(bookCardTemplate.wrap)) {
      //   console.log(request)

      //   insertElements(request.items, bookCardTemplate);
      // }

    } else {
      console.log(`Жду загрузки: ${xhr.readyState}`);
    }

  }

};


export default sendRequest;
