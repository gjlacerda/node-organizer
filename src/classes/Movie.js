const File = require('./File');

class Movie extends File {

    constructor() {
        super({
            dirName: 'Movies',
            extensions: ['mp4', 'mkv', 'wmv', 'mov', 'avi']
        });
    }
}

module.exports = Movie;
