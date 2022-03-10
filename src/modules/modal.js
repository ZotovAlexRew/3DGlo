import { animation } from "./helpers";

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const modalContent = modal.querySelector('.popup-content');
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
        animation({
          duration: 1000,
          timing(timeFraction)
          {
            return timeFraction;
          },
          draw(progress)
          {
            modalContent.style.left = (40 * progress) + '%';
          }
        });
      }
    });
  });

  modal.addEventListener('click', (e) => {
      if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
         modal.style.display = 'none';
      }
   });
};

export default modal;