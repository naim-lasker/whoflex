const modal = document.querySelector(".whoflex-modal");
const trigger = document.querySelector(".whoflex-trigger");
const closeButton = document.querySelector(".whoflex-close-button");

function toggleModal() {
    modal.classList.toggle("whoflex-show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
