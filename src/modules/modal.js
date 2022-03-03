import { animation } from "./helpers";

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const modalContent = modal.querySelector('.popup-content');
  let count = 0;
  let widthScreen = window.screen.width;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (widthScreen < 768)
      {
        modal.style.display = 'block';
      }
      else
      {
        modal.style.display = 'block';
        while(count<20)
        {
          count++;
          animation({
            duration: 1000,
            timing(timeFraction)
            {
              return timeFraction;
            },
            draw(progress)
            {
              modalContent.style.top = (count*progress) + '%';
            }
          });
        }
      }
    });
  });

  modal.addEventListener('click', (e) => {
      if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
         modal.style.display = 'none';
         count = 0;
      }
   });
};

export default modal;