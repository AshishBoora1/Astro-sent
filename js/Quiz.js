const buttons = document.querySelectorAll(".banner-quiz-parent button");
const arrows = document.querySelectorAll(".banner-quiz-parent button svg");
const images = document.querySelectorAll(".w-30 img");

buttons.forEach((btn, index) => {
  btn.addEventListener("mouseenter", () => {
    images.forEach((img, i) => {
      img.classList.toggle("d-none", i !== index);
    });
    arrows.forEach((arrow, i) => {
      arrow.style.opacity = i === index ? "1" : "0";
    });
    buttons.forEach((b, i) => {
      b.style.fontWeight = i === index ? "700" : "400";
    });
  });

  btn.addEventListener("mouseleave", () => {
    images.forEach((img, i) => {
      img.classList.toggle("d-none", i !== 0);
    });

    arrows.forEach((arrow, i) => {
      arrow.style.opacity = i === 0 ? "1" : "0";
    });

    buttons.forEach((b, i) => {
      b.style.fontWeight = i === 0 ? "700" : "400";
    });
  });
});

arrows.forEach((arrow, i) => {
  arrow.style.opacity = i === 0 ? "1" : "0";
});
buttons.forEach((b, i) => {
  b.style.fontWeight = i === 0 ? "700" : "400";
});
