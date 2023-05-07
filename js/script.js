if (document.documentElement.clientWidth < 768) {
  const swiperBlock = document.querySelector('.services__main');
  const swiperWrapper = document.querySelector('.services__list');
  const swiperSlide = document.querySelectorAll('.services__item');

  swiperBlock.classList.add('swiper');
  swiperWrapper.classList.add('swiper-wrapper');

  for (let i = 0; i < swiperSlide.length; i++) {
    swiperSlide[i].classList.add('swiper-slide');
    }

  swiper = new Swiper('.swiper', {
    sliderPerView: 'auto',
    spaceBetween: 16,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
}

const servicesButton = document.querySelector('.services__button');

servicesButton.addEventListener("click", changeShowHide);

function changeShowHide() {
  if (servicesButton.classList.contains('services__button-show')) {
    showElem();
    servicesButton.classList.replace('services__button-show', 'services__button-hide');
    servicesButton.innerHTML = 'Скрыть';
    return;
  }
  if (servicesButton.classList.contains('services__button-hide')) {
    hideElem();
    servicesButton.classList.replace('services__button-hide', 'services__button-show');
    servicesButton.innerHTML = 'Показать все';
    return;
  }

}

function showElem() {
	const servicesItem = document.querySelectorAll('.services__item');
  for (i = 0; i < servicesItem.length; i++) {
    servicesItem[i].style.display = 'block';
  }
}

function hideElem() {
	const servicesItemHideTablet = document.querySelectorAll('.services__item:nth-child(n+7)');
  const servicesItemHideDesktop = document.querySelectorAll('.services__item:nth-child(n+9)');
  if ((document.documentElement.clientWidth >= 768) &&
  (document.documentElement.clientWidth < 1120)) {
    for (i = 0; i < servicesItemHideTablet.length; i++) {
      servicesItemHideTablet[i].style.display = 'none';
    }
  }
  if (document.documentElement.clientWidth >= 1120) {
    for (i = 0; i < servicesItemHideDesktop.length; i++) {
      servicesItemHideDesktop[i].style.display = 'none';
    }
  }

}