var currentPage;

function setCurrentPage(elementId) {
  //hide current page
  if (currentPage) {
    currentPage.style.display = "none";
  }
  currentPage = document.getElementById(elementId);

  currentPage.style.display = "block";
}

function onPageLoad() {
  setCurrentPage("welcome-section");
}

function startQuiz() {
  setCurrentPage("question1-section");
}
