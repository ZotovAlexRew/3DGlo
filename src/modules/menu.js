const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');
  const menuLinks = menu.querySelectorAll('a[href^="#"]');
  const arrDown = document.querySelector('main>a');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  const scroll = (element) => {
    const id = element.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      scroll(menuLinks[i]);
    });
  }

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);
  menuItems.forEach(menuItem => menuItem.addEventListener('click',handleMenu));
  arrDown.addEventListener('click', function(e) {
    e.preventDefault();
    scroll(arrDown);
  });
};

export default menu;