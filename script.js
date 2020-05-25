class Carousel {
  constructor(options) {
    this.options = options || {
      content: [],
      elementClass: '',
    }
  }

  buildCarousel() {
    const container = document.querySelector(this.options.elementClass);

    const content = this.options.content;
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
      
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');  
  
    carousel.style.display = 'flex';
    carousel.style.flexDirection = 'row';
    carousel.style.alignItems = 'center';
    carousel.style.border = '1px solid red';
  
    const carouselContent = document.createElement('carousel-content');
    carouselContent.classList.add('carousel-content');
  
    carouselContent.style.display = 'flex';
    carouselContent.style.justifyContent = 'center';
    carouselContent.style.minHeight = '200px';
    carouselContent.style.width = '100%';
    carouselContent.style.alignItems = 'center';
  
    prevBtn.classList.add('carousel-btn');
    prevBtn.innerText = 'prev';
    prevBtn.classList.add('carousel-btn-left');
  
    nextBtn.classList.add('carousel-btn');
    nextBtn.innerText = 'next';
    nextBtn.classList.add('carousel-btn-right');
  
    carousel.appendChild(prevBtn);
    carousel.appendChild(carouselContent);
    carousel.appendChild(nextBtn);  
  
    const initContent = content[0];
    let currentContent = initContent;
  
    carouselContent.innerHTML = `<div>${content[0].body}</div>`;
    
    const next = () => {
      let i = 0;
      while(i < content.length) {  	
        if (content[i].id === currentContent.id + 1) {
          carouselContent.innerHTML = `<div>${content[i].body}</div>`;
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
          carouselContent.innerHTML = `<div>${content[i].body}</div>`;
          currentContent = content[i];
          break;
        }
  
        i--;
      }
    }	
  
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
  
    container.appendChild(carousel);

    return container;
  }
}


//Usage Example:

// const options1 = {
//   content:  [
//     { id: 1, body: 'one'},
//     { id: 2, body: 'two'},
//     { id: 3, body: 'three'},
//   ],
//   elementClass: '.container1'
// };

// const carousel1 = new Carousel(options1);

// carousel1.buildCarousel();

// const options2 = {
//   content:  [
//     { id: 1, body: 'abcd'},
//     { id: 2, body: 'test'},
//     { id: 3, body: 'efgh'},
//     { id: 4, body: 'hijk'},
//   ],
//   elementClass: '.container2'
// };

// const carousel2 = new Carousel(options2);
// carousel2.buildCarousel();