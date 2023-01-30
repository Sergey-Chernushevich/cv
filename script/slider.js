const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

const slides = document.querySelectorAll(".project-card");
const slideWrapper = document.querySelector(".slide-wrapper");

let count = 0;

btnNext.addEventListener("click", (e) => {
  if (count < slides.length - 2) {
    count++;
    btnPrev.classList.remove("disabled");
    if (count === slides.length - 2) {
      btnNext.classList.add("disabled");
    }
    console.log(count);
    slideWrapper.style.transform = "translateX( " + -330 * count + "px)";
  }
});

btnPrev.addEventListener("click", () => {
  if (count > 0) {
    count--;
    console.log(count);
    slideWrapper.style.transform = "translateX( " + -330 * count + "px)";
    btnNext.classList.remove("disabled");
    if (count === 0) {
      btnPrev.classList.add("disabled");
    }
  }
});
