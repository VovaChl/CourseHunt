class JsonPlaceholder {

    getPosts(id) {
        return new Promise((resolve,reject) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'GET' })
            .then(res =>  res.json())
            .then (data => resolve(data))
            .catch( err => reject(err));
        })
    }

    getCommentsByID (id) {
        return new Promise((resolve,reject) => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { method: 'GET' })
            .then(res =>  res.json())
            .then (data => resolve(data))
            .catch( err => reject(err));
        })
    }

}

const server = new JsonPlaceholder();

server.getPosts(1)
    .then(data => data.id)
    .then(server.getCommentsByID)
    .then(comments => console.log(comments));