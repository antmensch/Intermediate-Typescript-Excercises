export function nth(desired: number): number {
  if (desired < 1 || desired % 1 != 0) throw new Error('Prime is not possible');
  let primesCounter: number = 0;
  let result: number = 0;
  let i: number = 2;
  while (true) {
    if (isPrime(i)) {
      primesCounter++;
      if (primesCounter == desired) return i;
      i++;
    } else i++;
  }

  function isPrime(number: number): boolean {
    const upperBoundary: number = Math.ceil(number/2);
    for (let i = 2; i <= upperBoundary; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

}
