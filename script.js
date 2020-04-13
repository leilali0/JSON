let mainContatiner = document.getElementById('mainContatiner');

let jsonDatabase = [
  {
    "title" : "Classic",
    "picture_url" : "1.jpg",
    "price" : "$4.00",
    "info" : "Our classic bubble tea, made fresh everyday.",
  },
  {
    "title" : "Matcha Green Tea",
    "picture_url" : "2.jpg",
    "price" : "$4.50",
    "info" : "Hand-whisked organic Matcha green tea with oat milk.",
  },
  {
    "title" : "Thai Tea",
    "picture_url" : "3.jpg",
    "price" : "$4.50",
    "info" : "Sweet, creamy & rich, with organic condensed milk.",
  },
  {
    "title" : "Iced Chocolate",
    "picture_url" : "4.jpg",
    "price" : "$4.50",
    "info" : "Classic milk tea meets rich chocolate.",
  }
]

function createElement(incomingJSON) {
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let imgContainer = document.createElement("IMG");
  imgContainer.classList.add("newImage");
  imgContainer.src = incomingJSON['picture_url'];
  newContentElement.appendChild(imgContainer);

  let subHeading = document.createElement("H3");
  subHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(subHeading);

  let priceTage = document.createElement("H5");
  priceTage.innerText = incomingJSON['price'];
  newContentElement.appendChild(priceTage);

  let infoContainer = document.createElement("P");
  infoContainer.innerText = incomingJSON['info'];
  newContentElement.appendChild(infoContainer);

  mainContatiner.appendChild(newContentElement);
}

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}
