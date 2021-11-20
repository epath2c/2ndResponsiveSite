const openModalBtn = document.querySelector(".login-btn");
const closeModalBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideModalClick);

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function outsideModalClick(e) {
  console.log(e.target);
  if (e.target === modal) {
    closeModal();
  }
}
