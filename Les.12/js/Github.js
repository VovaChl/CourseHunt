class Github {
    constructor() {
        this.client_id = 'ed98b2f3af728e68cfb9';
        this.client_secret = 'f82ad21274f334d4b682d32c1d5b49556971adb1';
    }

    // Get user by name
    getUser (name) {
        return new Promise ((resolve, reject) => {
            fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`, {
                headers: { "Authorization": "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" }
            })
                .then(res => res.json())
                .then(user => resolve(user))
                .catch(err => reject(err));
        })
    }

    // Get repos by name
    getRepos (user) {
        return new Promise ((resolve, reject) => {
            if (!user.login) {
                reject('User not found');
            }
            fetch(`https://api.github.com/users/${user.login}/repos?per_page=${5}&sort=${'created:asc'}&client_id=${this.client_id}&client_secret=${this.client_secret}`, {
                headers: { "Authorization": "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" }
            })
                .then(res => res.json())
                .then(user => resolve(user))
                .catch(err => reject(err));
        })
    }
}