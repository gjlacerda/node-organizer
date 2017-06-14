const File = require('./File');

class Music extends File {

    constructor() {
        super({
            dirName: 'Musics',
            extensions: ['mp3', 'flac', 'wav']
        });
    }
}

module.exports = Music;