const signInModal = document.querySelector(".whoflex-signin-modal");
const signUpModal = document.querySelector(".whoflex-signup-modal");
const signInTrigger = document.querySelector(".signin-trigger");
const signUpTrigger = document.querySelector(".signup-trigger");
const signInCloseButton = document.querySelector(".whoflex-signin-close-button");
const signUpCloseButton = document.querySelector(".whoflex-signup-close-button");


function windowOnClick(event) {
    console.log('event', event.target);
    if (event.target === signInModal) {
        toggleSignInModal();
    } else if(event.target === signUpModal) {
        toggleSignUpModal();
    }
}

function toggleSignInModal() {
    signInModal.classList.toggle("whoflex-signin-show-modal");
    // modal.classList.add("whoflex-show-modal");
}
function toggleSignUpModal() {
    signUpModal.classList.toggle("whoflex-signup-show-modal");
    // modal.classList.add("whoflex-show-modal");
}




signInTrigger.addEventListener("click", toggleSignInModal);
signUpTrigger.addEventListener("click", toggleSignUpModal);
signInCloseButton.addEventListener("click", toggleSignInModal);
signUpCloseButton.addEventListener("click", toggleSignUpModal);
window.addEventListener("click", windowOnClick);


// window.addEventListener("load", toggleSignUpModal)
