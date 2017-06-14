#!/usr/bin/env node

const File = require('./File');

class Picture extends File {

    constructor() {
        super({
            dirName: 'Pictures',
            extensions: ['jpg', 'jpeg', 'png', 'gif']
        });
    }
}

module.exports = Picture;