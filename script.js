const slider = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

prev.addEventListener("click", () => {
    prevSlide();
});

next.addEventListener("click", () => {
    nextSlide();
});

function prevSlide() {
    if(index == 0) {
        index = slider.length - 1;
    }
    else {
        index--;
    }
    changeSlide();
}

function nextSlide() {
    if(index == slider.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for (i = 0; i < slider.length; i++) {
        slider[i].classList.remove("active");
    }
    slider[index].classList.add("active");
};

// function autoSlide() {
//     nextSlide();
// }

// let timer = setInterval(autoSlide, 4000);