const fs = require('fs');

class File {

    constructor(file) {
        this.file = file;
    }

    organize() {

        let files      = this.getFiles('./'),
            filesMatched = this.getFilesMatched(files);

        console.log(filesMatched);
    }

    /**
     * Create a directory
     * @param name
     */
    createDir(name) {
        fs.mkdirSync(name);
    }

    /**
     * List the files from a directory
     * @param path
     * @returns {*}
     */
    getFiles(path) {
        return fs.readdirSync(path);
    }

    getExtension(file) {

        let parts = file.split('.');

        return parts[parts.length - 1];
    }

    /**
     * Get the files matched with the extensions
     * @param files
     * @returns {Array}
     */
    getFilesMatched(files) {
        return files.filter(file => this.file.extensions.indexOf(this.getExtension(file)) !== -1);
    }
}

module.exports = File;