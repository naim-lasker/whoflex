const signInModal = document.querySelector(".whoflex-signin-modal");
const signUpModal = document.querySelector(".whoflex-signup-modal");
const signInTrigger = document.querySelector(".signin-trigger");
const signUpTrigger = document.querySelector(".signup-trigger");
const signInCloseButton = document.querySelector(".whoflex-signin-close-button");
const signUpCloseButton = document.querySelector(".whoflex-signup-close-button");
const signUpButton = document.getElementById("signUpButton");
const signUpInputs = document.getElementById("signUpInputs");
const signUpSocialButtons = document.getElementById("signUpSocialButtons");
const signUpBackButton = document.getElementById("signUpBackButton");
const errorMessage = document.getElementById("error-message");
errorMessage.style.display = "none";
const email = document.getElementById('email');
const haveAccount = document.getElementById('have-account');
haveAccount.innerHTML = 'Already have an account?'


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
}
function toggleSignUpModal() {
    signUpModal.classList.toggle("whoflex-signup-show-modal");
}


function hideEmailSignUpEmail(e) {
    e.preventDefault()
    haveAccount.innerHTML = 'Don\'t have an account?'
    signUpInputs.classList.add("d-block")
    signUpInputs.classList.remove("d-none")
    signUpButton.classList.add("d-none")
    signUpSocialButtons.classList.add("d-none")
}

function showEmailSignUpEmail(e) {
    e.preventDefault()
    haveAccount.innerHTML = 'Already have an account?'
    signUpInputs.classList.add("d-none")
    signUpInputs.classList.remove("d-block")
    signUpButton.classList.add("d-block")
    signUpButton.classList.remove("d-none")
    signUpSocialButtons.classList.add("d-block")
    signUpSocialButtons.classList.remove("d-none")

}

signInTrigger.addEventListener("click", toggleSignInModal);
signUpTrigger.addEventListener("click", toggleSignUpModal);
signInCloseButton.addEventListener("click", toggleSignInModal);
signUpCloseButton.addEventListener("click", toggleSignUpModal);
window.addEventListener("click", windowOnClick);
signUpButton.addEventListener('click', (e) => hideEmailSignUpEmail(e))
signUpBackButton.addEventListener('click', (e) => showEmailSignUpEmail(e))


function checkEmailValidation() {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(email.value)) {
        errorMessage.style.display = "block";
          email.focus;
          return false;
      } else {
          errorMessage.style.display = "none";
      }
}
