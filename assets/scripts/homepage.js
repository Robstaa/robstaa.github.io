document.addEventListener("DOMContentLoaded", () =>  {

  const startButton = document.querySelector("#start");
  const blackCover = document.querySelector("#black-cover");

  // Variable to see which window should be displayed

  startButton.addEventListener("click", fadeOutDarkness);


  // To set any element to display: none; after a specific number of seconds
  function displayNoneAfterTransition(element, timeout) {
    setTimeout(() => {
      element.className = ""
      element.classList.add("displayNone");
    }, timeout * 1000);
  };

  // Beginning of website animation
  function fadeOutDarkness() {
    startButton.classList.add("hiddenWindow");
    displayNoneAfterTransition(startButton, 1);
    blackCover.classList.add("hiddenWindow");
    displayNoneAfterTransition(blackCover, 4);
  }

  // To make the window slide
  let pageIndex = 0;
  const lastPageIndex = 6;
  const previousArrow = document.querySelector("#go-previous");
  const nextArrow = document.querySelector("#go-next");

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
      previousArrow.classList.add("zeroOpacity");
      previousArrow.classList.remove("arrow-transition");
      console.log(pageIndex);
    } else if (pageIndex ===  lastPageIndex) {
      nextArrow.classList.add("zeroOpacity");
      nextArrow.classList.remove("arrow-transition");
      console.log(pageIndex);
    } else {
      previousArrow.classList.remove("zeroOpacity");
      previousArrow.classList.add("arrow-transition");
      nextArrow.classList.remove("zeroOpacity");
      nextArrow.classList.add("arrow-transition");
      console.log(pageIndex);
    }
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

