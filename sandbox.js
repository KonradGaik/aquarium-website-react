const navToggle = document.getElementById('nav-toggle');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.nav-toggle__icon');
const toBlurry = document.getElementById('toBlurry');



navToggle.addEventListener('click', () => {
sidebar.classList.toggle('open');
hamburger.classList.toggle('active')
});

const toggleButton = document.querySelector('.nav-toggle');
toggleButton.addEventListener('click', () => {
toggleButton.classList.toggle('open');
toBlurry.classList.toggle('blurry');
});




// Listen for scroll events - 
const progressBar = document.getElementById("scroll-progress-bar");
document.addEventListener("scroll", () => {
    const scroll = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    if(scroll<=67){   
    progressBar.style.marginTop = `${scroll}vh`;                
    }
});

// nav scroll transition
const aside = document.getElementById('aside')
const scrollProgress = document.getElementById('scroll-progress')
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "0";
    document.getElementById("nav").style.zIndex = "1000";
    // document.getElementById("nav").style.height = "10vh";
    aside.style.top = '10vh'
    scrollProgress.style.top = '10vh'
    sidebar.style.top = '10vh'
    document.getElementById("logo").style.lineHeight = "16vh";
  } else {
    document.getElementById("nav").style.padding = '3vh';
    aside.style.top = '16vh'
    scrollProgress.style.top = '16vh'
    sidebar.style.top = '16vh'
    document.getElementById("logo").style.lineHeight = "10vh";
  }
}


//slider
let currentSlideID = 0;
const sliderElement = document.getElementById('slider')
const totalSlides = sliderElement.childElementCount;

const next = () => {
if(currentSlideID<totalSlides){
currentSlideID++
showSlide()
}
}

const prev = () => {
if(currentSlideID>1){
currentSlideID--
showSlide()
}
}

const showSlide = () => {
    const slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if(currentSlideID === index+1){
            element.classList.remove('hidden')
            element.classList.add('fade-in')
        }else{
            element.classList.remove('fade-in')
            element.classList.add('hidden')
        }
    }
}

const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');
console.log(allCategoryPosts)
for(let i = 0; i<allCategoryPosts.length;i++){
    if(i>=3){
        allCategoryPosts[i].style.display = 'none'
    }
}
for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}
function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){

            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}
function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};

// SECTION 
const { gsap, imagesLoaded } = window;
const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	images.forEach((image) => {
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 2,
					scaleX: loadProgress,
				});

				if (totalImages == loadedImages) {
					setTimeout(() => {
						gsap.timeline()
							.to(".loading__wrapper", {
							duration: 3,
							opacity: 0,
							pointerEvents: "none",
						})
					}, 3000);
				}
			}
		});
	});
};

waitForImages();

    
    
    
const progress = document.getElementById('progress');
const prevStep = document.getElementById('prev');
const nextStep = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const step1 = document.getElementById('details');
const step2 = document.getElementById('pay');
const step3 = document.getElementById('production');
const step4 = document.getElementById('recieve');
let currentActive = 1;





// nextStep.addEventListener('click', () => {
//     currentActive++
//     if(currentActive > circles.length){
//         currentActive = circles.length
//     }
//     update()
// })

// prevStep.addEventListener('click', () => {
//     currentActive--
//     if(currentActive < 1){
//         currentActive = 1
//     }

//     update()
// })

function update(){

    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
let actives = document.querySelectorAll('.active');
console.log(currentActive,circles.length,actives.length)
progress.style.width = ((((actives.length-1) - 1) / (circles.length - 1)) * 100)+"%";

}


step1.addEventListener('click', () => {
        currentActive = 1
        console.log(1)
        update()
})

step2.addEventListener('click', () => {
        currentActive = 2
        update()
        console.log(2)
})

step3.addEventListener('click', () => {
        currentActive = 3
        update()
        console.log(3)
})

step4.addEventListener('click', () => {
        currentActive = 4
        update()
        console.log(4)
})


var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    zoom: 2,
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });