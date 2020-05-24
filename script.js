const content = [
  { id: 1, body: 'one'},
  { id: 2, body: 'two'},
  { id: 3, body: 'three'}
];

const carContent = document.querySelector('.car-content');
const initContent = content[0];

let currentContent = initContent;

carContent.innerHTML = `<div>${content[0].body}</div>`;

const next = () => {
  let i = 0;
  while(i < content.length) {  	
    if (content[i].id === currentContent.id + 1) {
      carContent.innerHTML = `<div>${content[i].body}</div>`;
      currentContent = content[i];
      break;
    }

    i++;
  }
}

const prev = () => {
  let i = content.length - 1;
  while(i >= 0) {
    if (content[i].id === currentContent.id - 1) {
      carContent.innerHTML = `<div>${content[i].body}</div>`;
      currentContent = content[i];
      break;
    }

    i--;
  }
}	
