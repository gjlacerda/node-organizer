const File = require('./File');

class Document extends File {

    constructor() {
        super({
            dirName: 'Documents',
            extensions: ['docx', 'doc', 'pdf', 'xlsx', 'xls']
        });
    }
}

module.exports = Document;