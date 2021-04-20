const navigation = document.querySelector('.navigation');
const burger = document.querySelector('.page-header__burger');
const closeBurger = document.querySelector('.page-header__burger-span');
const watchVideo = document.querySelector('.page-header__media-span');
const video = document.querySelector('.video');
const closeVideo = document.querySelector('.video__close');

document.querySelectorAll('.accordion__trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    parent.classList.toggle('accordion__item--active');
  })
);

burger.addEventListener('click', ()=>{
    navigation.classList.toggle("visually-hidden");
    closeBurger.classList.toggle("page-header__x-burger");
});

watchVideo.addEventListener('click', ()=>{
  video.classList.remove('visually-hidden');
});

closeVideo.addEventListener('click', ()=>{
  video.classList.add('visually-hidden');
});
