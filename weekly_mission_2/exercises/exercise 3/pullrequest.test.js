import PullRequest from './pullrequest'

test('1) Create a new object pullrequest', () => {
    const myPR = new PullRequest('New PR', 'master', '28/03/2021', 'Active', 'luisma0330', 'Launch X')
    expect(myPR.repositoryNameAssociated).toBe('Launch X')
});

test('2) Getting the status and not to be Actives', () => {
    const myPR = new PullRequest('New PR', 'master', '28/03/2021', 'Active', 'luisma0330', 'Launch X')
    expect(myPR.getStatus()).not.toBe(78)
})