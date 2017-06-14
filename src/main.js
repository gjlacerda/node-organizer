const Document = require('./classes/Document'),
      Movie    = require('./classes/Movie'),
      Music    = require('./classes/Music'),
      Picture  = require('./classes/Picture'),
      types    = [
          new Document(),
          new Movie(),
          new Music(),
          new Picture()
      ];

// Do the magic
types.forEach(type => {
    type.organize();
});