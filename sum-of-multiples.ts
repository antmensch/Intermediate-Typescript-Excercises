export function sum(multiples: number[], limit: number): number {
  let result: number = 0;
  for (let i = 1; i < limit; i++) {
    if (multiples.some((el) => i % el === 0)) result += i;
  }

  return result;
}
