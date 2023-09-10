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
