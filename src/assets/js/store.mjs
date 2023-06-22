Alpine.store("taskList", {
  priority: "C",
  project: null,
  async tasks() {
    if (this.project != null || this.project != "Project...") {
      const tasks = await fetch(
        // "assets/js/" + this.project + "/tasks.json"
        "tasks/" + this.project + "/tasks.json"
      ).then((res) => res.json());
      return tasks.tasks;
    }
  },
});

Alpine.store("projectList", {
  display: null,
  project: null,
  path(){
    if ((this.display != null) && (this.project != null)){
      return this.display + '/' + this.project + '/index.html'
    }
    // if(this.display == "design"){
    //   return "https://kilisio.deno.dev"
    // }
    // else if(this.display == "web"){
    //   return "https:www.css-tricks.com"
    // }
  }
});

Alpine.start();
