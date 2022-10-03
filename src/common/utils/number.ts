export function decommaizeNumber(number: string) {
  return Number(number.replaceAll(/,/g, ''));
}
