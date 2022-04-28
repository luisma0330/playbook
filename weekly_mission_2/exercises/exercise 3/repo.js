export default class Repo{
    constructor(name, author, languaje, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.languaje = languaje
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }

    getTotalIssues(){
        return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
        return `Este repositorio ${this.name} fue creador por ${this.author}`
    }

}