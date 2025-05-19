function showMessage() {
  document.getElementById("message").classList.remove("hidden");
}

function goToLetter() {
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("letterPage").classList.remove("hidden");
}

function backToMain() {
  document.getElementById("letterPage").classList.add("hidden");
  document.getElementById("mainPage").classList.remove("hidden");
}
