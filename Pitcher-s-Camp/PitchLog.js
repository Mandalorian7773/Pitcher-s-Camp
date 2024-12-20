document.getElementById("switchToSignUp").addEventListener("click", function () {
    document.querySelectorAll(".form-container")[0].classList.add("hidden");
    document.querySelectorAll(".form-container")[1].classList.remove("hidden");
});

document.getElementById("switchToSignIn").addEventListener("click", function () {
    document.querySelectorAll(".form-container")[1].classList.add("hidden");
    document.querySelectorAll(".form-container")[0].classList.remove("hidden");
});
document.getElementById("switchToSignUp").addEventListener("click", function () {
    document.querySelectorAll(".form-container")[0].classList.add("hidden");
    document.querySelectorAll(".form-container")[1].classList.remove("hidden");
});

document.getElementById("switchToSignIn").addEventListener("click", function () {
    document.querySelectorAll(".form-container")[1].classList.add("hidden");
    document.querySelectorAll(".form-container")[0].classList.remove("hidden");
});

