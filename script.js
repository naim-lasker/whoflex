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
const signupRightContainer = document.getElementById('signup-right-container')
signupRightContainer.classList.add("mt-36")
const whoflexAggrement = document.getElementById('whoflex-aggrement')
whoflexAggrement.classList.add("mb-0", "mt-45")
const signupImg = document.getElementById('signupImg')
const signupModalContainer = document.getElementById('signupModalContainer')
const whoflexLeftTextContainer = document.getElementById('whoflexLeftTextContainer')

function windowOnClick(event) {
    console.log('event', event.target);
    if (event.target === signInModal) {
        toggleSignInModal();
    } else if (event.target === signUpModal) {
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
    signupImg.src = "images/sign-up2.png"
    haveAccount.innerHTML = 'Don\'t have an account?'
    signUpInputs.classList.add("d-block")
    signUpInputs.classList.remove("d-none")
    signUpButton.classList.add("d-none")
    signUpSocialButtons.classList.add("d-none")
    signupRightContainer.classList.add("mt-0")
    signupRightContainer.classList.remove("mt-36")
    whoflexAggrement.classList.add("mb-17", "mt-90")
    whoflexAggrement.classList.remove("mb-0", "mt-45" )
    signupModalContainer.style.height = "679px"
    whoflexLeftTextContainer.style.bottom = "192px"
}

function showEmailSignUpEmail(e) {
    e.preventDefault()
    signupImg.src = "images/sign-up.png"
    haveAccount.innerHTML = 'Already have an account?'
    signUpInputs.classList.add("d-none")
    signUpInputs.classList.remove("d-block")
    signUpButton.classList.add("d-block")
    signUpButton.classList.remove("d-none")
    signUpSocialButtons.classList.add("d-block")
    signUpSocialButtons.classList.remove("d-none")
    signupRightContainer.classList.add("mt-36")
    signupRightContainer.classList.remove("mt-0")
    whoflexAggrement.classList.add("mb-0", "mt-45")
    whoflexAggrement.classList.remove("mb-17", "mt-90")
    signupModalContainer.style.height = "642px"
    whoflexLeftTextContainer.style.bottom = "158px"

}

signInTrigger.addEventListener("click", toggleSignInModal);
signUpTrigger.addEventListener("click", toggleSignUpModal);
signInCloseButton.addEventListener("click", toggleSignInModal);
signUpCloseButton.addEventListener("click", toggleSignUpModal);
window.addEventListener("click", windowOnClick);
signUpButton.addEventListener('click', (e) => hideEmailSignUpEmail(e))
signUpBackButton.addEventListener('click', (e) => showEmailSignUpEmail(e))


function checkEmailValidation() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        errorMessage.style.display = "block";
        email.style.border = "1px solid #ea4335";

        email.focus;
        return false;
    } else {
        errorMessage.style.display = "none";
        email.style.border = "1px solid #dddddd";
    }
}
