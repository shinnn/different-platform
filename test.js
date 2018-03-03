'use strict';

const differentPlatform = require('.');
const pretendPlatform = require('pretend-platform');
const test = require('tape');

test('differentPlatform()', t => {
	t.throws(
		() => differentPlatform('a'),
		/^RangeError.*Expected no arguments, but got 1 arguments instead\./,
		'should throw an error when it takes any arguments.'
	);

	t.end();
});

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
