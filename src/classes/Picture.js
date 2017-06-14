const File = require('./File');

class Picture extends File {

    constructor() {
        super({
            dirName: 'Pictures',
            extensions: ['jpg', 'jpeg', 'png', 'gif', 'raw', 'tiff', 'xcf', 'psd', 'svg', 'bmp']
        });
    }
}

module.exports = Picture;
