
// async/await 
async function getName() {
    // await
    let user = await github.getUser('dmgame');
    let repos = await github.repos(user);
    
    return { user, repos };
}

// console.log(getName(), new Date())
// getName()
//     .then(value => console.log(value));


// промис heeeeeeeell

function request1 () {
    return new Promise((resolve, reject) => {
            setTimeout(() => resolve({
                data: 'Data',
                makeAnotherRequest: true,
            }), 2000);
    })
}    

function request2 () {
    return new Promise((resolve, reject) => {
            setTimeout(() => resolve({
                data: 'Another Data',
            }), 2000);
    })
}   

function makeRequests() {

    request1() 
        .then(data => {
            if (data.makeAnotherRequest) {
                return request2()
                    .then(moreData => {
                        return moreData;
                    })
            } else {
                return data;
            }
        })
        .then(result => console.log(result))

}

makeRequests();

// тож самое с asinc, оно читабельней
async function makeRequests2() {

    // throw new Error('Error'); // генерируем ошибку
    // return Promise.reject('error') // тож ошибка

    const data = await request1();

    if (data.makeAnotherRequest) {
        const moreData = await request2();
        return moreData;
    } else {
        return data;
    }
}

// makeRequests2()
//     .then (result => console.log(result))
//     .catch(error => console.log(error))

// let data = '{"name": "Denis"}';

// try {
//     let json = JSON.parse(data);
    
//     if (!json.age) {
//         throw new Error('Ошибка в данных')
//     }
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log('Final');
// }

// console.log('hello');