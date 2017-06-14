const fs = require('fs');

class File {

    constructor(file) {
        this.file = file;
    }

    organize() {

        let files        = this.getFiles('./'),
            filesMatched = this.getFilesMatched(files);

        if (filesMatched.length) {
            this.createDir(this.file.dirName);
            this.moveFiles(filesMatched, this.file.dirName);
        }
    }

    /**
     * Create a directory
     * @param name
     */
    createDir(name) {
        if (!fs.existsSync(name)) {
            fs.mkdirSync(name);
        }
    }

    /**
     * Move the files to the target destination
     * @param files
     * @param target
     */
    moveFiles(files, target) {

        files.forEach(file => {

            let oldPath = './' + file,
                newPath = `./${target}/${file}`;

            fs.rename(oldPath, newPath, err => {

                if (err) {
                    return console.log('Error while moving the file: ' + file);
                }

                console.log(`File ${file} moved successfully to: /${target}`);
            });
        });
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
