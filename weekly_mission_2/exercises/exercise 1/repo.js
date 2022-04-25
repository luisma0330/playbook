const repo = {
    name: "LaunchX",
    author: "luisma0330",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `Este repositorio ${this.name} fue creador por ${this.author}`
    }
   }
   
   console.log("Nombre del repo: " + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())