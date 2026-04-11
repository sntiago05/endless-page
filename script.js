const track = document.querySelector(".track");
const originalCards = document.querySelectorAll(".card");
let index = 0;
const cardWidth = originalCards[0].offsetWidth + 50;
/* originalCards.forEach(c => {
     const clone = c.cloneNode(true)
     track.appendChild(clone)
 })*/
for (let i = 0; i < 3; i++) {
    const clone = originalCards[i].cloneNode(true)
    track.appendChild(clone)
}

function moveCarousel() {
    index++;
    track.style.transition = "transform 0.5s ease"
    track.style.transform = `translateX(-${index * cardWidth}px)`
    if (index === originalCards.length) {
        setTimeout(() => {
            track.style.transition = "none";
            track.style.transform = `translateX(0px)`;
            index = 0
        }, 500)
    }
}
setInterval(moveCarousel, 3000);