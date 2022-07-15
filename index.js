const url = 'http://localhost:4232/movies';

const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

const fetchData = async () => {
   const response = await fetch(url);
   const data = await response.json();
   displayData(data);
};

const displayData = (movies) => {
   const cardContainerEl = document.querySelector('.cardContainer');
   const cards = document.querySelector('.cardContainer');
   const movieString = movies
      .map((item) => {
         return `
            <div class="cards">
                <img class="image" src="${item.imgUrl}"/>
                <h3 class="movieName">Movie: ${item.name}</h3>
                <h3 class="movieInfo">Info: ${item.outlineInfo}</h3>
            </div>
      `;
      })
      .join('');
   cards.innerHTML = movieString;

   const slides = Array.from(cardContainerEl.children);
   const slideWidth = slides[0].getBoundingClientRect().width;

   btnRight.addEventListener('click', () => {
      cardContainerEl.scrollLeft += slideWidth * 4;
      btnLeft.classList.add('displayLeft');
      console.log(slideWidth);
   });
   btnLeft.addEventListener('click', () => {
      cardContainerEl.scrollLeft -= slideWidth * 4;
      console.log(cardContainerEl.scrollLeft);
      if (cardContainerEl.scrollLeft < 800) {
         btnLeft.classList.remove('displayLeft');
      }
   });
};

fetchData();
