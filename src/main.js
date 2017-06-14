const Archive  = require('./classes/Archive');
const Document = require('./classes/Document');
const Movie    = require('./classes/Music');
const Music    = require('./classes/Music');
const Picture  = require('./classes/Picture');
const types    = [
    new Archive(),
    new Document(),
    new Movie(),
    new Music(),
    new Picture()
];

// Do the magic
types.forEach(type => {
    type.organize();
});