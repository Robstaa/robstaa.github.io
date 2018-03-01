document.addEventListener("DOMContentLoaded", () =>  {

  const startButton = document.querySelector("#start");
  const blackCover = document.querySelector("#black-cover");

  // Variable to see which window should be displayed

  startButton.addEventListener("click", fadeOutDarkness);


  // To set any element to display: none; after a specific number of seconds
  function displayNoneAfterTransition(element, timeout) {
    setTimeout(() => {
      element.className = ""
      element.classList.add("display-none");
    }, timeout * 1000);
  };

  // Beginning of website animation
  function fadeOutDarkness() {
    startButton.classList.add("hidden-window");
    displayNoneAfterTransition(startButton, 1);
    blackCover.classList.add("hidden-window");
    displayNoneAfterTransition(blackCover, 4);
  }

  // Arrows to change the page index
  let pageIndex = 0;
  const lastPageIndex = 4;
  const previousArrow = document.querySelector("#go-previous");
  const nextArrow = document.querySelector("#go-next");

  const page2 = document.querySelector("#page2")

  // Slideshow
  allPages = document.querySelectorAll(".page-content")

  previousArrow.classList.remove("direction-arrow:hover")

  nextArrow.addEventListener("click", () => {
    nextPage();
    pageChange();
  });

  previousArrow.addEventListener("click", () => {
    previousPage();
    pageChange();
  });

  function pageChange() {
    if (pageIndex === 0) {
      previousArrow.classList.add("zero-opacity");
      previousArrow.classList.remove("arrow-transition");
    } else if (pageIndex ===  lastPageIndex) {
      nextArrow.classList.add("zero-opacity");
      nextArrow.classList.remove("arrow-transition");
    } else {
      previousArrow.classList.remove("zero-opacity");
      previousArrow.classList.add("arrow-transition");
      nextArrow.classList.remove("zero-opacity");
      nextArrow.classList.add("arrow-transition");
    }
    for (let i = 0; i < allPages.length; i++) {
      allPages[i].classList.add("display-none");
    }
    allPages[pageIndex].classList.remove("display-none");
  };

  function nextPage() {
    if (pageIndex < lastPageIndex) {
      pageIndex++;
    }
  };

  function previousPage() {
    if (pageIndex > 0) {
      pageIndex--;
    }
  };

});





