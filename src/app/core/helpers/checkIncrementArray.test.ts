import { checkIncrementArray } from './checkIncrementArray';

describe('CheckIncrementArray', () => {
  describe('Input is not an array', () => {
    it('Should return false because null is not a array', () => {
      expect(checkIncrementArray(null)).toBe(false);
    });
    it('Should return false because not have input', () => {
      expect(checkIncrementArray()).toBe(false);
    });
    it('Should return false because object is not a array', () => {
      expect(checkIncrementArray({})).toBe(false);
    });
    it('Should return false because boolean is not a array', () => {
      expect(checkIncrementArray(true)).toBe(false);
    });
    it('Should return false because undefined is not a array', () => {
      expect(checkIncrementArray(undefined)).toBe(false);
    });
    it('Should return false because empty string is not a array', () => {
      expect(checkIncrementArray('abc')).toBe(false);
    });
    it('Should return false because number is not a array', () => {
      expect(checkIncrementArray(1)).toBe(false);
    });
  });

  describe('Input is an array', () => {
    it('Should return false because input is a empty array', () => {
      expect(checkIncrementArray([])).toBe(false);
    });
    it('Should return false because array has 1 element', () => {
      expect(checkIncrementArray([1])).toBe(false);
    });
    describe('Input has an element that is not a number', () => {
      it('Should return false because array has an element is string', () => {
        expect(checkIncrementArray([1, '2'])).toBe(false);
      });
      it('Should return false because array has an element is boolean', () => {
        expect(checkIncrementArray([1, false])).toBe(false);
      });
      it('Should return false because array has an element is undefined', () => {
        expect(checkIncrementArray([1, undefined])).toBe(false);
      });
      it('Should return false because array has an element is null', () => {
        expect(checkIncrementArray([1, null])).toBe(false);
      });
      it('Should return false because array has an element is object', () => {
        expect(checkIncrementArray([1, {}])).toBe(false);
      });
    });

    describe('Input is an array that has all of element is a number', () => {
      it('Should return false when the input array contains at least one not a number element', () => {
        expect(checkIncrementArray([1, 2, 3, null, 4, 5])).toBe(false);
      });
      it('Should return false when input is a descending array', () => {
        expect(checkIncrementArray([1, 7, 5, 2, 2, 4])).toBe(false);
        expect(checkIncrementArray([1, 5, 7, 5])).toBe(false);
        expect(checkIncrementArray([1, -5, 7])).toBe(false);
      });
      it('Should return true when input is a increment array', () => {
        expect(checkIncrementArray([1, 2, 3, 3, 4, 5])).toBe(true);
        expect(checkIncrementArray([1.23, 1.234, 4])).toBe(true);
        expect(checkIncrementArray([0, 0, 4])).toBe(true);
      });
    });
  });
});
