document.querySelector(".screenIcon.phone").addEventListener("click", () => {
  document.querySelectorAll(".screenIcon").forEach((e) => {
    e.classList.remove("activeIcon");
  });
  document.querySelector(".screenIcon.phone").classList.add("activeIcon");
  // change iframe dimensions and reset transform scale and zoomFill width
  document.querySelector(".responsiveIframe iframe").style.transform = 'scale(1)';
  document.querySelector(".zoomFill").style.width = '100%';
  document.querySelector(".responsiveIframe iframe").style.height = "480px";
  document.querySelector(".responsiveIframe iframe").style.height = "480px";
  // reset orientation
  let orientation = document.querySelector(".orientationContainer").dataset
    .orientation;
  if (orientation == "landscape") {
    document
      .querySelector(".orientationContainer i")
      .classList.remove("rotate");
    document.querySelector(".orientationContainer").dataset.orientation =
      "portrait";
  }
});

document.querySelector(".screenIcon.phablet").addEventListener("click", () => {
  document.querySelectorAll(".screenIcon").forEach((e) => {
    e.classList.remove("activeIcon");
  });
  document.querySelector(".screenIcon.phablet").classList.add("activeIcon");
  // change iframe dimensions and reset transform scale and zoomFill width
  document.querySelector(".responsiveIframe iframe").style.transform = 'scale(1)';
  document.querySelector(".zoomFill").style.width = '100%';
  document.querySelector(".responsiveIframe iframe").style.width = "360px";
  document.querySelector(".responsiveIframe iframe").style.height = "640px";
  // reset orientation
  let orientation = document.querySelector(".orientationContainer").dataset
    .orientation;
  if (orientation == "landscape") {
    document
      .querySelector(".orientationContainer i")
      .classList.remove("rotate");
    document.querySelector(".orientationContainer").dataset.orientation =
      "portrait";
  }
});

document.querySelector(".screenIcon.tablet").addEventListener("click", () => {
  document.querySelectorAll(".screenIcon").forEach((e) => {
    e.classList.remove("activeIcon");
  });
  document.querySelector(".screenIcon.tablet").classList.add("activeIcon");
  // change iframe dimensions and reset transform scale and zoomFill width
  document.querySelector(".responsiveIframe iframe").style.transform = 'scale(1)';
  document.querySelector(".zoomFill").style.width = '100%';
  document.querySelector(".responsiveIframe iframe").style.width = "576px";
  document.querySelector(".responsiveIframe iframe").style.height = "1024px";
  // reset orientation
  let orientation = document.querySelector(".orientationContainer").dataset
    .orientation;
  if (orientation == "landscape") {
    document
      .querySelector(".orientationContainer i")
      .classList.remove("rotate");
    document.querySelector(".orientationContainer").dataset.orientation =
      "portrait";
  }
});

document.querySelector(".screenIcon.laptop").addEventListener("click", () => {
  document.querySelectorAll(".screenIcon").forEach((e) => {
    e.classList.remove("activeIcon");
  });
  document.querySelector(".screenIcon.laptop").classList.add("activeIcon");
  // change iframe dimensions and reset transform scale and zoomFill width
  document.querySelector(".responsiveIframe iframe").style.transform = 'scale(1)';
  document.querySelector(".zoomFill").style.width = '100%';
  document.querySelector(".responsiveIframe iframe").style.width = "768px";
  document.querySelector(".responsiveIframe iframe").style.height = "1366px";
  // reset orientation
  let orientation = document.querySelector(".orientationContainer").dataset
    .orientation;
  if (orientation == "landscape") {
    document
      .querySelector(".orientationContainer i")
      .classList.remove("rotate");
    document.querySelector(".orientationContainer").dataset.orientation =
      "portrait";
  }
});

document
  .querySelector(".screenIcon.widescreen")
  .addEventListener("click", () => {
    document.querySelectorAll(".screenIcon").forEach((e) => {
      e.classList.remove("activeIcon");
    });
    document
      .querySelector(".screenIcon.widescreen")
      .classList.add("activeIcon");
  // change iframe dimensions and reset transform scale and zoomFill width
  document.querySelector(".responsiveIframe iframe").style.transform = 'scale(1)';
  document.querySelector(".zoomFill").style.width = '100%';
    document.querySelector(".responsiveIframe iframe").style.width = "1080px";
    document.querySelector(".responsiveIframe iframe").style.height = "1920px";
  // reset orientation
  let orientation = document.querySelector(".orientationContainer").dataset
    .orientation;
  if (orientation == "landscape") {
    document
      .querySelector(".orientationContainer i")
      .classList.remove("rotate");
    document.querySelector(".orientationContainer").dataset.orientation =
      "portrait";
  }
  });
