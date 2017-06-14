const File = require('./File');

class Document extends File {

    constructor() {
        super({
            dirName: 'Documents',
            extensions: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex']
        });
    }
}

module.exports = Document;
