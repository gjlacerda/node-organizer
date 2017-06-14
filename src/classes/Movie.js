const File = require('./File');

class Movies extends File {

    constructor() {
        super({
            dirName: 'Movies',
            extensions: ['mp4', 'mkv', 'wmv']
        });
    }
}

module.exports = Movies;