#!/usr/bin/env node

const Music   = require('./classes/Music');
const Picture = require('./classes/Picture');
const types   = [
    new Music(),
    new Picture()
];

types.forEach(type => {
    type.organize();
});