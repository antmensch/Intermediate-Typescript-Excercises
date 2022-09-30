export function valid(digitString: string): boolean {
  const normalized: string = digitString.trim().toLowerCase().replace(/\s/g, '');
  if (normalized.length < 2) return false;

  const digits: number[] = normalized.split('').map(elem => parseInt(elem));
  let even = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (isNaN(digits[i])) return false;
    if (even) digits[i] *= 2;
    if (digits[i] > 9) digits[i] -= 9;
    even = !even;
  }

  const result = digits.reduce((a, b) => a + b);

  return result % 10 == 0;

}
