import Repo from './repo'

test('1) Create a new object repo', () => {
    const myRepo = new Repo('Launch X', 'luisma0330', 'javascript', 78, 3, 5, 2, 0)
    expect(myRepo.author).toBe('luisma0330');
});

test('2) Get total issues', () => {
    const myRepo = new Repo('Launch X', 'luisma0330', 'javascript', 78, 3, 5, 2, 0)
    expect(myRepo.getTotalIssues()).toBe(2)
});