/**
 * Coerces values into JavaScript object types
 * @function coerce
 * @param {any} value
 * @returns {any}
 * @throws {!SyntaxError}
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
const Coerce = (value) => {
    try {
        return JSON.parse(value);
    }
    catch (e) {
        /* istanbul ignore next */
        if (!(e instanceof SyntaxError)) {
            throw e;
        }
        if (['undefined', undefined].includes(value)) {
            return undefined;
        }
        else if (['NaN', NaN].includes(value)) {
            return NaN;
        }
        else {
            return value;
        }
    }
};
/* istanbul ignore next */
if (typeof module !== 'undefined') {
    module.exports = Coerce;
}
