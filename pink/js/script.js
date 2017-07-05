var toggle = document.querySelector('.page-header__toggle');
var topNavList = document.querySelector('.page-header__items');
var pageHeader = document.querySelector('.page-header__nav');
var sliderPaginaton = document.querySelectorAll('.slider__pagination');

//burger menu toggle
toggle.addEventListener('click', function () {
  this.classList.toggle('page-header__toggle--active');
  topNavList.classList.toggle('page-header__items--active');
  pageHeader.classList.toggle('page-header__nav--active');
});


//slider
sliderPaginaton.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var toggle = e.target;
    
    if (toggle.tagName != "LI") return;
    
    var slidesCount = toggle.parentElement.childElementCount;
    var toggleIndex = -1;
    
    //find index of selected toggle
    for(var i = 0; i < slidesCount; i++) {
      if (toggle === toggle.parentElement.children[i]) {
        toggleIndex = i;
      }
    }
    
    if (toggleIndex == -1) return;
    
    var sliderList = toggle.parentElement.parentElement.firstElementChild;
    console.log(sliderList);
    var slides = toggle.parentElement.parentElement.firstElementChild.children;
    var slideWidth = slides[0].clientWidth;
    
    sliderList.style.marginLeft = -slideWidth * toggleIndex + 'px';
  });
});