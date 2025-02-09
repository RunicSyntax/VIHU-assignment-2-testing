import { add as dateFnsAdd, getYear, isSameDay as dateFnsIsSameDay, isBefore, isAfter } from "date-fns"
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear(): number {
  return getYear(new Date());
}

export function add(date: Date, number: number, type: string = DATE_UNIT_TYPES.DAYS): Date {
  return dateFnsAdd(date, { [type]: number});
}

export function isWithinRange(date: Date, from: Date, to: string): boolean {
  return isBefore(from, date) && isAfter(to, date);
}

export function isDateBefore(date: Date, compareDate: Date): boolean {
  return isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date): boolean {
  return dateFnsIsSameDay(date, compareDate);
}
