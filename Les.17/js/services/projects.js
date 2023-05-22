// init firebase
const db = Firebase.getInstance().getDb();
let projectsList = [];
class Projects {
    async getAllProjects() {
        projectsList = [];
        await db.collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let project = doc.data();
                project.id = doc.id;
                projectsList.push(project);
            });
        })

        return projectsList;
    }

    async addProject(project) {
        await db.collection("projects").doc().set({
            name: project.name,
            description:project.description,
            price:project.price,
            amount:project.amount,
            img: project.img
        })
        .then(() => {
            return Promise.resolve();
        })
        .catch(error =>  Promise.reject(error));
    }

    async editProject(id, options) {
        await db.collection("projects").doc(id).update(options).then(()=> {
            return Promise.resolve();
        }).catch(error =>  Promise.reject(error));
    }

    async deleteProject(id) {
        await db.collection("projects").doc(id).delete().then(()=> {
            return Promise.resolve();
        }).catch(error =>  Promise.reject(error));
    }
}