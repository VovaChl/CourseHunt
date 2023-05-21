// init firebase
const db = Firebase.getInstance().getDb();

class Projects {
    async getAllProjects() {
        const projects = await db.collection("projects").get().then((querySnapshot) => {
            return querySnapshot.forEach((doc) => {
                return doc.data();
            });
        })

        return projects;
    }
}