#!/usr/bin/env node


/**
 * @author S0AndS0
 * @copyright AGPL-3.0
 * @example <caption>Jest Tests for Coerce</caption>
 * // Initialize new class instance and run tests
 * const test_coerce_input = new Coerce_Test();
 * test_coerce_input.runTests();
 */
class Coerce_Test {
  coerce_input: Function;

  constructor() {
    this.coerce_input = require('../coerce-input').Coerce_Input;
  }

  /**
   *
   */
  runTests() {
    this.testsArray();
    this.testsBoolean();
    this.testsDictionary();
    this.testsInfinity();
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
      expect(this.coerce_input('[]')).toStrictEqual([]);
    });

    test('Will square brackets with numbers equal a numerical Array?', () => {
      expect(this.coerce_input('[1, 2.5, 3]')).toStrictEqual([1, 2.5, 3]);
    });

    test('Do square brackets with strings equal a _stringy_ Array?', () => {
      expect(this.coerce_input('["spam", "flavored", "ham"]')).toStrictEqual(["spam", "flavored", "ham"]);
    });

    test('Will square brackets with numbers and _stringy_ numbers equal a mixed Array?', () => {
      expect(this.coerce_input('[1, "2.5", 3]')).toStrictEqual([1, "2.5", 3]);
    });
  }

  /**
   *
   */
  testsBoolean() {
    test('Is "true" coerce_inputd to `true`?', () => {
      expect(this.coerce_input("true")).toBe(true);
    });

    test('Will `true` remain `true`?', () => {
      expect(this.coerce_input(true)).toBe(true);
    });

    test('Is "false" coerce_inputd to `false`?', () => {
      expect(this.coerce_input("false")).toBe(false);
    });

    test('Will `false` remain `false`?', () => {
      expect(this.coerce_input(false)).toBe(false);
    });
  }

  /**
   *
   */
  testsDictionary() {
    test('Are empty curly braces coerce_inputd to an Object?', () => {
      expect(this.coerce_input('{}')).toStrictEqual({});
    });

    test('Will JSON with embeded Array coerce_input to an Object?', () => {
      const received = '{"nummber_array": [1, 2.5, 3]}';
      const expected = {nummber_array: [1, 2.5, 3]};
      expect(this.coerce_input(received)).toStrictEqual(expected);
    });
  }

  /**
   *
   */
  testsInfinity() {
    test('Is "Infinity" coerce_inputd to a Number?', () => {
      expect(this.coerce_input("Infinity")).toBe(Infinity);
    });

    test('Is `Infinity` coerce_inputd to a Number?', () => {
      expect(this.coerce_input(Infinity)).toBe(Infinity);
    });

    test('Is "-Infinity" coerce_inputd to a Number?', () => {
      expect(this.coerce_input("-Infinity")).toBe(-Infinity);
    });

    test('Is `-Infinity` coerce_inputd to a Number?', () => {
      expect(this.coerce_input(-Infinity)).toBe(-Infinity);
    });
  }

  /**
   *
   */
  testsEmpty() {
    test('Will empty input result in error?', () => {
      expect(this.coerce_input()).toThrowError();
    });
  }

  /**
   *
   */
  testsNaN() {
    test('Is "NaN" coerce_inputd to `NaN`?', () => {
      expect(this.coerce_input("NaN")).toBe(NaN);
    });

    test('Will `NaN` remain `NaN`?', () => {
      expect(this.coerce_input(NaN)).toBe(NaN);
    });
  }

  /**
   *
   */
  testsNull() {
    test('Is "null" coerce_inputd to `null`?', () => {
      expect(this.coerce_input("null")).toBe(null);
    });

    test('Will `null` remain `null`?', () => {
      expect(this.coerce_input(null)).toBe(null);
    });
  }

  /**
   *
   */
  testsNumber() {
    test('Is "1" coerce_inputd to `1`?', () => {
      expect(this.coerce_input('1')).toBe(1);
    });

    test('Does `1` remain `1`?', () => {
      expect(this.coerce_input(1)).toBe(1);
    });

    test('Is "2.5" coerce_inputd to `2.5`?', () => {
      expect(this.coerce_input('2.5')).toBe(2.5);
    });

    test('Does `2.5` remain `2.5`?', () => {
      expect(this.coerce_input(2.5)).toBe(2.5);
    });
  }

  /**
   *
   */
  testsString() {
    test('Are strings unaffected by coercion?', () => {
      expect(this.coerce_input('string')).toBe('string');
    });
    // test('', () => {
    //   expect(this.coerce_input()).toStrictEqual();
    // });
  }

  /**
   *
   */
  testsUndefined() {
    test('Is "undefined" coerce_inputd to `undefined`?', () => {
      expect(this.coerce_input("undefined")).toBe(undefined);
    });

    test('Will `undefined` remain `undefined`?', () => {
      expect(this.coerce_input(undefined)).toBe(undefined);
    });
  }
}


const test_coerce_input: Coerce_Test = new Coerce_Test();
test_coerce_input.runTests();
