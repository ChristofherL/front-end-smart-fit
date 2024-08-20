import { Location } from "../interfaces/Location";
import { Period } from "../interfaces/Period";
import { extractHourFromString } from "./extractHourFromString";

enum weekDays {
  "Dom." = 0,
  "Seg." = 1,
  "Ter." = 2,
  "Qua." = 3,
  "Qui." = 4,
  "Sex." = 5,
  "Sáb." = 6,
}

export function filterLocations(locations: Location[], period: Period) {
  const filteredLocations = [];

  for (const location of locations) {
    if (!location.schedules?.length) {
      filteredLocations.push(location);
      break;
    }

    for (const schedule of location.schedules) {
      const startDay = extractWeekDay(schedule.weekdays, 0);
      const endDay = extractWeekDay(schedule.weekdays, 1);

      const openingTime = extractHourFromString(schedule.hour, 0);
      const closingTime = extractHourFromString(schedule.hour, 1);

      if (
        isCurrentDayWithinRange(startDay, endDay) &&
        isPeriodWithinOrExtendingOperatingHours(openingTime, closingTime, period)
      ) {
        filteredLocations.push(location);
        break;
      }
    }
  }

  return filteredLocations;
}

function extractWeekDay(weekDays: string, position: number) {
  const separateWeekDays = weekDays.split(" à ");
  const weekDay = separateWeekDays[position];

  return weekDay;
}

function isCurrentDayWithinRange(startDay: string, endDay: string) {
  const now = new Date();
  const weekDay = now.getDay();

  return (
    weekDays[startDay as keyof typeof weekDays] <= weekDay &&
    weekDays[endDay as keyof typeof weekDays] >= weekDay
  );
}

function isPeriodWithinOrExtendingOperatingHours(
  openingTime: number,
  closingTime: number,
  period: Period
) {
  return (
    doesPeriodContainOperatingHours(openingTime, closingTime, period) ||
    isPeriodExtendingBeyondClosingTime(openingTime, closingTime, period)
  );
}

function doesPeriodContainOperatingHours(openingTime: number, closingTime: number, period: Period) {
  return openingTime >= period.start && closingTime <= period.end;
}

function isPeriodExtendingBeyondClosingTime(
  openingTime: number,
  closingTime: number,
  period: Period
) {
  return period.start >= openingTime && period.end > closingTime;
}
