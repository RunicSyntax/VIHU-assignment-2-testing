import moment from "moment";
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear(): number {
  return moment().year();
}

export function add(date: string, number: number, type: string = DATE_UNIT_TYPES.DAYS): string {
  return moment(date).add(number, type).toDate();
}

export function isWithinRange(date: string, from: string, to: string): boolean {
  return moment(date).isBetween(from, to);
}

export function isDateBefore(date: string, compareDate: string): boolean {
  return moment(date).isBefore(compareDate);
}

export function isSameDay(date: string, compareDate: string): boolean {
  return moment(date).isSame(compareDate);
}
