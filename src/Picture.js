const File = require('./File');

class Picture extends File {

    constructor() {
        super({
            dirName: 'Picture',
            extensions: ['jpg', 'jpeg', 'png']
        });
    }
}

module.exports = Picture;