const File = require('./File');

class Archive extends File {

    constructor() {
        super({
            dirName: 'Archives',
            extensions: ['zip', '7z', 'exe', 'html', 'php', 'js', 'rar']
        });
    }
}

module.exports = Archive;