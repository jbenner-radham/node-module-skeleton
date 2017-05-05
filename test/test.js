'use strict';

const expect = require('chai').expect;
const module = require('../lib');

describe('module', function () {
    it('is a function', function () {
        expect(module).to.be.a('function');
    });
});
