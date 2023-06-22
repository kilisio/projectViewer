document.querySelector(".backlog").addEventListener("click", () => {
  document.querySelectorAll(".todoTabContainer").forEach((e) => {
    e.classList.remove("activeTab");
  });
  document.querySelector(".backlog").classList.add("activeTab");
  document.querySelector(".taskList").dataset.priority = "C";
  document.querySelector(".taskList").dataset.category = "backlog";
});

document.querySelector(".todo").addEventListener("click", () => {
  document.querySelectorAll(".todoTabContainer").forEach((e) => {
    e.classList.remove("activeTab");
  });
  document.querySelector(".todo").classList.add("activeTab");
  document.querySelector(".taskList").dataset.priority = "B";
  document.querySelector(".taskList").dataset.category = "todo";
});

document.querySelector(".activated").addEventListener("click", () => {
  document.querySelectorAll(".todoTabContainer").forEach((e) => {
    e.classList.remove("activeTab");
  });
  document.querySelector(".activated").classList.add("activeTab");
  document.querySelector(".taskList").dataset.priority = "A";
  document.querySelector(".taskList").dataset.category = "active";
});

document.querySelector(".done").addEventListener("click", () => {
  document.querySelectorAll(".todoTabContainer").forEach((e) => {
    e.classList.remove("activeTab");
  });
  document.querySelector(".done").classList.add("activeTab");
  document.querySelector(".taskList").dataset.priority = "";
  document.querySelector(".taskList").dataset.category = "done";
});

