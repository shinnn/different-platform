'use strict';

const differentPlatform = require('.');
const pretendPlatform = require('pretend-platform');
const test = require('tape');

test('differentPlatform() on Windows', t => {
  pretendPlatform('win32');

  t.equal(differentPlatform(), 'linux', 'should return `linux`.');
  t.end();
});

test('differentPlatform() on non-Windows OS', t => {
  pretendPlatform('linux');

  t.equal(differentPlatform(), 'win32', 'should return `win32`.');
  t.end();
});
