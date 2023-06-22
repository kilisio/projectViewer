
document.querySelector('.nav-link[data-href="navTodo"]').addEventListener("click", () => {
  document.querySelectorAll(".nav-link").forEach((e) => {
    e.classList.remove("active");
  });
  document.querySelector('.nav-link[data-href="navTodo"]').classList.add("active");
  document.querySelector('.screens').style.backgroundColor="#4d4d4d"
  document.querySelector('.screens').style.pointerEvents="none"
  document.querySelectorAll('.screenIcon').forEach((e) => {
    e.style.color="#ccc!important";
  });
  document.querySelector('.todoTabs').classList.remove('hide');
  document.querySelector('.responsiveTabs').classList.add('hide');
  document.querySelector('.taskList').classList.remove('hide');
  document.querySelector('.responsiveIframe').classList.add('hide');
});

document.querySelector('.nav-link[data-href="navDesign"]').addEventListener("click", () => {
  document.querySelectorAll(".nav-link").forEach((e) => {
    e.classList.remove("active");
  });
  document.querySelector('.nav-link[data-href="navDesign"]').classList.add("active");
  document.querySelector('.screens').style.backgroundColor="#066"
  document.querySelector('.screens').style.pointerEvents="auto"
  document.querySelectorAll('.screenIcon').forEach((e) => {
    e.style.color="#fff";
  });
  document.querySelector('.todoTabs').classList.add('hide');
  document.querySelector('.responsiveTabs').classList.remove('hide');
  document.querySelector('.taskList').classList.add('hide');
  document.querySelector('.responsiveIframe').classList.remove('hide');
});

document.querySelector('.nav-link[data-href="navWeb"]').addEventListener("click", () => {
  document.querySelectorAll(".nav-link").forEach((e) => {
    e.classList.remove("active");
  });
  document.querySelector('.nav-link[data-href="navWeb"]').classList.add("active");
  document.querySelector('.screens').style.backgroundColor="#066"
  document.querySelector('.screens').style.pointerEvents="auto"
  document.querySelectorAll('.screenIcon').forEach((e) => {
    e.style.color="#fff";
  });
  document.querySelector('.todoTabs').classList.add('hide');
  document.querySelector('.responsiveTabs').classList.remove('hide');
  document.querySelector('.taskList').classList.add('hide');
  document.querySelector('.responsiveIframe').classList.remove('hide');
});
