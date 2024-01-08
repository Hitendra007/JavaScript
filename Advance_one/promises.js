// Promise example 1
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task (e.g., Db calls, cryptography tasks, network calls)
    setTimeout(() => {
        console.log('Async task is completed');
        resolve(); // Resolve the promise after the async task is completed
    }, 1000);
});

// Consume the first promise
promiseOne.then(() => {
    console.log('promise consumed');
});

// Promise example 2
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('async task 2');
        resolve(); // Resolve the promise after the async task is completed
    }, 1000);
}).then(() => {
    console.log('Async 2 resolved');
});

// Promise example 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({
            username: 'Hitendra',
            email: 'hitedra369432@gmail.com',
        });
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
});

// Promise example 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: 'hitendra', password: '1234' });
        } else {
            reject('Error something went wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(() => {
        console.log('Finally the promise is either resolved or rejected');
    });

// Promise example 5
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let err = true;
        if (!err) {
            resolve({ username: 'javascript', password: '12233' });
        } else {
            reject('error occurred');
        }
    }, 1000);
});

// Async function using await and try-catch
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
consumePromiseFive();

// Async function making a fetch API call
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error: ', error);
    }
}

getAllUsers();

// Fetch API call using promises
fetch('https://api.github.com/users/Hitendra007')
    .then((response) => {
        return response.json();
    })
    .then((resp) => {
        console.log(resp);
    })
    .catch((error) => {
        console.log(error);
    });
