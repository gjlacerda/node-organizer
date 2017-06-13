const File = require('./File');

class Music extends File {

    constructor() {

        super({
            dirName: 'Music',
            extensions: ['mp3', 'flac']
        });
    }
}

module.exports = Music;