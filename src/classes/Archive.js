const File = require('./File');

class Archive extends File {

    constructor() {
        super({
            dirName: 'Archives',
            extensions: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso']
        });
    }
}

module.exports = Archive;
