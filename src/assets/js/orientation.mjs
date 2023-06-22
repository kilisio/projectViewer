document
  .querySelector(".orientationContainer i")
  .addEventListener("click", () => {
    let orientation = document.querySelector(".orientationContainer").dataset
      .orientation;
    if (orientation == "portrait") {
      document.querySelector(".orientationContainer i").classList.add("rotate");
      document.querySelector(".orientationContainer").dataset.orientation =
        "landscape";
    } else if (orientation == "landscape") {
      document
        .querySelector(".orientationContainer i")
        .classList.remove("rotate");
      document.querySelector(".orientationContainer").dataset.orientation =
        "portrait";
    }
    // change orientation of iframe
    const iframe = document.querySelector(".responsiveIframe iframe");
    let width = iframe.offsetWidth;
    let height = iframe.offsetHeight;
    document.querySelector(".responsiveIframe iframe").style.width =
      height + "px";
    document.querySelector(".responsiveIframe iframe").style.height =
      width + "px";
  });
