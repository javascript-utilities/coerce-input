/**
 * @author S0AndS0
 * @copyright AGPL-3.0
 * @example <caption>Jest Tests for Coerce</caption>
 * // Initialize new class instance and run tests
 * const test_coerce = new Coerce_Test();
 * test_coerce.runTests();
 */
class Coerce_Test {
    constructor() {
        this.coerce = require('../coerce.js');
    }
    /**
     *
     */
    runTests() {
        this.testsArray();
        this.testsBoolean();
        this.testsDictionary();
        this.testsNaN();
        this.testsNull();
        this.testsNumber();
        this.testsString();
        this.testsUndefined();
    }
    /**
     *
     */
    testsArray() {
        test('Does square brackets without content equal an empty Array?', () => {
            expect(this.coerce('[]')).toStrictEqual([]);
        });
        test('Will square brackets with numbers equal a numerical Array?', () => {
            expect(this.coerce('[1, 2.5, 3]')).toStrictEqual([1, 2.5, 3]);
        });
        test('Do square brackets with strings equal a _stringy_ Array?', () => {
            expect(this.coerce('["spam", "flavored", "ham"]')).toStrictEqual(["spam", "flavored", "ham"]);
        });
        test('Will square brackets with numbers and _stringy_ numbers equal a mixed Array?', () => {
            expect(this.coerce('[1, "2.5", 3]')).toStrictEqual([1, "2.5", 3]);
        });
    }
    /**
     *
     */
    testsBoolean() {
        test('Is "true" coerced to `true`?', () => {
            expect(this.coerce("true")).toBe(true);
        });
        test('Will `true` remain `true`?', () => {
            expect(this.coerce(true)).toBe(true);
        });
        test('Is "false" coerced to `false`?', () => {
            expect(this.coerce("false")).toBe(false);
        });
        test('Will `false` remain `false`?', () => {
            expect(this.coerce(false)).toBe(false);
        });
    }
    /**
     *
     */
    testsDictionary() {
        test('Are empty curly braces coerced to an Object?', () => {
            expect(this.coerce('{}')).toStrictEqual({});
        });
        test('Will JSON with embeded Array coerce to an Object?', () => {
            const received = '{"nummber_array": [1, 2.5, 3]}';
            const expected = { nummber_array: [1, 2.5, 3] };
            expect(this.coerce(received)).toStrictEqual(expected);
        });
    }
    /**
     *
     */
    testsEmpty() {
        test('Will empty input result in error?', () => {
            expect(this.coerce()).toThrowError();
        });
    }
    /**
     *
     */
    testsNaN() {
        test('Is "NaN" coerced to `NaN`?', () => {
            expect(this.coerce("NaN")).toBe(NaN);
        });
        test('Will `NaN` remain `NaN`?', () => {
            expect(this.coerce(NaN)).toBe(NaN);
        });
    }
    /**
     *
     */
    testsNull() {
        test('Is "null" coerced to `null`?', () => {
            expect(this.coerce("null")).toBe(null);
        });
        test('Will `null` remain `null`?', () => {
            expect(this.coerce(null)).toBe(null);
        });
    }
    /**
     *
     */
    testsNumber() {
        test('Is "1" coerced to `1`?', () => {
            expect(this.coerce('1')).toBe(1);
        });
        test('Does `1` remain `1`?', () => {
            expect(this.coerce(1)).toBe(1);
        });
        test('Is "2.5" coerced to `2.5`?', () => {
            expect(this.coerce('2.5')).toBe(2.5);
        });
        test('Does `2.5` remain `2.5`?', () => {
            expect(this.coerce(2.5)).toBe(2.5);
        });
    }
    /**
     *
     */
    testsString() {
        test('Are strings unaffected by coercion?', () => {
            expect(this.coerce('string')).toBe('string');
        });
        // test('', () => {
        //   expect(this.coerce()).toStrictEqual();
        // });
    }
    /**
     *
     */
    testsUndefined() {
        test('Is "undefined" coerced to `undefined`?', () => {
            expect(this.coerce("undefined")).toBe(undefined);
        });
        test('Will `undefined` remain `undefined`?', () => {
            expect(this.coerce(undefined)).toBe(undefined);
        });
    }
}
const test_coerce = new Coerce_Test();
test_coerce.runTests();
