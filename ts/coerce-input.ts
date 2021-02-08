'use strict';


/**
 * Coerces values into JavaScript object types where available
 * @function Coerce
 * @param {any} value
 * @returns {any}
 * @throws {!SyntaxError}
 * @author S0AndS0
 * @license AGPL-3.0
 * @example
 * Coerce('1');
 * //> 1
 *
 * Coerce('stringy');
 * //> "stringy"
 *
 * Coerce('{"key": "value"}');
 * //> {key: "value"}
 */
const Coerce_Input = (value: any): any => {
  try {
    return JSON.parse(value);
  } catch (e) {
    /* istanbul ignore next */
    if (!(e instanceof SyntaxError)) {
      throw e;
    }

    if (['undefined', undefined].includes(value)) {
      return undefined;
    } else if (['NaN', NaN].includes(value)) {
      return NaN;
    } else if (['Infinity', Infinity].includes(value)) {
      return Infinity;
    } else if (['-Infinity', -Infinity].includes(value)) {
      return -Infinity;
    } else {
      return value;
    }
  }
};


/* istanbul ignore next */
if (typeof module !== 'undefined') {
  module.exports = { Coerce_Input };
}
