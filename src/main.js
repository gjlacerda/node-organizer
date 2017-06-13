const Music   = require('./Music');
const Picture = require('./Picture');
const types   = [
    new Music(),
    new Picture()
];

types.forEach(type => {
    type.organize();
});