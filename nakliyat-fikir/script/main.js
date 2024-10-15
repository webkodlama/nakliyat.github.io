
// Gallery
 document.addEventListener("click",function (e){
   if(e.target.classList.contains("gallery-item")){
   	  const src = e.target.getAttribute("src");
   	  document.querySelector(".modal-img").src = src;
   	  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
   	  myModal.show();
   }
 });

// Header Carousel




const carousel = document.querySelector(".carousel");
const carousel_next =document.querySelector(".carousel-next");
const carousel_prev = document.querySelector(".carousel-prev");
const carousel_item = document.querySelectorAll(".carousel_item");
const carousel_img = document.querySelectorAll(".carousel-img");
const numberCarousel = carousel_item.length;
var carouselNumber = 0;
carousel_next.addEventListener("click", () => {
  carousel_item.forEach((carouselitem) => {
    carouselitem.classList.remove("active");
  });
  carousel_img.forEach((carouselimg) => {
    carouselimg.classList.remove("active");
  });
  carouselNumber++;
  if(carouselNumber > (numberCarousel - 1)){
    carouselNumber = 0;
  }
  carousel_item[carouselNumber].classList.add("active");
  carousel_img[carouselNumber].classList.add("active");
});

carousel_prev.addEventListener("click", () => {
  carousel_item.forEach((carouselitem) => {
    carouselitem.classList.remove("active");
  });
  carousel_img.forEach((carouselimg) => {
    carouselimg.classList.remove("active");
  });
  carouselNumber--;
  if(carouselNumber < 0){
    carouselNumber = numberCarousel -1;
  }
  carousel_item[carouselNumber].classList.add("active");
  carousel_img[carouselNumber].classList.add("active");
});

// image slider autoplay
var playcarousel;

var carouselauto = () => {
  playcarousel = setInterval(function(){
    carousel_item.forEach((carouselitem) => {
    carouselitem.classList.remove("active");
  });
  carousel_img.forEach((carouselimg) => {
    carouselimg.classList.remove("active");
  });
  carouselNumber++;
  if(carouselNumber > (numberCarousel - 1)){
    carouselNumber = 0;
  }
  carousel_item[carouselNumber].classList.add("active");
  carousel_img[carouselNumber].classList.add("active");
  }, 2000);

}
carouselauto ();

// stop carousel auto mousover
carousel.addEventListener("mouseover", () => {
  clearInterval(playcarousel);
});
// start carousel auto mouseover
carousel.addEventListener("mouseout", () => {
  carouselauto();
});

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2000
  });
  
      // Back to top button
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
 




  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
