'use strict';

module.exports = function differentPlatform(...args) {
  if (args.length !== 0) {
    throw new RangeError(`Expected no arguments, but got ${args.length} arguments instead.`);
  }

  if (process.platform === 'win32') {
    return 'linux';
  }

  return 'win32';
};
