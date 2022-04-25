const issue = {
    tittle: "New Issue",
    repositoryNameAssociated: "LaunchX",
    status: "Active",
    numberOfComments: 9,
    labels: 3,
    author: "luisma0330",
    dateCreated: "12/04/2022",
    lastUpdated: "25/04/2022",
    getTitleAndAuthor: function(){
        return `El titulo del issue es ${this.tittle} y el autor es ${this.author}`
    },
    getGeneralInfo: function(){
        return `Titulo del Issue: ${this.tittle}\nRepo asociado: ${this.repositoryNameAssociated}\nEstatus: ${this.status}`
    }
}

console.log("Titulo y autor")
console.log(issue.getTitleAndAuthor())
console.log("General Info")
console.log(issue.getGeneralInfo())

