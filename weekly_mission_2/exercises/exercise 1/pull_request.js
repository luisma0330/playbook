const PullRequest = {
    title: "New pull request",
    branchName: "Main",
    dateCreated: "25/04/2022",
    status: "Active",
    autor: "Luis",
    repositoryNameAssociated: "Launch X",
    getStatus: function(){
        return `The status for ${this.title} is: ${this.status}`
    },
    getTitleAndAutor: function(){
        return `The PR ${this.title} and the autor is ${this.autor}`
    }
}

console.log("The status of the PR")
console.log(PullRequest.getStatus())

console.log("The title and autor")
console.log(PullRequest.getTitleAndAutor())