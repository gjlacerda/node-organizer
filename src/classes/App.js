const File = require('./File');

class App extends File {

    constructor() {
        super({
            dirName: 'Apps',
            extensions: ['exe', 'dmg', 'pkg']
        });
    }
}

module.exports = App;
