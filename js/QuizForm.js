let QuizForm = document.getElementById("QuizForm");
let QuizForm2 = document.getElementById("QuizForm2");
let QuizForm3 = document.getElementById("QuizForm3");
let QuizForm_btn = document.getElementById("QuizForm-btn");
let QuizForm_btn2 = document.getElementById("QuizForm-btn2");

QuizForm_btn.addEventListener("click", () => {
  QuizForm.classList.add("d-none");
  QuizForm2.classList.remove("d-none");
});

QuizForm_btn2.addEventListener("click", () => {
  QuizForm.classList.add("d-none");
  QuizForm2.classList.add("d-none");
  QuizForm3.classList.remove("d-none");
});
