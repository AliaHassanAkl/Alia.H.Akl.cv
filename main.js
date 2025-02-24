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


// background animation moves
const numBlobs = 80;
        const colors = ["var(--colormain1)",
                        "var(--colormain2)",
                        "var(--colormain3)"];
        const blobs = [];

        function createBlob() {
            let blob = document.createElement("div");
            blob.classList.add("blob");
            blob.style.background = colors[Math.floor(Math.random() * colors.length)];
            let size = Math.random() * 100 + 200;  // Bigger blobs (200px - 300px)
            blob.style.width = `${size}px`;
            blob.style.height = `${size}px`;
            blob.style.left = `-300px`; // Keep them inside viewport
            blob.style.top = `0px`;
           
            document.body.querySelector(".bg-container").appendChild(blob);

            blobs.push({
                element: blob,
                x: Math.random() * window.innerWidth ,
                y: Math.random() * window.innerHeight,
                speedX: (Math.random() - 0.5) * 2,  // Slower movement
                speedY: (Math.random() - 0.8) * 2
            });
        }

        for (let i = 0; i < numBlobs; i++) {
            createBlob();
        }

        function animateBlobs() {
            blobs.forEach(blob => {
                blob.x += blob.speedX;
                blob.y += blob.speedY;

                if (blob.x < 0 || blob.x + blob.element.offsetWidth > window.innerWidth) {
                    blob.speedX *= -1;
                }
                if (blob.y < 0 || blob.y + blob.element.offsetHeight > window.innerHeight) {
                    blob.speedY *= -1;
                }

                blob.element.style.transform = `translate(${blob.x}px, ${blob.y}px)`;
            });

            requestAnimationFrame(animateBlobs);
        }

        animateBlobs();
function updateBackgroundHeight() {
          document.querySelector(".bg-container").style.height = `${document.body.clientHeight}px`;
      }
      
      // Call it once on load and also when the window resizes
      window.addEventListener("load", updateBackgroundHeight);
      window.addEventListener("resize", updateBackgroundHeight);
      
      // Update blobs to move across full page height
      blobs.forEach(blob => {
        // Get the actual page width
        // let pageWidth = document.body.clientWidth;
    
        // Ensure blobs move within the page width
        // blob.x = Math.random() * pageWidth;
        blob.y = Math.random() * document.body.scrollHeight;
    });

// function editQuries (screenSize){
//   if (screenSize.matches){
//     document.querySelector(".bg-container").style.left="0";
//   }
//   else {
//     document.querySelector(".bg-container").style.left="-300";
//   }
// }
// const screenSize=window.matchMedia("(max-width:320px)");

// editQuries(screenSize);

// screenSize.addEventListener("change",function(){
//   editQuries(screenSize);
// });