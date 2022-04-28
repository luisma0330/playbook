import Issue from './issue'

test('1) Create a new object Issue', () => {
    const myIssue = new Issue('Bug 1', 'Launch X', 'Active', 2, 5, 'luisma0330', '20/03/2022', '25/04/2022')
    expect(myIssue.tittle).toBe('Bug 1')
});