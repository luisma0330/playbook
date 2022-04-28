class pullRequest{
    constructor(title, branchName, dateCreated, status, author, repositoryNameAssociated){
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.author = author
        this.repositoryNameAssociated = repositoryNameAssociated
    }

    getStatus(){
        return `The status for ${this.title} is: ${this.status}`
    }

    getTitleAndAutor(){
        return `The PR ${this.title} and the autor is ${this.autor}`
    }

}