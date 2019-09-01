const babelOptions = require('./.jest.babelrc.js');

module.exports = require('babel-jest').createTransformer(babelOptions);
