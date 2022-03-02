const slider = (classSlider, classSlides, activeSlideClass = 'portfolio-item-active',
activeDotClass = 'dot-active') => {
  
  if (!document.querySelector(classSlider) || !document.querySelectorAll(classSlides))
  {
    return;
  }
  else
  {
    const sliderBlock = document.querySelector(classSlider);
    const slides = document.querySelectorAll(classSlides);

    let currentSlide = 0;
    const timerInterval = 2000;
    let interval;
    let dots;

    const getDots = () => {
      let portfolioDots = document.createElement('ul');
      portfolioDots.classList.add('portfolio-dots');
      portfolioDots.innerHTML = '';
      for (let i = 0; i < slides.length; i++)
      {
        portfolioDots.innerHTML += '<li class="dot"></li>';
      }
      sliderBlock.append(portfolioDots);
      dots = document.querySelectorAll('.dot');
      dots[0].classList.add(activeDotClass);
    };

    const prevSlide = (elems, index, strClass) => {
      elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
      elems[index].classList.add(strClass);
    };

    const auroSlide = () => {
      prevSlide(slides, currentSlide, activeSlideClass);
      prevSlide(dots, currentSlide, activeDotClass);
      currentSlide++;

      if(currentSlide >= slides.length) {
        currentSlide = 0;
      }

      nextSlide(slides, currentSlide, activeSlideClass);
      nextSlide(dots, currentSlide, activeDotClass);
    };

    const startSlide = (timer = 1500) => {
      interval = setInterval(auroSlide, timer);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
      e.preventDefault();

      if (!e.target.matches('.dot, .portfolio-btn')) 
      {
        return;
      }

      prevSlide(slides, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');

      if (e.target.matches('#arrow-right')) 
      {
        currentSlide++;
      }
      else if (e.target.matches('#arrow-left')) 
      {
        currentSlide--;
      }
      else if (e.target.classList.contains('dot'))
      {
        dots.forEach((dot, index) => {
          if (e.target === dot) 
          {
            currentSlide = index;
          }
        });
      }

      if(currentSlide >= slides.length) 
      {
        currentSlide = 0;
      }

      if(currentSlide < 0) 
      {
        currentSlide = slides.length - 1;
      }

      nextSlide(slides, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');

    });

    sliderBlock.addEventListener('mouseenter', (e) => {
      if (e.target.matches('.dot, .portfolio-btn')) {
        stopSlide();
      }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
      if (e.target.matches('.dot, .portfolio-btn')) {
        startSlide(timerInterval);
      }
    }, true);

    getDots();
    startSlide(timerInterval);
  }
 
};

export default slider;