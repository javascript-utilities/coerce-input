/**
 * Coerces values into JavaScript object types where available
 * @function Coerce
 * @param {any} value
 * @returns {any}
 * @throws {!SyntaxError}
 * @author S0AndS0
 * @license AGPL-3.0
 * @example
 * coerce('1');
 * //> 1
 *
 * coerce('stringy');
 * //> "stringy"
 *
 * coerce('{"key": "value"}');
 * //> {key: "value"}
 */
const Coerce = (value: any): any => {
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
    } else {
      return value;
    }
  }
};


/* istanbul ignore next */
if (typeof module !== 'undefined') {
  module.exports = Coerce;
}
