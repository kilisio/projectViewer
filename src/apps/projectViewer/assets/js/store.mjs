Alpine.store("projectList", {
  project: null,
  path() {
    if (this.project != null || this.project != "Project...") {
      return "apps/" + this.project + "/index.html";
    }
  },
});

Alpine.start();
