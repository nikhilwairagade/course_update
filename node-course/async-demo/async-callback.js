console.log('Befor')
user(1, displayUser)
console.log('after');
function displayUser(id) {
    console.log('user', id);
    getRepositories(user.gitHubUsername, displayRepositories)
}

function displayRepositories(repos) {
    console.log('repos', repos)
}

function user(id, callback) {
    setTimeout(() => {
        console.log('reading a user from a database...');
        callback({ id: id, gitHubUsername: 'niks' })
    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('calling GitHub API....')
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)

}


