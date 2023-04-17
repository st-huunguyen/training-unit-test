import { checkIncrementArray } from './checkIncrementArray copy';

describe('CheckIncrementArray', () => {
  it('should return false when input not is a array', () => {
    expect(checkIncrementArray(null)).toBeFalsy();
    expect(checkIncrementArray(undefined)).toBeFalsy();
  });

  it('should return false input is a empty array', () => {
    expect(checkIncrementArray([])).toBeFalsy();
  });

  it('should return true when input is a array has 1 element', () => {
    expect(checkIncrementArray([1])).toBeTruthy();
  });

  it('should return false when the input array contains at least one not a number element', () => {
    expect(checkIncrementArray([1, 2, 3, null, 4, 5])).toBeFalsy();
  });

  it('should return false when input is a descending array', () => {
    expect(checkIncrementArray([1, 7, 5, 2, 2, 4])).toBeFalsy();
    expect(checkIncrementArray([1, 5, 7, 5])).toBeFalsy();
    expect(checkIncrementArray([1, -5, 7])).toBeFalsy();
  });
  it('should return true when input is a increment array', () => {
    expect(checkIncrementArray([1, 2, 3, 3, 4, 5])).toBeTruthy();
    expect(checkIncrementArray([1.23, 1.234, 4])).toBeTruthy();
    expect(checkIncrementArray([0, 0, 4])).toBeTruthy();
  });
});
