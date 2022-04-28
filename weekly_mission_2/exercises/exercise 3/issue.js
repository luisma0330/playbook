class issue{
    constructor(tittle, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.tittle = tittle
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }

    getTittleAndAuthor(){
        return `El titulo del issue es ${this.tittle} y el autor es ${this.author}`
    }

    getGeneralInfo(){
        return `Titulo del Issue: ${this.tittle}\nRepo asociado: ${this.repositoryNameAssociated}\nEstatus: ${this.status}`
    }
}