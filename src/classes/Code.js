const File = require('./File');

class Code extends File {

    constructor() {
        super({
            dirName: 'Code',
            extensions: ['html', 'php', 'js', 'rb', 'py', 'pl', 'cpp', 'c', 'h', 'json', 'yml', 'yaml', 'xml', 'htm', 'asp', 'sh']
        });
    }
}

module.exports = Code;
