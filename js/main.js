// scrolling nav
const scrollingElements= document.querySelectorAll("#scrolling-nav .element");

scrollingElements.forEach(Element => {
    Element.addEventListener("click",(e) =>{

        document.querySelector(e.target.dataset.sec).scrollIntoView({
            behavior:'smooth'
        }
        )
        // console.log(e.target.dataset.secName);
    })
   
})


// Select all skill bars
const skillBars = document.querySelectorAll('.skillLevel');

// Observer setup
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the element is visible
);

// Observe each skill bar
skillBars.forEach((bar) => observer.observe(bar));


const text ="Welcome To My World!";
let index= 0;
const speed =40;

function typeWriter(){
  if (index < text.length){
    document.getElementById('wlc').textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter,speed);
  }
}
typeWriter();