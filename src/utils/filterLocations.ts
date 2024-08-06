import { Location } from "../interfaces/Location";
import { Period } from "../interfaces/Period";
import { extractHourFromString } from "./extractHourFromString";


export function filterLocations(locations: Location[], period: Period) {
  const results: Location[] = [];

  locations.forEach((location) =>
    location.schedules?.forEach((schedule) => {
      if (checkTheOperatingPeriodOfUnit(schedule.hour, period)) {
        results.push(location);
      }
    })
  );

  return results;
}

function checkTheOperatingPeriodOfUnit(hour: string, period: Period) {
  const openingTime = extractHourFromString(hour, 0);
  const closingTime = extractHourFromString(hour, 1);

  if (
    isWithinPeriod(openingTime, closingTime, period) ||
    isOverlappingPeriod(openingTime, closingTime, period)
  ) {
    return true;
  }

  return false;
}

function isWithinPeriod(openingTime: number, closingTime: number, period: Period) {
  return openingTime >= period.init && closingTime <= period.end;
}

function isOverlappingPeriod(openingTime: number, closingTime: number, period: Period) {
  return openingTime <= period.init && closingTime >= period.end;
}
