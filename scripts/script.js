const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu_burger-items');
const closeBtn = document.querySelector('.menu__close-btn');

// Открытие меню
burger.addEventListener('click', () => {
   menu.classList.add('open');
   document.body.style.overflow = 'hidden';
});

// Закрытие меню
closeBtn.addEventListener('click', () => {
   menu.classList.remove('open');
   document.body.style.overflow = '';
});

//Ссылка на блок с Партфолио
const linkProject = document.querySelector(".tagle-image").addEventListener('click', () => {
   const portfolioSection = document.querySelector(".portfolio");
   portfolioSection.scrollIntoView({
      behavior: 'smooth', // Плавная прокрутка
      block: 'start'      // Прокрутка до начала блока
   });
});


//Ссылка на блок "Давайте говорити"
const linkContact = document.querySelector(".ContactMe").addEventListener('click', () => {
   menu.classList.remove('open');
   document.body.style.overflow = '';
   const portfolioSection = document.querySelector(".footer__top");
   portfolioSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   });
});


// Cкрытие и показ блоков
document.querySelectorAll('.view').forEach(button => {
   button.addEventListener('click', event => {
      event.preventDefault();

      // Показываем связанный текст
      const targetClass = button.getAttribute('data-target');
      const targetText = document.querySelector(`.${targetClass}`);

      targetText.classList.remove('hidden');
      targetText.classList.add('visible');

      // Изменяем стили картинки
      const image = button.closest('.portfolio-section_img').querySelector('.banner-img img');
       // Добавляем класс для изменения clip-path
      image.classList.add('expanded');
   });
});
