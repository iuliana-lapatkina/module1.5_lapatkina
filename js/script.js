const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1.3,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

let buttonShow = document.querySelector('.button-show');
let buttonHide = document.querySelector('.button-hide');

buttonShow.addEventListener("click", showElem);
buttonHide.addEventListener("click", hideElem);
		
function showElem() {
	let servicesItem = document.querySelectorAll('.services-item');
  for (i=0; i<servicesItem.length; i++) {
    servicesItem[i].style.display = 'block';
  }
	buttonShow.style.display = 'none';
  buttonHide.style.display = 'block';
}

function hideElem() {
	let servicesItemHideTablet = document.querySelectorAll('.services-item:nth-child(n+7)');
  let servicesItemHideDesktop = document.querySelectorAll('.services-item:nth-child(n+9)');
  if ((document.documentElement.clientWidth >= 768) &&
  (document.documentElement.clientWidth < 1120)) {
    for (i=0; i<servicesItemHideTablet.length; i++) {
      servicesItemHideTablet[i].style.display = 'none';
    }
  }
  if (document.documentElement.clientWidth > 1120) {
    for (i=0; i<servicesItemHideDesktop.length; i++) {
      servicesItemHideDesktop[i].style.display = 'none';
    }
  }
	buttonShow.style.display = 'block';
  buttonHide.style.display = 'none';
}