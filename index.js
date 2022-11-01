import { randomString } from '../random-js/index.js';

let UNIQUE = [];

/**
 * Generates a guaranteed unique string.
 *
 * @param {int} length - The length of the string.
 *
 * @return {string}
 */
export default function(length = 25) {
    if (!Number.isInteger(length)) {
        throw '`length` should be an integer';
    }

    let uniq = '';

    do {
        uniq = randomString(length);
    } while(UNIQUE.includes(uniq));

    UNIQUE.push(uniq);

    return uniq;
}

