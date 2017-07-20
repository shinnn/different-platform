'use strict';

module.exports = function differentPlatform() {
  if (process.platform === 'win32') {
    return 'linux';
  }

  return 'win32';
};
