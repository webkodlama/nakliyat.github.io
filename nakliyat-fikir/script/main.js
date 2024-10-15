
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
 

//   <div class="container-fluid content-container">
//     <div class="row">
//       <div class="col-lg">
//         <div class="content-colaps"> <!-- container -->
//       <div class="content">
//         <div class="counter-item">  <!--  -->
//           <div class="counter-icon">  <!-- icon -->
//             <i class="ri-corner-right-up-line"></i>
//           </div>
// <!--counter-->            <h2><span class="counter-text">25</span></h2>
//           <h3>book</h3>
//         </div>

//         <div class="counter-item">
//           <div class="counter-icon">
//             <i class="ri-corner-right-up-line"></i>
//           </div>
//           <h2><span class="counter-text">25</span></h2>
//           <h3>book</h3>
//         </div>

//         <div class="counter-item">
//           <div class="counter-icon">
//             <i class="ri-corner-right-up-line"></i>
//           </div>
//           <h2><span class="counter-text">25</span></h2>
//           <h3>book</h3>
//         </div>
//       </div>
//         </div>
//       </div>
//     </div>
//    </div>
//    .content-container{
//     background-image: url(vecteezy_ai-generated-a-white-delivery-truck-on-a-gray-floor_35801772.jpg) ;
    /* linear-gradient(rgba(0, 0, 0, 0.5)), rgba(0,0,0,0.5 ), url(vecteezy_ai-generated-a-white-delivery-truck-on-a-gray-floor_35801772.jpg)  */
// }
// .colapse-container{
//     width: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
// }
// .content{
//     display: flex;
//     justify-content: center;
//     height: 300px;
// }
// .counter-item{
//     text-align: center;
//     margin: auto;
// }
// .counter-item h3{
//     font-size: 40px;
//     text-transform: uppercase;
//     color: #0076ff;
// }
// .counter-item h2{
//     font-size: 55px;
//     font-weight: bold;
//     padding: 25px 0;
// }
// .counter-item i{
//     display: inline-block;
//     padding: 35px;
//     background: #000116;
//     color: #fff;
//     border-radius: 50%;
//     position: absolute;
//     top: -20%;
// }
// .counter-item i:first-child{
//     left: 13.5%;
// }
/*--------------------------------
*/

    // Facts counter
  //   $('[data-toggle="counter-up"]').counterUp({
  //     delay: 10,
  //     time: 2000
  // });
  
  
  // Back to top button
  // $(window).scroll(function () {
  //     if ($(this).scrollTop() > 100) {
  //         $('.back-to-top').fadeIn('slow');
  //     } else {
  //         $('.back-to-top').fadeOut('slow');
  //     }
  // });
  // $('.back-to-top').click(function () {
  //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  //     return false;
  // });


  $('.counter').counterUp({
    delay: 10,
    time: 1000
});