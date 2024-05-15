
// const user = {
//     name: 'Pavel',
//     age: 29,
//     isAdmin: false,
//     eyeColor: 'unclear',
//     shoeSize: '43'
// }

// console.log(user)

// ==============================

// const users = {
//     Max: {
//         age: 22,
//         isAdmin: false,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// users.Max.sayHello('Teem')

// =============================


const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false

    },
    {
        name: 'John',
        age: 30,
        isAdmin: true

    },
    {
        name: 'Max',
        age: 30,
        isAdmin: true

    },
    {
        name: 'Pavel',
        age: 30,
        isAdmin: false

    },
]

let usersCount = 0;

users.forEach(user => {
    if (!user.isAdmin) {
        usersCount++;
    }
});

console.log(usersCount)

