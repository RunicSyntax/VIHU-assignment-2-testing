import { describe, expect, test} from 'vitest';
import { getCurrentYear, add, isWithinRange, isDateBefore, isSameDay } from '../dateUtils';
import { DATE_UNIT_TYPES } from '../constants';


describe("Date Utils", () => {
  test("current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  })

  test("add", () => {
    const sampleDate = new Date(2003, 2, 4);
    const expectedData = new Date(2003, 2, 5);
    const resultData = add(sampleDate, 1);
    expect(resultData.getDate()).toBe(expectedData.getDate());
  })

  test("is within range", () => {
    const beforeDate = new Date(2018, 8, 20);
    const inRangeDate = new Date(2019, 2, 13);
    const afterDate = new Date(2020, 1, 10);
    expect(isWithinRange(inRangeDate, beforeDate, afterDate)).toBeTruthy();
  })

  test("is not within range", () => {
    const beforeDate = new Date(2018, 8, 20);
    const inRangeDate = new Date(2022, 2, 13);
    const afterDate = new Date(2020, 1, 10);
    expect(isWithinRange(inRangeDate, beforeDate, afterDate)).toBeFalsy();
  })

  test("is date before", () => {
    const beforeDate = new Date(2020, 1, 10);
    const currentDate = new Date();
    expect(isDateBefore(beforeDate, currentDate)).toBeTruthy();
  })

  test("is not date before", () => {
    const beforeDate = new Date(2020, 1, 10);
    const currentDate = new Date();
    expect(isDateBefore(currentDate, beforeDate)).toBeFalsy();
  })

  test("is same date", () => {
    const date = new Date(2020, 1, 1);
    expect(isSameDay(date, date)).toBeTruthy();
  })

  test("is not same date", () => {
    const date = new Date(2020, 1, 1);
    const otherDate = new Date()
    expect(isSameDay(date, otherDate)).toBeFalsy();
  })
});
