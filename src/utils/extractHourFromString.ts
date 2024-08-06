export function extractHourFromString(string: string, position: number) {
  const timeParts = string.split("às");
  const hourString = timeParts[position];
  const hour = parseInt(hourString, 10);

  return hour;
}
